"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  CodeBracketIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { useTranslation } from 'react-i18next';

import StatsCard from "@/components/stats-card";

const STATS = [
  {
    icon: CodeBracketIcon,
    count: "500+",
    titleKey: "whyChooseUs.stats.projects",
    descriptionKey: "whyChooseUs.stats.projectsDesc"
  },
  {
    icon: UserGroupIcon,
    count: "200+",
    titleKey: "whyChooseUs.stats.clients",
    descriptionKey: "whyChooseUs.stats.clientsDesc"
  },
  {
    icon: RocketLaunchIcon,
    count: "10+",
    titleKey: "whyChooseUs.stats.experience",
    descriptionKey: "whyChooseUs.stats.experienceDesc"
  },
  {
    icon: ShieldCheckIcon,
    count: "99%",
    titleKey: "whyChooseUs.stats.satisfaction",
    descriptionKey: "whyChooseUs.stats.satisfactionDesc"
  },
];

export function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="px-6 lg:px-8 py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-6">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            <Typography variant="small" className="font-semibold text-gray-700 uppercase tracking-wide" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
              {t('whyChooseUs.badge')}
            </Typography>
          </div>
          
          <Typography 
            variant="h1" 
            className="text-4xl lg:text-5xl font-bold text-black mb-6"
            placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
          >
            {t('whyChooseUs.title')}
          </Typography>
          
          <Typography
            variant="lead"
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
          >
            {t('whyChooseUs.subtitle')}
          </Typography>
        </div>

        {/* Content Grid */}
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* Stats Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((props, key) => (
              <div 
                key={key}
                className="group relative"
              >
                {/* Glass Effect Container */}
                <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-200/60 p-6 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center mb-4 shadow-lg">
                    <props.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Stats */}
                  <Typography 
                    variant="h2" 
                    className="font-bold text-black mb-2"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {props.count}
                  </Typography>

                  {/* Title */}
                  <Typography 
                    variant="h5" 
                    className="font-semibold text-gray-900 mb-2"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t(props.titleKey)}
                  </Typography>

                  {/* Description */}
                  <Typography 
                    className="text-gray-600 text-sm leading-relaxed"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t(props.descriptionKey)}
                  </Typography>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-black/10 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="relative">
            {/* Glass Background */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-200/60 p-8 shadow-sm">
              <Typography 
                variant="h3" 
                className="font-bold text-black mb-6 text-2xl lg:text-3xl"
                placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
              >
                {t('whyChooseUs.innovativeTitle')}
              </Typography>
              
              <div className="space-y-4">
                <Typography 
                  className="text-gray-600 leading-relaxed text-lg"
                  placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                >
                  {t('whyChooseUs.innovativeDesc')}
                </Typography>
                
                <Typography 
                  className="text-gray-600 leading-relaxed text-lg"
                  placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                >
                  {t('whyChooseUs.innovativeDesc2')}
                </Typography>
              </div>

              {/* Feature Points */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <Typography 
                    className="text-gray-700 font-medium"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t('whyChooseUs.features.agile')}
                  </Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <Typography 
                    className="text-gray-700 font-medium"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t('whyChooseUs.features.support')}
                  </Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <Typography 
                    className="text-gray-700 font-medium"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t('whyChooseUs.features.quality')}
                  </Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <Typography 
                    className="text-gray-700 font-medium"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t('whyChooseUs.features.scalable')}
                  </Typography>
                </div>
              </div>

              {/* CTA Button */}
              <button className="mt-8 px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md">
                {t('whyChooseUs.cta')}
              </button>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-100 rounded-2xl -z-10 opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-100 rounded-2xl -z-10 opacity-30"></div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <Typography 
              variant="h4" 
              className="font-bold text-black text-center lg:text-left"
              placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
            >
              {t('whyChooseUs.trustedBy')}
            </Typography>
            <div className="flex flex-wrap justify-center gap-8">
              <Typography 
                className="text-gray-600 font-medium"
                placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
              >
                {t('whyChooseUs.industries.startups')}
              </Typography>
              <Typography 
                className="text-gray-600 font-medium"
                placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
              >
                {t('whyChooseUs.industries.enterprises')}
              </Typography>
              <Typography 
                className="text-gray-600 font-medium"
                placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
              >
                {t('whyChooseUs.industries.agencies')}
              </Typography>
              <Typography 
                className="text-gray-600 font-medium"
                placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
              >
                {t('whyChooseUs.industries.ecommerce')}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;