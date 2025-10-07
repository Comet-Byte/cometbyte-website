"use client";

import { Navbar, Footer } from "@/components";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const EcommerceSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ecomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
    </defs>

    {/* Shopping Bag */}
    <path d="M 120 150 L 100 320 L 300 320 L 280 150 Z" 
          fill="url(#ecomGradient)" opacity="0.3" stroke="url(#ecomGradient)" strokeWidth="3">
      <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
    </path>

    {/* Bag Handles */}
    <path d="M 140 150 Q 140 100 200 100 Q 260 100 260 150" 
          fill="none" stroke="url(#ecomGradient)" strokeWidth="3" opacity="0.6">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" />
    </path>

    {/* Products */}
    {[0, 1, 2].map((i) => (
      <g key={i} transform={`translate(${140 + i * 40}, ${200 + i * 20})`}>
        <rect x="0" y="0" width="30" height="30" rx="4" fill="url(#ecomGradient)" opacity="0.7">
          <animate attributeName="y" values="0;-10;0" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </rect>
      </g>
    ))}

    {/* Cart Icon */}
    <g transform="translate(300, 100)">
      <circle cx="0" cy="0" r="30" fill="url(#ecomGradient)" opacity="0.8">
        <animate attributeName="r" values="28;32;28" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M -10 -5 L 10 -5 L 8 10 L -8 10 Z" fill="white" opacity="0.9" />
      <circle cx="-5" cy="15" r="2" fill="white" />
      <circle cx="5" cy="15" r="2" fill="white" />
    </g>
  </svg>
);

export default function EcommerceDevelopmentPage() {
  const subServices = [
    {
      title: "Custom E-commerce Platforms",
      description: "Tailored online stores built on WooCommerce, Magento, or custom solutions"
    },
    {
      title: "Payment Gateway Integration",
      description: "Secure integration with Stripe, PayPal, Razorpay, and regional payment providers"
    },
    {
      title: "Inventory Management Systems",
      description: "Real-time stock tracking, warehouse management, and automated reordering"
    },
    {
      title: "Multi-vendor Marketplaces",
      description: "Build scalable marketplaces like Amazon or Etsy with seller dashboards"
    },
    {
      title: "Mobile Commerce Apps",
      description: "Native iOS and Android shopping apps with seamless checkout experiences"
    },
    {
      title: "E-commerce Analytics",
      description: "Sales tracking, customer insights, and conversion optimization tools"
    }
  ];

  return (
    <>
      <Navbar />
      
      <section className="relative px-8 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">E-commerce Development</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build Your Online Empire
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Launch powerful e-commerce platforms that convert visitors into customers. 
                From product catalogs to payment processing, we handle everything.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20interested%20in%20E-commerce%20Development.%20I'd%20like%20to%20launch%20my%20online%20store."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    Launch Your Store
                  </Button>
                </a>
                
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-8">
                  <EcommerceSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete e-commerce services to launch and grow your online business
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
          <h2 className="text-4xl font-bold mb-6">Ready to Sell Online?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s build an e-commerce platform that turns browsers into buyers
          </p>
          <a 
            href="https://wa.me/971552094128?text=Hi%20CometByte!%20I'm%20ready%20to%20sell%20online.%20Let's%20build%20my%20e-commerce%20platform."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-12"
              placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
            >
              Start Your Project
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
