import { NextResponse } from "next/server";

const SHEET_ID = "15dajldPK4BxU51wZDyjn0XzEdua0HGEKxbl4IZTpWMA";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

type PodcastEntry = {
  date: string;
  name: string;
  host: string;
  link: string;
  importance: number;
};

const parseCsvLine = (line: string) => {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];

    if (char === "\"") {
      if (inQuotes && line[index + 1] === "\"") {
        current += "\"";
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current.trim());
  return values;
};

const parseCsv = (csvText: string) => {
  const lines = csvText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return lines.map(parseCsvLine);
};

const parseDate = (value: string) => {
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? null : timestamp;
};

export async function GET() {
  try {
    const response = await fetch(CSV_URL, { cache: "no-store" });

    if (!response.ok) {
      return NextResponse.json({ podcasts: [], error: "Unable to load podcasts." }, { status: 502 });
    }

    const csvText = await response.text();
    const rows = parseCsv(csvText);

    if (rows.length === 0) {
      return NextResponse.json({ podcasts: [] }, { headers: { "Cache-Control": "no-store" } });
    }

    const header = rows[0].map((cell) => cell.toLowerCase());
    const dateIndex = header.indexOf("date");
    const nameIndex = header.indexOf("name");
    const hostIndex = header.indexOf("host");
    const linkIndex = header.indexOf("link");
    const importanceIndex = header.indexOf("importance");

    const resolvedDateIndex = dateIndex === -1 ? 0 : dateIndex;
    const resolvedLinkIndex = linkIndex === -1 ? 1 : linkIndex;
    const resolvedNameIndex = nameIndex === -1 ? 2 : nameIndex;
    const resolvedHostIndex = hostIndex === -1 ? 3 : hostIndex;

    const podcasts: PodcastEntry[] = rows.slice(1)
      .map((row) => ({
        date: row[resolvedDateIndex]?.trim() ?? "",
        name: row[resolvedNameIndex]?.trim() ?? "",
        host: row[resolvedHostIndex]?.trim() ?? "",
        link: row[resolvedLinkIndex]?.trim() ?? "",
        importance: importanceIndex !== -1 ? parseInt(row[importanceIndex]?.trim() ?? "0", 10) || 0 : 0,
      }))
      .filter((entry) => (
        entry.date.length > 0 || entry.name.length > 0 || entry.host.length > 0 || entry.link.length > 0
      ));

    const podcastsWithTimestamp = podcasts.map((entry) => ({
      ...entry,
      timestamp: parseDate(entry.date),
    }));

    const sortedPodcasts = [...podcastsWithTimestamp].sort((a, b) => {
      const importanceDiff = b.importance - a.importance;
      if (importanceDiff !== 0) return importanceDiff;
      return (b.timestamp ?? 0) - (a.timestamp ?? 0);
    });

    return NextResponse.json(
      {
        podcasts: sortedPodcasts.map((entry) => ({
          date: entry.date,
          name: entry.name,
          host: entry.host,
          link: entry.link,
        })),
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json({ podcasts: [], error: "Unable to load podcasts." }, { status: 500 });
  }
}
