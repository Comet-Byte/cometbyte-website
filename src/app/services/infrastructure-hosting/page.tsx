"use client";

import { Navbar, Footer } from "@/components";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const InfrastructureSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="serverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#11998e" />
        <stop offset="100%" stopColor="#38ef7d" />
      </linearGradient>
    </defs>

    {/* Cloud */}
    <path d="M 150 80 Q 120 80 120 110 Q 120 140 150 140 L 250 140 Q 280 140 280 110 Q 280 80 250 80" 
          fill="url(#serverGradient)" opacity="0.3">
      <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
    </path>

    {/* Server Racks */}
    {[0, 1, 2].map((i) => (
      <g key={i} transform={`translate(${100 + i * 100}, 200)`}>
        <rect x="0" y="0" width="60" height="120" rx="4" fill="url(#serverGradient)" opacity="0.8">
          <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
        </rect>
        {[0, 1, 2, 3].map((j) => (
          <g key={j}>
            <line x1="10" y1={20 + j * 25} x2="50" y2={20 + j * 25} stroke="white" strokeWidth="2" opacity="0.5">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" begin={`${i * 0.5 + j * 0.2}s`} repeatCount="indefinite" />
            </line>
          </g>
        ))}
      </g>
    ))}

    {/* Connection Lines */}
    {[0, 1, 2].map((i) => (
      <line key={i} x1="200" y1="140" x2={130 + i * 100} y2="200" 
            stroke="url(#serverGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
      </line>
    ))}
  </svg>
);

export default function InfrastructureHostingPage() {
  const subServices = [
    {
      title: "Cloud Infrastructure Setup",
      description: "Design and deploy scalable cloud architecture on AWS, Azure, or Google Cloud"
    },
    {
      title: "Managed Hosting Services",
      description: "24/7 monitoring, maintenance, and optimization of your hosting environment"
    },
    {
      title: "DevOps Implementation",
      description: "CI/CD pipelines, containerization, and automated deployment workflows"
    },
    {
      title: "Server Migration",
      description: "Seamless migration from on-premise to cloud or between cloud providers"
    },
    {
      title: "Database Management",
      description: "Setup, optimization, and maintenance of SQL and NoSQL databases"
    },
    {
      title: "Security & Compliance",
      description: "Infrastructure security hardening, backup solutions, and compliance management"
    }
  ];

  return (
    <>
      <Navbar />
      
      <section className="relative px-8 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Infrastructure & Hosting</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Enterprise-Grade Infrastructure
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Build and maintain robust, scalable infrastructure that grows with your business. 
                From cloud setup to 24/7 managed hosting, we handle everything.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20interested%20in%20Infrastructure%20%26%20Hosting%20services.%20I'd%20like%20to%20get%20an%20infrastructure%20audit."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    Get Infrastructure Audit
                  </Button>
                </a>
            
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-8">
                  <InfrastructureSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Infrastructure Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure services for modern digital businesses
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
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free infrastructure assessment and discover how we can improve your performance
          </p>
          <a 
            href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20ready%20to%20optimize%20my%20infrastructure.%20Let's%20schedule%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-12"
              placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
            >
              Schedule Consultation
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
