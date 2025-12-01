"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1E1F5C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#2E3192] font-bold text-lg">b</span>
              </div>
              <span className="font-bold text-xl">Aeroverse</span>
            </div>
            <p className="text-white/70 mb-6">We solve business problems with innovative technology solutions.</p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00C9A7] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {[
            {
              title: "Company",
              links: ["About Us", "Services", "Case Studies", "Blog"],
            },
            {
              title: "Support",
              links: ["Help Center", "Terms of Service", "Privacy Policy", "Contact"],
            },
            {
              title: "Contact Us",
              links: ["support@aeroverse.com", "+234 703 635 2800", "RSQ 10 adeleke Street, kaduna, Nigeria"],
            },
          ].map((column, colIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIndex * 0.1 }}
            >
              <h4 className="font-bold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/70 hover:text-[#00C9A7] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 text-center text-white/60"
        >
          <p>&copy; 2025 Aeroverse. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
