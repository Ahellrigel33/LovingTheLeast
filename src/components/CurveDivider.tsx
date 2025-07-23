interface CurveDividerProps {
  color?: string;
  backgroundColor?: string;
  height?: number;
  className?: string;
}

export default function CurveDivider({ 
  color = "#e2e8f0",
  backgroundColor = "#ffffff",
  height = 60,
  className = ""
}: CurveDividerProps) {
  return (
    <div className={`w-full ${className}`} style={{ backgroundColor }}>
      <svg
        viewBox="0 0 1440 60"
        className="relative block w-full"
        style={{ height: `${height}px` }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 Q360,60 720,30 T1440,30 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
