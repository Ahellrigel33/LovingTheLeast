export default function LoadingSpinner({ 
  size = 'medium', 
  color = 'white' 
}: { 
  size?: 'small' | 'medium' | 'large',
  color?: string 
}) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  return (
    <div className="flex items-center justify-center">
      <div 
        className={`${sizeClasses[size]} border-2 border-${color} border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
