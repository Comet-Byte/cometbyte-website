"use client";

import { Navbar, Footer } from "@/components";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const ConsultingSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="consultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2c3e50" />
        <stop offset="100%" stopColor="#4ca1af" />
      </linearGradient>
    </defs>

    {/* Lightbulb */}
    <circle cx="200" cy="180" r="50" fill="url(#consultGradient)" opacity="0.3">
      <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
      <animate attributeName="r" values="48;52;48" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* Bulb Base */}
    <rect x="185" y="230" width="30" height="20" rx="2" fill="url(#consultGradient)" opacity="0.6" />

    {/* Light Rays */}
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
      const angle = (i * 45) * Math.PI / 180;
      const x1 = 200 + Math.cos(angle) * 60;
      const y1 = 180 + Math.sin(angle) * 60;
      const x2 = 200 + Math.cos(angle) * 90;
      const y2 = 180 + Math.sin(angle) * 90;
      return (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} 
              stroke="url(#consultGradient)" strokeWidth="3" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
        </line>
      );
    })}

    {/* Strategy Document */}
    <rect x="100" y="280" width="200" height="80" rx="8" fill="url(#consultGradient)" opacity="0.2" />
    {[0, 1, 2].map((i) => (
      <line key={i} x1="120" y1={300 + i * 20} x2="280" y2={300 + i * 20} 
            stroke="url(#consultGradient)" strokeWidth="2" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
      </line>
    ))}
  </svg>
);

export default function TechnicalConsultingPage() {
  const subServices = [
    {
      title: "Technology Strategy & Planning",
      description: "Roadmap development, technology stack selection, and digital transformation strategies"
    },
    {
      title: "Architecture Design & Review",
      description: "System architecture planning, code reviews, and technical debt assessment"
    },
    {
      title: "Performance Optimization",
      description: "Application profiling, bottleneck identification, and optimization recommendations"
    },
    {
      title: "Security Audits",
      description: "Vulnerability assessments, penetration testing, and security best practices implementation"
    },
    {
      title: "Cloud Migration Consulting",
      description: "Cloud readiness assessment, migration strategy, and cost optimization planning"
    },
    {
      title: "Technical Due Diligence",
      description: "Code quality assessment for acquisitions, investments, or partnerships"
    }
  ];

  return (
    <>
      <Navbar />
      
      <section className="relative px-8 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-100" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Technical Consulting</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Expert Technical Guidance
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Navigate complex technical decisions with confidence. Our experienced consultants 
                provide strategic guidance to optimize your technology investments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20interested%20in%20Technical%20Consulting%20services.%20I'd%20like%20to%20book%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    Book Consultation
                  </Button>
                </a>
              
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-gray-200 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-8">
                  <ConsultingSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic technical advice to drive your business forward
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
          <h2 className="text-4xl font-bold mb-6">Need Strategic Technical Advice?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a consultation to discuss your technical challenges and opportunities
          </p>
          <a 
            href="https://wa.me/971552094128?text=Hi%20CometByte!%20I%20need%20strategic%20technical%20advice.%20Let's%20schedule%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-12"
              placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
            >
              Get Expert Advice
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
