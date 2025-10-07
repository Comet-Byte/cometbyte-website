"use client";

import { Navbar, Footer } from "@/components";
import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

// Animated SVG Component
const WebMobileSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Desktop Browser */}
    <g transform="translate(80, 100)">
      <rect x="0" y="0" width="160" height="100" rx="8" fill="url(#webGradient)" opacity="0.2" filter="url(#glow)">
        <animate attributeName="opacity" values="0.2;0.3;0.2" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="5" y="5" width="150" height="90" rx="4" fill="white" stroke="url(#webGradient)" strokeWidth="2" />
      <circle cx="15" cy="15" r="3" fill="url(#webGradient)" />
      <circle cx="25" cy="15" r="3" fill="url(#webGradient)" />
      <line x1="35" y1="15" x2="145" y2="15" stroke="#e0e0e0" strokeWidth="2" />
      
      {/* Content Lines */}
      <rect x="15" y="30" width="130" height="4" rx="2" fill="url(#webGradient)" opacity="0.3">
        <animate attributeName="width" values="130;140;130" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="15" y="40" width="100" height="4" rx="2" fill="url(#webGradient)" opacity="0.2">
        <animate attributeName="width" values="100;110;100" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <rect x="15" y="50" width="120" height="4" rx="2" fill="url(#webGradient)" opacity="0.3">
        <animate attributeName="width" values="120;130;120" dur="3s" repeatCount="indefinite" />
      </rect>
    </g>

    {/* Mobile Device */}
    <g transform="translate(260, 120)">
      <rect x="0" y="0" width="60" height="100" rx="8" fill="url(#webGradient)" opacity="0.9" filter="url(#glow)">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="5" y="10" width="50" height="70" rx="3" fill="white" />
      <circle cx="30" cy="88" r="4" fill="white" opacity="0.5" />
      
      {/* Mobile Content */}
      <rect x="10" y="18" width="40" height="3" rx="1.5" fill="url(#webGradient)" opacity="0.4">
        <animate attributeName="width" values="40;35;40" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="10" y="26" width="30" height="3" rx="1.5" fill="url(#webGradient)" opacity="0.3">
        <animate attributeName="width" values="30;35;30" dur="2.5s" repeatCount="indefinite" />
      </rect>
    </g>

    {/* Connecting Lines */}
    <g stroke="url(#webGradient)" strokeWidth="2" fill="none" opacity="0.4">
      <path d="M160,150 Q200,130 260,150">
        <animate attributeName="stroke-dasharray" values="0 200;100 100;200 0" dur="4s" repeatCount="indefinite" />
      </path>
    </g>

    {/* Floating Code Elements */}
    <g opacity="0.3" fill="url(#webGradient)" fontSize="12" fontFamily="monospace">
      <text x="50" y="80">&lt;/&gt;
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
      </text>
      <text x="340" y="100">{ }
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" begin="1s" repeatCount="indefinite" />
      </text>
    </g>
  </svg>
);

export default function WebMobileDevelopmentPage() {
  const subServices = [
    {
      title: "React & Next.js Applications",
      description: "Build lightning-fast, SEO-optimized web applications with modern React ecosystem"
    },
    {
      title: "PHP & WordPress Solutions",
      description: "Custom WordPress themes, plugins, and enterprise PHP applications"
    },
    {
      title: "iOS & Android Native Apps",
      description: "Platform-specific applications leveraging native features for optimal performance"
    },
    {
      title: "Cross-Platform Development",
      description: "Single codebase solutions using React Native and Flutter for multi-platform deployment"
    },
    {
      title: "API Development & Integration",
      description: "RESTful and GraphQL APIs with seamless third-party service integration"
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "App-like experiences in the browser with offline capabilities"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative px-8 pt-20 pb-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Web & Mobile Development</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Full-Stack Applications
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                End-to-end development of web and mobile applications using cutting-edge technologies. 
                We transform your ideas into scalable, high-performance digital products.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20interested%20in%20your%20Web%20%26%20Mobile%20Development%20services.%20I'd%20like%20to%20discuss%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    Start Your Project
                  </Button>
                </a>
            
              </div>
            </div>

            {/* SVG Animation */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-8">
                  <WebMobileSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-8 py-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive development services covering every aspect of modern application development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subServices.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-8 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">From concept to deployment, we follow a proven methodology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Design", desc: "Creating intuitive user experiences" },
              { step: "03", title: "Development", desc: "Building with best practices and modern tools" },
              { step: "04", title: "Deployment", desc: "Launching and maintaining your application" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full opacity-20 animate-pulse" />
                  <div className="absolute inset-2 bg-white backdrop-blur-xl border border-gray-200/50 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{phase.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create a solution that drives real business results
          </p>
          <a 
            href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20interested%20in%20your%20Web%20%26%20Mobile%20Development%20services.%20Let's%20discuss%20my%20project%20requirements."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-12"
              placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
            >
              Get in Touch
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
