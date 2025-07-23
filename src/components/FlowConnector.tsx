interface FlowConnectorProps {
  className?: string;
  color?: string;
  height?: number;
}

export default function FlowConnector({ 
  className = "",
  color = "#e2e8f0",
  height = 120
}: FlowConnectorProps) {
  return (
    <div className={`relative w-full flex justify-center ${className}`} style={{ height: `${height}px` }}>
      <svg
        width="2"
        height={height}
        className="absolute"
        style={{ top: `-${height / 2}px` }}
      >
        <defs>
          <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="50%" stopColor={color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="2" height={height} fill="url(#flow-gradient)" />
      </svg>
      <div 
        className="absolute w-8 h-8 rounded-full border-2"
        style={{ 
          borderColor: color,
          backgroundColor: 'white',
          top: `${height / 2 - 16}px`
        }}
      >
        <div 
          className="absolute inset-2 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
