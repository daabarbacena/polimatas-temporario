"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "Como Funciona",
  autoPlayInterval = 4000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={`p-8 md:p-12 ${className || ''}`}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-16 text-center text-white">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Steps List */}
          <div className="order-2 md:order-1 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 md:gap-8 cursor-pointer"
                onClick={() => {
                  setCurrentFeature(index)
                  setProgress(0)
                }}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 transition-all ${
                    index === currentFeature
                      ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 border-blue-400 scale-110'
                      : 'bg-gray-900 border-gray-700'
                  }`}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg md:text-xl font-bold text-white">✓</span>
                  ) : (
                    <span className="text-lg md:text-xl font-semibold text-gray-400">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1 pt-1">
                  <h3 className={`text-lg md:text-xl font-semibold transition-colors ${
                    index === currentFeature ? 'text-white' : 'text-gray-400'
                  }`}>
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mt-2 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Display */}
          <div className={`order-1 md:order-2 relative w-full overflow-hidden rounded-2xl ${imageHeight}`}>
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentFeature(index)
                setProgress(0)
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentFeature
                  ? 'w-8 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500'
                  : 'w-2 bg-gray-700 hover:bg-gray-600'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
