// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Code2, Cloud, Shield } from "lucide-react"

// const services = [
//   {
//     icon: Code2,
//     title: "Domain Name",
//     description: "Your unique web address (e.g., yourbusiness.com)",
//     color: "bg-[#2E3192]",
//     featured: false,
//   },
//   {
//     icon: Cloud,
//     title: "Hosting Plan",
//     description: "Reliable server space to keep your site online 24/7",
//     color: "bg-[#00C9A7]",
//     featured: true,
//   },
//   {
//     icon: Shield,
//     title: "Maintenance (Optional)",
//     description: "Regular updates, backups, and technical support",
//     color: "bg-[#2E3192]",
//     featured: false,
//   },
// ]

// export default function ServicesSection() {
//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//            {/* ---- NEW PARAGRAPH AT TOP OF CARDS ---- */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-[#2E3192]">Pricing Essentials</h2>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             These are the essential services required to get your website online. Each item supports your website’s performance,
//             security, and overall functionality.
//           </p>
//         </motion.div>
//         {/* --------------------------------------- */}
//         <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               whileHover={{ y: -10, transition: { duration: 0.3 } }}
//               className={`rounded-2xl p-8 shadow-xl ${
//                 service.featured ? "bg-[#2E3192] text-white" : "bg-white text-gray-800"
//               }`}
//             >
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
//                 className={`w-16 h-16 rounded-xl ${
//                   service.featured ? "bg-[#00C9A7]" : service.color
//                 } flex items-center justify-center mb-6`}
//               >
//                 <service.icon className="w-8 h-8 text-white" />
//               </motion.div>

//               <h3 className="text-xl font-bold mb-3">{service.title}</h3>
//               <p className={`mb-6 ${service.featured ? "text-white/80" : "text-gray-600"}`}>{service.description}</p>

//               <Button
//                 variant={service.featured ? "secondary" : "default"}
//                 className={`rounded-full ${
//                   service.featured
//                     ? "bg-[#00C9A7] hover:bg-[#00B596] text-white"
//                     : "bg-[#2E3192] hover:bg-[#252780] text-white"
//                 }`}
//               >
//                 Learn more
//               </Button>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mt-20"
//         >
//           <span className="text-[#00C9A7] font-semibold uppercase tracking-wider text-sm">What We Offer</span>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#2E3192] mt-2">Our Services</h2>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             We provide comprehensive technology solutions tailored to your business needs, from software development to
//             cloud infrastructure and security.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Code2, Cloud, Shield } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Domain Name",
    description: "Your unique web address (e.g., yourbusiness.com)",
    color: "bg-[#2E3192]",
    featured: false,
  },
  {
    icon: Cloud,
    title: "Hosting Plan",
    description: "Reliable server space to keep your site online 24/7",
    color: "bg-[#00C9A7]",
    featured: true,
  },
  {
    icon: Shield,
    title: "Maintenance (Optional)",
    description: "Regular updates, backups, and technical support",
    color: "bg-[#2E3192]",
    featured: false,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* ---- HEADER ABOVE CARDS (NO OVERLAP) ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E3192]">What You Pay For</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            No hidden fees. You only pay for the essentials that keep your website running.
          </p>
        </motion.div>

        {/* ---- CARDS ---- */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`rounded-2xl p-8 shadow-xl ${
                service.featured ? "bg-[#2E3192] text-white" : "bg-white text-gray-800"
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                className={`w-16 h-16 rounded-xl ${
                  service.featured ? "bg-[#00C9A7]" : service.color
                } flex items-center justify-center mb-6`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className={`mb-6 ${service.featured ? "text-white/80" : "text-gray-600"}`}>
                {service.description}
              </p>

              <Button
                variant={service.featured ? "secondary" : "default"}
                className={`rounded-full ${
                  service.featured
                    ? "bg-[#00C9A7] hover:bg-[#00B596] text-white"
                    : "bg-[#2E3192] hover:bg-[#252780] text-white"
                }`}
              >
                Learn more
              </Button>
            </motion.div>
          ))}
        </div>

        {/* ---- SECTION BOTTOM TEXT ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <span className="text-[#00C9A7] font-semibold uppercase tracking-wider text-sm">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E3192] mt-2">Our Services</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide comprehensive technology solutions tailored to your business needs, from software development to
            cloud infrastructure and security.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
