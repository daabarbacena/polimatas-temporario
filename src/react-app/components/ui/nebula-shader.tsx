import { useEffect, useRef } from "react";
import * as THREE from "three";

export interface NebulaShaderProps {
  className?: string;
}

/**
 * Full-screen nebula shader background with black, gray, and cyan colors.
 */
export function NebulaShader({ className = "" }: NebulaShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Renderer, scene, camera, clock
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    // Vertex shader: pass UVs
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Ray-marched nebula fragment shader with gray and cyan palette
    const fragmentShader = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;
      varying vec2 vUv;

      #define t iTime
      mat2 m(float a){ float c=cos(a), s=sin(a); return mat2(c,-s,s,c); }
      
      float map(vec3 p){
        p.xz *= m(t*0.25);
        p.xy *= m(t*0.2);
        vec3 q = p*2. + t;
        return length(p + vec3(sin(t*0.5))) * log(length(p)+1.0)
             + sin(q.x + sin(q.z + sin(q.y))) * 0.5 - 1.0;
      }

      void mainImage(out vec4 O, in vec2 fragCoord) {
        vec2 uv = fragCoord / min(iResolution.x, iResolution.y) - vec2(.9, .5);
        uv.x += .4;
        vec3 col = vec3(0.0);
        float d = 2.5;

        // Ray-march
        for (int i = 0; i <= 5; i++) {
          vec3 p = vec3(0,0,5.) + normalize(vec3(uv, -1.)) * d;
          float rz = map(p);
          float f = clamp((rz - map(p + 0.1)) * 0.5, -0.1, 1.0);

          // Gray and cyan palette - more visible
          vec3 gray = vec3(0.25, 0.28, 0.32); // Base gray
          vec3 cyan = vec3(0.22, 0.71, 1.0);  // #38b6fe
          vec3 lightGray = vec3(0.4, 0.45, 0.5); // Lighter gray
          
          // Mix grays with cyan highlights
          vec3 base = mix(gray, lightGray, f * 0.6);
          base += cyan * f * 0.5;
          
          col = col * 0.85 + base * smoothstep(2.5, 0.0, rz) * 1.2;
          d += min(rz, 1.0);
        }

        // Boost overall brightness
        col *= 1.4;
        
        // Subtle vignette - less aggressive
        float dist = distance(fragCoord, iResolution * 0.5);
        float radius = min(iResolution.x, iResolution.y) * 0.7;
        float vignette = smoothstep(radius, radius * 0.4, dist);
        
        // Keep colors visible, just subtle darkening at edges
        col = mix(col * 0.7, col, vignette);

        O = vec4(col, 1.0);
      }

      void main() {
        mainImage(gl_FragColor, vUv * iResolution);
      }
    `;

    // Uniforms
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      iMouse: { value: new THREE.Vector2() },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    // Resize handler
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };

    // Mouse move handler for subtle interactivity
    const onMouseMove = (e: MouseEvent) => {
      uniforms.iMouse.value.set(e.clientX, window.innerHeight - e.clientY);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    onResize();

    // Animation loop
    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.setAnimationLoop(null);
      container.removeChild(renderer.domElement);
      material.dispose();
      mesh.geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 bg-black ${className}`}
      aria-label="Animated nebula background"
    />
  );
}
