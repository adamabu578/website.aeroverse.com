"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react"

// Yup validation schema
const contactSchema = yup.object({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  email: yup.string().required("Email is required").email("Please enter a valid email address"),
  phone: yup
    .string()
    .matches(/^[0-9+\-\s()]*$/, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 digits"),
  subject: yup.string().required("Subject is required").min(5, "Subject must be at least 5 characters"),
  message: yup.string().required("Message is required").min(20, "Message must be at least 20 characters"),
})

type ContactFormData = yup.InferType<typeof contactSchema>

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@aeroverse.com",
    color: "bg-[#00C9A7]",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+234 703 635 2800",
    color: "bg-[#2E3192]",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "RSQ 10 adeleke Street, kaduna, Nigeria",
    color: "bg-orange-500",
  },
]

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Form submitted:", data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#2E3192] to-[#1E1F5C]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#00C9A7] font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Contact Us</h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can help transform your business with our technology
            solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4"
              >
                <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center shrink-0`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{info.title}</h3>
                  <p className="text-white/70">{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-[#00C9A7]/20 rounded-xl border border-[#00C9A7]/30"
            >
              <h4 className="font-bold text-white text-lg mb-2">Business Hours</h4>
              <p className="text-white/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-white/70">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-white/70">Sunday: Closed</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-[#00C9A7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2E3192] mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting us. We&apos;ll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register("name")}
                      className={`h-12 ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.name.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="adamu@example.com"
                      {...register("email")}
                      className={`h-12 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      placeholder="+234 703 635 2800"
                      {...register("phone")}
                      className={`h-12 ${errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    />
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.phone.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      {...register("subject")}
                      className={`h-12 ${errors.subject ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    />
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.subject.message}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    {...register("message")}
                    className={`resize-none ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#2E3192] hover:bg-[#252780] text-white rounded-full text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
