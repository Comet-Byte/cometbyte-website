"use client";

import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const SERVICES = [
  {
    titleKey: "services.webMobile.title",
    descriptionKey: "services.webMobile.description",
    detailKey: "services.webMobile.detail",
    href: "/services/web-mobile-development"
  },
  {
    titleKey: "services.marketing.title",
    descriptionKey: "services.marketing.description",
    detailKey: "services.marketing.detail",
    href: "/services/digital-marketing"
  },
  {
    titleKey: "services.uiux.title",
    descriptionKey: "services.uiux.description",
    detailKey: "services.uiux.detail",
    href: "/services/ui-ux-design"
  },
  {
    titleKey: "services.outsourcing.title",
    descriptionKey: "services.outsourcing.description",
    detailKey: "services.outsourcing.detail",
    href: "/services/staff-outsourcing"
  },
  {
    titleKey: "services.infrastructure.title",
    descriptionKey: "services.infrastructure.description",
    detailKey: "services.infrastructure.detail",
    href: "/services/infrastructure-hosting"
  },
  {
    titleKey: "services.ecommerce.title",
    descriptionKey: "services.ecommerce.description",
    detailKey: "services.ecommerce.detail",
    href: "/services/ecommerce-development"
  },
  {
    titleKey: "services.consulting.title",
    descriptionKey: "services.consulting.description",
    detailKey: "services.consulting.detail",
    href: "/services/technical-consulting"
  },
  {
    titleKey: "services.security.title",
    descriptionKey: "services.security.description",
    detailKey: "services.security.detail",
    href: "/services/cyber-security"
  }
];

export function OurServices() {
  const { t } = useTranslation();

  return (
    <section className="px-6 lg:px-8 py-20 bg-white">
      {/* Header Section */}
      <div className="container mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 mb-6">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <Typography variant="small" className="font-semibold text-gray-700 uppercase tracking-wide" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
            {t('ourServices.badge')}
          </Typography>
        </div>
        
        <Typography 
          variant="h1" 
          className="text-4xl lg:text-5xl font-bold text-black mb-6"
          placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
        >
          {t('ourServices.title')}
        </Typography>
        
        <Typography
          variant="lead"
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
        >
          {t('ourServices.subtitle')}
        </Typography>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((props, idx) => (
            <div 
              key={idx}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                
                {/* Header */}
                <div className="mb-4">
                  <Typography 
                    variant="h5" 
                    className="font-bold text-black mb-3"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t(props.titleKey)}
                  </Typography>
                  <Typography 
                    variant="small" 
                    className="font-semibold text-gray-600 text-sm"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t(props.descriptionKey)}
                  </Typography>
                </div>

                {/* Detail Description */}
                <Typography 
                  className="text-gray-600 leading-relaxed mb-6 text-sm flex-grow"
                  placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                >
                  {t(props.detailKey)}
                </Typography>

                {/* CTA Button */}
                <Link href={props.href}>
                  <button className="w-full py-3 px-4 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 group/btn">
                    <span>{t('services.learnMore')}</span>
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;