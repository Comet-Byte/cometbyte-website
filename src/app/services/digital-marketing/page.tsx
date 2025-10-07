"use client";

import { Navbar, Footer } from "@/components";
import { Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

// Animated SVG Component
const DigitalMarketingSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="marketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f093fb" />
        <stop offset="100%" stopColor="#f5576c" />
      </linearGradient>
    </defs>

    {/* Growth Chart */}
    <g transform="translate(100, 200)">
      <path d="M0,80 L50,60 L100,40 L150,10 L200,0" 
            stroke="url(#marketGradient)" 
            strokeWidth="4" 
            fill="none"
            strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="3s" repeatCount="indefinite" />
      </path>
      
      {/* Data Points */}
      {[0, 50, 100, 150, 200].map((x, i) => (
        <circle key={i} cx={x} cy={80 - i * 20} r="6" fill="url(#marketGradient)">
          <animate attributeName="r" values="4;8;4" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </g>

    {/* Social Icons */}
    <g opacity="0.6">
      {[60, 120, 180].map((y, i) => (
        <circle key={i} cx="320" cy={y} r="15" fill="url(#marketGradient)">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </g>

    {/* Analytics Lines */}
    <g stroke="url(#marketGradient)" strokeWidth="2" opacity="0.3">
      {[50, 100, 150].map((y, i) => (
        <line key={i} x1="80" y1={y + 200} x2="300" y2={y + 200}>
          <animate attributeName="stroke-dasharray" values="0 220;220 0" dur="4s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
        </line>
      ))}
    </g>
  </svg>
);

export default function DigitalMarketingPage() {
  const subServices = [
    {
      title: "Social Media Marketing",
      description: "Strategic campaigns across all major platforms to build brand awareness and engagement"
    },
    {
      title: "Search Engine Optimization",
      description: "Technical and content SEO to improve organic rankings and drive qualified traffic"
    },
    {
      title: "PPC & Advertising Campaigns",
      description: "Data-driven paid advertising on Google, Facebook, and other platforms for maximum ROI"
    },
    {
      title: "Content Strategy & Creation",
      description: "Compelling content that resonates with your audience and drives conversions"
    },
    {
      title: "Analytics & Performance Tracking",
      description: "Comprehensive reporting and insights to measure and optimize campaign performance"
    },
    {
      title: "Email Marketing Automation",
      description: "Personalized email campaigns that nurture leads and drive customer retention"
    }
  ];

  return (
    <>
      <Navbar />
      
      <section className="relative px-8 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-rose-50" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Digital Marketing</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Growth Through Strategic Marketing
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive digital marketing strategies that amplify your brand voice, 
                engage your audience, and drive measurable business growth across all channels.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20interested%20in%20your%20Digital%20Marketing%20services.%20I'd%20like%20to%20discuss%20growing%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    Grow Your Business
                  </Button>
                </a>
              
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-8">
                  <DigitalMarketingSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Marketing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end digital marketing solutions to elevate your brand presence
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
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Marketing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s create a data-driven strategy that delivers real results for your business
          </p>
          <a 
            href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20ready%20to%20scale%20my%20Digital%20Marketing.%20Let's%20discuss%20a%20data-driven%20strategy."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-12"
              placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
            >
              Start Growing Today
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
