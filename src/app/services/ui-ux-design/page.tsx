"use client";

import { Navbar, Footer } from "@/components";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const UIUXDesignSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4facfe" />
        <stop offset="100%" stopColor="#00f2fe" />
      </linearGradient>
    </defs>

    {/* Artboard */}
    <g transform="translate(100, 80)">
      <rect x="0" y="0" width="200" height="240" rx="12" fill="white" stroke="url(#designGradient)" strokeWidth="3" />
      
      {/* Design Elements */}
      <circle cx="100" cy="80" r="30" fill="url(#designGradient)" opacity="0.3">
        <animate attributeName="r" values="30;35;30" dur="3s" repeatCount="indefinite" />
      </circle>
      
      {/* Grid Lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="20" y1={140 + i * 15} x2="180" y2={140 + i * 15} stroke="url(#designGradient)" strokeWidth="2" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
        </line>
      ))}
    </g>

    {/* Tool Icons */}
    <g transform="translate(50, 180)">
      {[0, 1, 2].map((i) => (
        <rect key={i} x={i * 40} y="0" width="30" height="30" rx="6" fill="url(#designGradient)" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </g>
  </svg>
);

export default function UIUXDesignPage() {
  const subServices = [
    {
      title: "User Research & Testing",
      description: "In-depth user research, usability testing, and behavioral analysis to inform design decisions"
    },
    {
      title: "Wireframing & Prototyping",
      description: "Interactive prototypes and wireframes to visualize and refine user journeys"
    },
    {
      title: "Visual Design Systems",
      description: "Cohesive design systems with reusable components for consistent brand experiences"
    },
    {
      title: "Interaction Design",
      description: "Micro-interactions and animations that delight users and enhance engagement"
    },
    {
      title: "Responsive Design",
      description: "Seamless experiences across all devices and screen sizes"
    },
    {
      title: "Design to Development Handoff",
      description: "Pixel-perfect implementation with comprehensive design documentation"
    }
  ];

  return (
    <>
      <Navbar />
      
      <section className="relative px-8 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">UI/UX Design & Development</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Design That Drives Results
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                User-centered design from research to implementation. We create intuitive, 
                beautiful interfaces that users love and convert visitors into customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20interested%20in%20your%20UI/UX%20Design%20services.%20I'd%20like%20to%20discuss%20my%20design%20needs."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    Start Your Design
                  </Button>
                </a>
          
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-8">
                  <UIUXDesignSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete design workflow from concept to pixel-perfect implementation
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

      <section className="px-8 py-20 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s design an experience that your users will love and remember
          </p>
          <a 
            href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20ready%20to%20create%20beautiful%20UI/UX%20designs.%20Let's%20discuss%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-12"
              placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
            >
              Get Started
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
