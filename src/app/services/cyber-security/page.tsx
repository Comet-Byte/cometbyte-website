"use client";

import { Navbar, Footer } from "@/components";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const CyberSecuritySVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#eb3349" />
        <stop offset="100%" stopColor="#f45c43" />
      </linearGradient>
    </defs>

    {/* Shield */}
    <path d="M 200 80 L 280 120 L 280 200 Q 280 280 200 320 Q 120 280 120 200 L 120 120 Z" 
          fill="url(#securityGradient)" opacity="0.3" stroke="url(#securityGradient)" strokeWidth="4">
      <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
    </path>

    {/* Lock Icon */}
    <g transform="translate(200, 200)">
      <rect x="-25" y="0" width="50" height="40" rx="4" fill="url(#securityGradient)" opacity="0.7">
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
      </rect>
      <path d="M -15 0 L -15 -20 Q -15 -35 0 -35 Q 15 -35 15 -20 L 15 0" 
            fill="none" stroke="url(#securityGradient)" strokeWidth="4" opacity="0.7">
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
      </path>
      <circle cx="0" cy="20" r="6" fill="white" opacity="0.9">
        <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Security Scan Lines */}
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <line x1="120" y1={140 + i * 30} x2="280" y2={140 + i * 30} 
              stroke="url(#securityGradient)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
        </line>
      </g>
    ))}

    {/* Alert Indicators */}
    {[0, 1, 2].map((i) => {
      const angle = (i * 120 + 90) * Math.PI / 180;
      const x = 200 + Math.cos(angle) * 100;
      const y = 200 + Math.sin(angle) * 100;
      return (
        <circle key={i} cx={x} cy={y} r="8" fill="url(#securityGradient)" opacity="0.6">
          <animate attributeName="r" values="6;10;6" dur="1.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      );
    })}
  </svg>
);

export default function CyberSecurityPage() {
  const subServices = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities before attackers do"
    },
    {
      title: "Security Audits & Compliance",
      description: "ISO 27001, SOC 2, GDPR, and industry-specific compliance assessments"
    },
    {
      title: "Vulnerability Management",
      description: "Continuous monitoring, scanning, and remediation of security weaknesses"
    },
    {
      title: "Security Architecture Design",
      description: "Design secure systems with zero-trust principles and defense-in-depth strategies"
    },
    {
      title: "Incident Response & Forensics",
      description: "24/7 security incident response and digital forensics investigation"
    },
    {
      title: "Security Training & Awareness",
      description: "Employee training programs to build a security-conscious culture"
    }
  ];

  return (
    <>
      <Navbar />
      
      <section className="relative px-8 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-orange-50" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Cyber Security</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Protect Your Digital Assets
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Safeguard your business with enterprise-grade security solutions. From penetration 
                testing to 24/7 monitoring, we protect what matters most.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20interested%20in%20Cyber%20Security%20services.%20I'd%20like%20to%20get%20a%20security%20audit."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    Get Security Audit
                  </Button>
                </a>
                
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-8">
                  <CyberSecuritySVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions to protect your business from evolving threats
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
          <h2 className="text-4xl font-bold mb-6">Secure Your Business Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Don&apos;t wait for a breach. Get a comprehensive security assessment now
          </p>
          <a 
            href="https://wa.me/971552094128?text=Hi%20CometByte!%20I%20want%20to%20secure%20my%20business.%20Let's%20get%20a%20comprehensive%20security%20assessment."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-12"
              placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
            >
              Request Security Audit
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
