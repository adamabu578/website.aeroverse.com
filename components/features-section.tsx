"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "Remote Home Office",
    description: "Lacus in ridiculus mi gravida montes leo arcu semper conubia",
    color: "bg-orange-500",
  },
  {
    title: "Virtual Workstation",
    description: "Lacus in ridiculus mi gravida montes leo arcu semper conubia",
    color: "bg-[#00C9A7]",
  },
  {
    title: "Terminal Server",
    description: "Lacus in ridiculus mi gravida montes leo arcu semper conubia",
    color: "bg-[#2E3192]",
  },
]

export default function FeaturesSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-[#E8F4FC] to-[#F0F7FA]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#00C9A7] font-semibold uppercase tracking-wider text-sm">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E3192] mt-2">Who We Are</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are a team of passionate professionals dedicated to solving complex business challenges with innovative
            technology solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E3192] leading-tight text-balance">
              Let us do the work, so you can focus on what matters.
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.
            </p>
            <Button className="bg-[#00C9A7] hover:bg-[#00B596] text-white rounded-full px-8">Learn more</Button>
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-center"
          >
            <Image
              src="/young-professional-man-using-smartphone-blue-backg.jpg"
              alt="Professional using phone"
              width={350}
              height={500}
              className="rounded-lg shadow-2xl"
            />

            {/* Decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-[#00C9A7] rounded-full opacity-50"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#2E3192] rounded-full opacity-30"
            />
          </motion.div>

          {/* Right Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ x: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-5 shadow-lg flex items-start gap-4"
              >
                <div className={`w-10 h-10 ${feature.color} rounded-full flex items-center justify-center shrink-0`}>
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2E3192] mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
