"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TrendingUp, CheckCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[700px] bg-gradient-to-br from-[#2E3192] via-[#3D3FA0] to-[#1E1F5C] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-white/20 rounded-full" />
      </div>

      {/* Decorative Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#00C9A7] rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute top-1/2 right-1/4 w-2 h-2 bg-yellow-400 rounded-full"
      />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#00C9A7] font-medium mb-4 tracking-wider"
            >
              WELCOME TO AEROVERSE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance"
            >
             Get a Professional Website.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white/80 text-lg mb-8 max-w-lg"
            >
              Built for Free. Modern, responsive websites designed and developed at zero development cost.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="bg-[#00C9A7] hover:bg-[#00B596] text-white rounded-full px-8 py-6 text-base">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base bg-transparent"
              >
                View Case Study
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <Image
                src="/images/laptop.jpg"
                alt="Professional man with laptop"
                width={700}
                height={400}
                className="rounded-lg"
                priority
              />

              {/* Floating Stats Card - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-8 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-[#00C9A7] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Success Rate</p>
                  <p className="text-sm text-[#00C9A7]">98% satisfied clients</p>
                </div>
              </motion.div>

              {/* Floating Stats Card - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-20 -left-8 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-[#2E3192] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Growth</p>
                  <p className="text-sm text-[#2E3192]">30% this year</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
