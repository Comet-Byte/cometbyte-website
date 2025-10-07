"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';

const COMPANIES = [
  "foodzone",
  "apollo",
  "jio",
  "jct",


];

function TrustedCompanies() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-6 lg:py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-4">
            <Typography 
              variant="small" 
              className="font-semibold text-gray-600 uppercase tracking-wide"
              placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
            >
              {t('trustedCompanies.badge')}
            </Typography>
          </div>
          <Typography 
            variant="h2" 
            className="font-bold text-black mb-4"
            placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
          >
            {t('trustedCompanies.title')}
          </Typography>
          <Typography 
            variant="lead" 
            className="text-gray-600 max-w-2xl mx-auto"
            placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
          >
            {t('trustedCompanies.subtitle')}
          </Typography>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
          {COMPANIES.map((logo, key) => (
            <div key={key}>
              {/* Glass Effect Container */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-6 shadow-sm">
                {/* Image Container with CSS Filter */}
                <div className="w-32 h-16 flex items-center justify-center">
                  <Image
                    width={160}
                    height={80}
                    src={`/logos/${logo}.png`}
                    alt={`${logo} logo`}
                    className="w-full h-full object-contain filter brightness-0 opacity-70"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanies;