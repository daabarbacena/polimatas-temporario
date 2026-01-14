import { SplineScene } from "./ui/spline";
import { Spotlight } from "./ui/spotlight";
import { Card } from "./ui/card";

export function SplineHeroBackground() {
  return (
    <Card className="absolute inset-0 bg-black/[0.96] border-0 rounded-none overflow-hidden h-full w-full">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="absolute inset-0">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </Card>
  )
}
