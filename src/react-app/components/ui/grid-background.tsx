interface GridBackgroundProps {
  className?: string;
}

export function GridBackground({ className = "" }: GridBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 z-0 pointer-events-none ${className}`}
      style={{
        background: `
          linear-gradient(
            90deg, 
            transparent 0%,
            transparent 20%,
            rgba(56, 182, 254, 0.25) 50%,
            transparent 80%,
            transparent 100%
          ),
          linear-gradient(
            to bottom,
            #0a0a0a 0%,
            #1a1a3e 50%,
            #0f0f0f 100%
          )
        `,
        backgroundImage: `
          repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 79px,
            rgba(255, 255, 255, 0.08) 80px,
            rgba(255, 255, 255, 0.08) 81px
          )
        `,
      }}
    />
  );
}

export default GridBackground;
