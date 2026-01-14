"use client";
import { motion, useInView } from "framer-motion";
import { Badge } from "./badge";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status?: "done" | "in-progress" | "upcoming";
}

export interface RoadmapCardProps {
  title?: string;
  description?: string;
  items: RoadmapItem[];
}

export function RoadmapCard({
  title = "Product Roadmap",
  description = "Upcoming features and releases",
  items,
}: RoadmapCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Animation delays for each step to sync with line animation
  const stepDelays = [0.3, 0.8, 1.3, 1.8];

  return (
    <div className="w-full" ref={containerRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left - Title and Description */}
        <div className="text-left lg:sticky lg:top-32">
          <motion.p
            className="text-cyan-500 text-sm italic mb-2 uppercase"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            modelo polímatas
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-light text-white mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-gray-500 text-lg font-light max-w-md mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Button 
              variant="expandIcon" 
              Icon={() => <ArrowRight className="h-4 w-4" />} 
              iconPlacement="right"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Agende uma chamada
            </Button>
          </motion.div>
        </div>

        {/* Right - Vertical Timeline (all breakpoints) */}
        <div className="relative">
          <div className="relative max-w-md mx-auto lg:mx-0">
            {/* Continuous vertical gray line (base) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-0.5 bg-white/10" />
            
            {/* Animated cyan line */}
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 top-6 w-0.5 bg-cyan-500 origin-top"
              initial={{ height: 0 }}
              animate={isInView ? { height: "calc(100% - 48px)" } : { height: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            <div className="space-y-12">
              {items.map((item, index) => {
                const isLeft = index === 1 || index === 3; // Passo 2 e 4 na esquerda
                const delay = stepDelays[index];
                
                return (
                  <motion.div
                    key={index}
                    className={`relative flex items-start gap-6 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: delay }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <Badge
                        variant="default"
                        className="mb-2 text-[11px] bg-cyan-500 text-black border-cyan-500"
                      >
                        {item.quarter}
                      </Badge>
                      <h4 className="text-base md:text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Timeline Dot (center) */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        className="w-10 h-10 rounded-full flex items-center justify-center z-10 relative"
                        initial={{ backgroundColor: "rgba(255,255,255,0.2)", scale: 0.8 }}
                        animate={isInView ? { backgroundColor: "#06b6d4", scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: delay }}
                      >
                        <span className="text-sm font-bold text-black">{index + 1}</span>
                      </motion.div>
                    </div>

                    {/* Empty space for alignment */}
                    <div className="flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
