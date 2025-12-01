"use client"

import { motion } from "framer-motion"

const logos = ["SUSUTECH", "Eva green", "Smatpay", "Hexacore banking", "interswitch*"]

export default function CustomersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#2E3192] mb-16"
        >
          Join our 300 happy customers
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <div className="text-gray-400 font-bold text-lg tracking-wider flex items-center gap-2">
                {index === 0 && <div className="w-6 h-6 bg-gray-300 rounded-full" />}
                {index === 1 && (
                  <div className="flex gap-0.5">
                    <div className="w-3 h-3 bg-gray-400 rounded-sm" />
                    <div className="w-3 h-3 bg-gray-400 rounded-sm" />
                  </div>
                )}
                {index === 2 && (
                  <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  </div>
                )}
                {index === 3 && <div className="w-6 h-6 bg-gray-300 rounded" />}
                {index === 4 && (
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                )}
                {index === 5 && (
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  </div>
                )}
                <span>{logo}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
