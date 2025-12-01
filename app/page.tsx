import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import CustomersSection from "@/components/customers-section"
import FeaturesSection from "@/components/features-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <CustomersSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
