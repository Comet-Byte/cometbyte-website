"use client";

import { Navbar, Footer } from "@/components";
import Link from "next/link";

// Minimal SVG Icons for each service
const WebMobileIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
    </defs>
    <rect x="20" y="25" width="35" height="50" rx="2" fill="none" stroke="url(#webGrad)" strokeWidth="2" />
    <rect x="45" y="15" width="35" height="60" rx="3" fill="none" stroke="url(#webGrad)" strokeWidth="2" />
    <line x1="52" y1="68" x2="73" y2="68" stroke="url(#webGrad)" strokeWidth="2" />
  </svg>
);

const DigitalMarketingIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="marketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f093fb" />
        <stop offset="100%" stopColor="#f5576c" />
      </linearGradient>
    </defs>
    <path d="M 25 70 L 35 50 L 45 60 L 60 30 L 75 40" fill="none" stroke="url(#marketGrad)" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="25" cy="70" r="3" fill="url(#marketGrad)" />
    <circle cx="35" cy="50" r="3" fill="url(#marketGrad)" />
    <circle cx="45" cy="60" r="3" fill="url(#marketGrad)" />
    <circle cx="60" cy="30" r="3" fill="url(#marketGrad)" />
    <circle cx="75" cy="40" r="3" fill="url(#marketGrad)" />
  </svg>
);

const UIUXIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4facfe" />
        <stop offset="100%" stopColor="#00f2fe" />
      </linearGradient>
    </defs>
    <rect x="25" y="25" width="50" height="50" rx="3" fill="none" stroke="url(#designGrad)" strokeWidth="2" />
    <line x1="35" y1="35" x2="55" y2="35" stroke="url(#designGrad)" strokeWidth="2" />
    <line x1="35" y1="45" x2="65" y2="45" stroke="url(#designGrad)" strokeWidth="2" />
    <rect x="35" y="55" width="15" height="12" rx="2" fill="url(#designGrad)" opacity="0.5" />
    <rect x="53" y="55" width="12" height="12" rx="2" fill="url(#designGrad)" opacity="0.5" />
  </svg>
);

const OutsourcingIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="teamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fa709a" />
        <stop offset="100%" stopColor="#fee140" />
      </linearGradient>
    </defs>
    <circle cx="35" cy="35" r="8" fill="url(#teamGrad)" />
    <circle cx="65" cy="35" r="8" fill="url(#teamGrad)" />
    <circle cx="50" cy="65" r="8" fill="url(#teamGrad)" />
    <line x1="35" y1="35" x2="65" y2="35" stroke="url(#teamGrad)" strokeWidth="2" />
    <line x1="35" y1="35" x2="50" y2="65" stroke="url(#teamGrad)" strokeWidth="2" />
    <line x1="65" y1="35" x2="50" y2="65" stroke="url(#teamGrad)" strokeWidth="2" />
  </svg>
);

const InfrastructureIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="infraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#11998e" />
        <stop offset="100%" stopColor="#38ef7d" />
      </linearGradient>
    </defs>
    <rect x="30" y="40" width="12" height="35" rx="2" fill="url(#infraGrad)" opacity="0.7" />
    <rect x="44" y="40" width="12" height="35" rx="2" fill="url(#infraGrad)" opacity="0.9" />
    <rect x="58" y="40" width="12" height="35" rx="2" fill="url(#infraGrad)" opacity="0.7" />
    <ellipse cx="50" cy="30" rx="20" ry="8" fill="url(#infraGrad)" opacity="0.4" />
  </svg>
);

const EcommerceIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="ecomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
    </defs>
    <path d="M 30 30 L 25 70 L 75 70 L 70 30 Z" fill="none" stroke="url(#ecomGrad)" strokeWidth="2.5" />
    <path d="M 38 30 Q 38 20 50 20 Q 62 20 62 30" fill="none" stroke="url(#ecomGrad)" strokeWidth="2.5" />
    <circle cx="35" cy="75" r="3" fill="url(#ecomGrad)" />
    <circle cx="65" cy="75" r="3" fill="url(#ecomGrad)" />
  </svg>
);

const ConsultingIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="consultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2c3e50" />
        <stop offset="100%" stopColor="#4ca1af" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="40" r="15" fill="none" stroke="url(#consultGrad)" strokeWidth="2.5" />
    <line x1="42" y1="32" x2="58" y2="48" stroke="url(#consultGrad)" strokeWidth="2.5" />
    <line x1="42" y1="48" x2="58" y2="32" stroke="url(#consultGrad)" strokeWidth="2.5" />
    <rect x="35" y="60" width="30" height="20" rx="2" fill="none" stroke="url(#consultGrad)" strokeWidth="2" />
  </svg>
);

const SecurityIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="secGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#eb3349" />
        <stop offset="100%" stopColor="#f45c43" />
      </linearGradient>
    </defs>
    <path d="M 50 20 L 70 30 L 70 50 Q 70 70 50 80 Q 30 70 30 50 L 30 30 Z" fill="none" stroke="url(#secGrad)" strokeWidth="2.5" />
    <rect x="42" y="50" width="16" height="15" rx="2" fill="url(#secGrad)" opacity="0.6" />
    <path d="M 45 50 L 45 42 Q 45 36 50 36 Q 55 36 55 42 L 55 50" fill="none" stroke="url(#secGrad)" strokeWidth="2.5" />
  </svg>
);

const SERVICES = [
  {
    icon: <WebMobileIcon />,
    tag: "Development",
    title: "Web & Mobile Development",
    desc: "End-to-end development of web and mobile applications using modern technologies and best practices.",
    price: "From $7,000",
    href: "/services/web-mobile-development",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    icon: <DigitalMarketingIcon />,
    tag: "Marketing",
    title: "Digital Marketing",
    desc: "Comprehensive digital marketing strategies to grow your online presence and drive business results.",
    price: "From $2,500",
    href: "/services/digital-marketing",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: <UIUXIcon />,
    tag: "Design",
    title: "UI/UX Design",
    desc: "Complete design to development workflow creating intuitive and engaging user experiences.",
    price: "From $4,000",
    href: "/services/ui-ux-design",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: <OutsourcingIcon />,
    tag: "Staffing",
    title: "Staff Outsourcing",
    desc: "Scale your team with our expert developers and project managers for your specific needs.",
    price: "Flexible Pricing",
    href: "/services/staff-outsourcing",
    gradient: "from-amber-500 to-yellow-500"
  },
  {
    icon: <InfrastructureIcon />,
    tag: "Cloud",
    title: "Infrastructure & Hosting",
    desc: "Reliable hosting solutions and server management to keep your applications running smoothly.",
    price: "From $1,500",
    href: "/services/infrastructure-hosting",
    gradient: "from-emerald-500 to-green-500"
  },
  {
    icon: <EcommerceIcon />,
    tag: "E-commerce",
    title: "E-commerce Development",
    desc: "Complete e-commerce platforms designed for conversion and customer satisfaction.",
    price: "From $6,000",
    href: "/services/ecommerce-development",
    gradient: "from-purple-600 to-indigo-700"
  },
  {
    icon: <ConsultingIcon />,
    tag: "Consulting",
    title: "Technical Consulting",
    desc: "Strategic technology consulting to help you make informed decisions and optimize your stack.",
    price: "From $150/hr",
    href: "/services/technical-consulting",
    gradient: "from-slate-600 to-gray-700"
  },
  {
    icon: <SecurityIcon />,
    tag: "Security",
    title: "Cyber Security",
    desc: "Comprehensive security assessments and penetration testing to protect your digital assets.",
    price: "From $5,000",
    href: "/services/cyber-security",
    gradient: "from-red-500 to-orange-500"
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative px-8 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-gray-200/50 shadow-sm mb-6">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Our Services</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business<br />With Our Expertise
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to drive growth, innovation, and success. 
              From development to security, we provide end-to-end services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-8 py-20 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <Link key={index} href={service.href}>
                <div className="group relative bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="absolute top-0 left-0 w-20 h-20 p-4">
                      {service.icon}
                    </div>
                  </div>

                  {/* Tag */}
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    {service.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {service.desc}
                  </p>

                  {/* Price & Arrow */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                    <span className="text-sm font-semibold text-gray-900"></span>
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                      <svg className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20 bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss your project and find the perfect solution for your needs
          </p>
          <a 
            href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20interested%20in%20your%20services.%20Let's%20schedule%20a%20consultation%20to%20discuss%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2">
              <span>Schedule a Consultation</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
