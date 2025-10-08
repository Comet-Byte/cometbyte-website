"use client";

import { Typography, Button, Input } from "@material-tailwind/react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

interface LinkItem {
  nameKey?: string;
  name?: string;
  href: string;
  icon?: 'email' | 'phone' | 'partnership';
}

interface LinkSection {
  titleKey: string;
  items: LinkItem[];
}

const LINKS: LinkSection[] = [
  {
    titleKey: "footer.company",
    items: [
      { nameKey: "footer.about", href: "/about" },
      { nameKey: "footer.contact", href: "/contact" },
      { nameKey: "footer.partnership", href: "/contact" },
      { nameKey: "footer.brochure", href: "#!" }
    ],
  },
  {
    titleKey: "footer.services",
    items: [
      { nameKey: "services.webMobile.title", href: "/services/web-mobile-development" },
      { nameKey: "services.digitalMarketing.title", href: "/services/digital-marketing" },
      { nameKey: "services.uiUx.title", href: "/services/ui-ux-design" },
      { nameKey: "services.staffOutsourcing.title", href: "/services/staff-outsourcing" },
      { nameKey: "services.infrastructure.title", href: "/services/infrastructure-hosting" },
      { nameKey: "services.ecommerce.title", href: "/services/ecommerce-development" },
      { nameKey: "services.consulting.title", href: "/services/technical-consulting" },
      { nameKey: "services.security.title", href: "/services/cyber-security" }
    ],
  },
  {
    titleKey: "footer.connect",
    items: [
      { name: "info@cometbyte.com", href: "mailto:info@cometbyte.com", icon: "email" as const },
      { nameKey: "footer.india", href: "mailto:india@cometbyte.com", icon: "email" as const },
      { nameKey: "footer.uae", href: "mailto:uae@cometbyte.com", icon: "email" as const },
      { name: "+971 55 2094128", href: "tel:+971552094128", icon: "phone" as const },
      { nameKey: "footer.partnership", href: "mailto:partnerships@cometbyte.com", icon: "partnership" as const }
    ],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-24 pb-6 sm:pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-0 !w-full">
          <div className="flex flex-col sm:flex-row col-span-1 sm:col-span-2 items-start gap-8 sm:gap-10 md:gap-20 lg:gap-28 mb-10 lg:mb-0">
            {LINKS.map(({ titleKey, items }) => (
              <ul key={titleKey} className="w-full sm:min-w-fit">
                <Typography variant="h6" color="blue-gray" className="mb-3 sm:mb-4 font-bold text-gray-900 text-sm sm:text-base" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                  {t(titleKey)}
                </Typography>
                {items.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Typography
                      as="a"
                      href={link.href}
                      className="py-1 font-normal !text-gray-600 transition-colors hover:!text-gray-900 text-xs sm:text-sm flex items-center gap-2"
                      placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                    >
                      {link.icon === 'email' && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {link.icon === 'phone' && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )}
                      {link.icon === 'partnership' && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {link.nameKey ? t(link.nameKey) : link.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="w-full">
            <Typography variant="h6" className="mb-3 text-left font-bold text-gray-900 text-sm sm:text-base" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
              {t('footer.newsletter')}
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-sm sm:text-base" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
              {t('footer.newsletterDesc')}
            </Typography>
            <Typography variant="small" className="font-medium mb-2 text-left text-xs sm:text-sm" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
              {t('footer.emailPlaceholder')}
            </Typography>
            <div className="flex mb-3 flex-col sm:flex-col lg:flex-row items-start gap-3 sm:gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input label={t('footer.emailPlaceholder')} color="gray" />
                <Typography className="font-medium mt-2 sm:mt-3 !text-xs sm:!text-sm !text-gray-500 text-left" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                  I agree to the{" "}
                  <a
                    href="#!"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    {t('footer.privacyPolicy')}
                  </a>
                </Typography>
              </div>
              <Button color="gray" className="w-full sm:w-full lg:w-fit" size="md" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                {t('footer.subscribe')}
              </Button>
            </div>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-8 sm:mt-12 md:mt-16 font-normal !text-gray-700 text-xs sm:text-sm"
          placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
        >
          &copy; {CURRENT_YEAR} CometByte. {t('footer.rights')}
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
