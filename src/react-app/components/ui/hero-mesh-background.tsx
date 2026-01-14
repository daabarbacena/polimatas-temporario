"use client"

import { MeshGradient } from "@paper-design/shaders-react"

export interface HeroMeshBackgroundProps {
  className?: string
  speed?: number
}

export function HeroMeshBackground({ 
  className = "", 
  speed = 0.8 
}: HeroMeshBackgroundProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Main MeshGradient - Black/Gray/White palette with cyan accent */}
      <MeshGradient
        className="w-full h-full absolute inset-0"
        colors={["#000000", "#1a1a1a", "#2d2d2d", "#38b6fe"]}
        speed={speed}
      />

      {/* Subtle lighting overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/3 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: '3s', animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-gray-500/5 rounded-full blur-xl animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '0.5s' }}
        />
      </div>
    </div>
  )
}

export default HeroMeshBackground
