"use client";

import { Navbar, Footer } from "@/components";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const OutsourcingSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="teamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fa709a" />
        <stop offset="100%" stopColor="#fee140" />
      </linearGradient>
    </defs>

    {/* Team Members */}
    <g>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 60) * Math.PI / 180;
        const x = 200 + Math.cos(angle) * 100;
        const y = 200 + Math.sin(angle) * 100;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="25" fill="url(#teamGradient)" opacity="0.7">
              <animate attributeName="r" values="25;30;25" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <line x1="200" y1="200" x2={x} y2={y} stroke="url(#teamGradient)" strokeWidth="2" opacity="0.3">
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </line>
          </g>
        );
      })}
    </g>

    {/* Central Hub */}
    <circle cx="200" cy="200" r="40" fill="url(#teamGradient)" opacity="0.9">
      <animate attributeName="r" values="38;42;38" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default function StaffOutsourcingPage() {
  const subServices = [
    {
      title: "Dedicated Development Teams",
      description: "Full-stack teams integrated with your workflow for long-term projects"
    },
    {
      title: "Project-Based Outsourcing",
      description: "Complete project delivery from planning to deployment with fixed scope"
    },
    {
      title: "Technical Team Augmentation",
      description: "Scale your existing team with specialized developers on-demand"
    },
    {
      title: "Quality Assurance Teams",
      description: "Dedicated QA professionals ensuring flawless product delivery"
    },
    {
      title: "DevOps Engineers",
      description: "Infrastructure and deployment specialists for continuous delivery"
    },
    {
      title: "Technical Project Managers",
      description: "Experienced PMs to coordinate and deliver complex projects"
    }
  ];

  return (
    <>
      <Navbar />
      
      <section className="relative px-8 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-yellow-50" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Staff & Project Outsourcing</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Scale Your Team On-Demand
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Access world-class talent without the overhead. Our dedicated teams seamlessly 
                integrate with your workflow to deliver exceptional results at competitive rates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20interested%20in%20Staff%20Outsourcing%20services.%20I'd%20like%20to%20discuss%20building%20my%20team."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    Build Your Team
                  </Button>
                </a>
                
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-8">
                  <OutsourcingSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Outsourcing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible staffing models to match your project requirements and budget
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
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Team?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss your requirements and find the perfect team structure for your needs
          </p>
          <a 
            href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20ready%20to%20scale%20my%20team%20with%20Staff%20Outsourcing.%20Let's%20discuss%20my%20requirements."
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
