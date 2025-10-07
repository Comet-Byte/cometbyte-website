// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OurServices from "./our-services";
import WhyChooseUs from "./why-choose-us";
import ClientTestimonials from "./client-testimonials";
import TrustedCompanies from "./trusted-companies";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices />
      <WhyChooseUs />
      {/* <ClientTestimonials /> */}
      <TrustedCompanies />
      <Footer />
    </>
  );
}
