"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
  ChevronDownIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const NAV_MENU = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "services",
    href: "/services",
    hasDropdown: true,
  },
  {
    key: "contact",
    href: "/contact",
  },
];

const SERVICES_MENU = [
  {
    titleKey: "services.webMobile.title",
    descKey: "services.webMobile.description",
    href: "/services/web-mobile-development",
  },
  {
    titleKey: "services.digitalMarketing.title",
    descKey: "services.digitalMarketing.description",
    href: "/services/digital-marketing",
  },
  {
    titleKey: "services.uiUx.title",
    descKey: "services.uiUx.description",
    href: "/services/ui-ux-design",
  },
  {
    titleKey: "services.staffOutsourcing.title",
    descKey: "services.staffOutsourcing.description",
    href: "/services/staff-outsourcing",
  },
  {
    titleKey: "services.infrastructure.title",
    descKey: "services.infrastructure.description",
    href: "/services/infrastructure-hosting",
  },
  {
    titleKey: "services.ecommerce.title",
    descKey: "services.ecommerce.description",
    href: "/services/ecommerce-development",
  },
  {
    titleKey: "services.consulting.title",
    descKey: "services.consulting.description",
    href: "/services/technical-consulting",
  },
  {
    titleKey: "services.security.title",
    descKey: "services.security.description",
    href: "/services/cyber-security",
  },
];

const LANGUAGES = [
  { code: "En", name: "English", flag: "🇺🇸" },
  { code: "Ar", name: "العربية", flag: "🇸🇦" },
  { code: "Ru", name: "Русский", flag: "🇷🇺" },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  hasDropdown?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function NavItem({ children, href, hasDropdown, onMouseEnter, onMouseLeave }: NavItemProps) {
  return (
    <li 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative"
    >
      <Link href={href || "#"}>
        <Typography
          as="span"
          variant="paragraph"
          color="gray"
          className="font-medium text-gray-900 hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-1"
        >
          {children}
          {hasDropdown && (
            <ChevronDownIcon className="w-4 h-4" />
          )}
        </Typography>
      </Link>
    </li>
  );
}

interface AppleLanguageSelectorProps {
  lang: string;
  onLangChange: (lang: string) => void;
  isMobile?: boolean;
}

function AppleLanguageSelector({ lang, onLangChange, isMobile = false }: AppleLanguageSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  
  const currentLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];
  
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);
  
  const handleOpen = () => {
    setIsOpen(true);
    setIsAnimating(true);
  };
  
  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 150);
  };
  
  const handleSelect = (langCode: string) => {
    onLangChange(langCode);
    handleClose();
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={isOpen ? handleClose : handleOpen}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out
          ${isMobile 
            ? 'w-full bg-white/40 dark:bg-black/20 hover:bg-white/60 dark:hover:bg-black/30 border border-white/20 dark:border-white/10' 
            : 'bg-white/30 dark:bg-black/15 hover:bg-white/50 dark:hover:bg-black/25 border border-white/30 dark:border-white/15'}
          backdrop-blur-lg shadow-sm hover:shadow-lg
          focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400/30
          active:scale-[0.98] transform
        `}
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <GlobeAltIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        <span className="text-gray-700 dark:text-gray-300">{currentLang.flag}</span>
        <span className="text-gray-900 dark:text-gray-100 min-w-[2rem] text-left">{currentLang.code}</span>
        <ChevronDownIcon 
          className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      {isOpen && (
        <div 
          className={`
            absolute ${isMobile ? 'left-0 right-0 top-full' : 'right-0 top-full'} mt-2 py-2 z-50
            bg-white/70 dark:bg-black/60 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/20 dark:border-white/10
            ring-1 ring-black/5 dark:ring-white/5
            transform transition-all duration-200 ease-out origin-top
            ${isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2'}
          `}
          role="listbox"
          aria-label="Language options"
        >
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              onClick={() => handleSelect(language.code)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-150 ease-out
                hover:bg-blue-50/80 dark:hover:bg-white/5 active:bg-blue-100/80 dark:active:bg-white/10
                ${lang === language.code 
                  ? 'bg-blue-50/60 dark:bg-white/5 text-blue-700 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300'}
                first:rounded-t-lg last:rounded-b-lg
              `}
              role="option"
              aria-selected={lang === language.code}
            >
              <span className="text-lg">{language.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium text-sm">{language.code}</span>
                <span className="text-xs opacity-70">{language.name}</span>
              </div>
              {lang === language.code && (
                <div className="ml-auto w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState<string>("En");
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const servicesTimeoutRef = React.useRef<NodeJS.Timeout>();

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  // Sync i18n language with localStorage and set direction for Arabic
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored) {
        setLang(stored);
        const langCode = stored === "En" ? "en" : stored === "Ar" ? "ar" : "ru";
        i18n.changeLanguage(langCode);
        if (stored === "Ar") {
          document.documentElement.setAttribute("dir", "rtl");
        } else {
          document.documentElement.setAttribute("dir", "ltr");
        }
      }
    } catch {}
  }, [i18n]);

  const handleLangChange = (value: string) => {
    setLang(value);
    const langCode = value === "En" ? "en" : value === "Ar" ? "ar" : "ru";
    i18n.changeLanguage(langCode);
    try {
      localStorage.setItem("lang", value);
    } catch {}
    if (value === "Ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  };

  return (
    <div className="px-2 sm:px-4 sticky top-0 z-50">
      <div className="mx-auto container relative max-w-full">
        <MTNavbar
          blurred
          color="transparent"
          className={`z-50 mt-2 relative pr-2 sm:pr-3 py-2 pl-2 sm:pl-4 rounded-xl backdrop-blur-xl border shadow-sm transition-all duration-300 ${
            servicesOpen 
              ? 'bg-gray-900/95 border-gray-800' 
              : 'bg-white/60 dark:bg-black/40 border-black/10 dark:border-white/10'
          }`}
          placeholder="" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}
          onResize={() => {}} 
          onResizeCapture={() => {}}
        >
          <div className="flex items-center justify-between w-full">
            <Link href="/">
              <Typography 
                color="blue-gray" 
                className={`text-base sm:text-lg font-bold cursor-pointer transition-colors duration-300 ${
                  servicesOpen ? 'text-white' : 'text-gray-900'
                }`}
                placeholder="" 
                onPointerEnterCapture={() => {}} 
                onPointerLeaveCapture={() => {}}
                onResize={() => {}} 
                onResizeCapture={() => {}}
              >
                {t('nav.cometbyte')}
              </Typography>
            </Link>
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ key, href, hasDropdown }) => (
                <NavItem 
                  key={key} 
                  href={href}
                  hasDropdown={hasDropdown}
                  onMouseEnter={hasDropdown ? handleServicesMouseEnter : undefined}
                  onMouseLeave={hasDropdown ? handleServicesMouseLeave : undefined}
                >
                  <span className={`transition-colors duration-300 ${
                    servicesOpen ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t(`nav.${key}`)}
                  </span>
                </NavItem>
              ))}
            </ul>
            <div className="hidden items-center gap-4 lg:flex">
              <AppleLanguageSelector lang={lang} onLangChange={handleLangChange} />
            </div>
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
              placeholder="" 
              onPointerEnterCapture={() => {}} 
              onPointerLeaveCapture={() => {}}
              onResize={() => {}} 
              onResizeCapture={() => {}}
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          
          {/* Apple-Style Mega Menu Dropdown - Hidden on mobile */}
          {servicesOpen && (
            <div 
              className="hidden lg:block absolute left-0 right-0 top-full mt-0 pt-4 pb-8 bg-gray-900/95 backdrop-blur-xl rounded-b-xl border-x border-b border-gray-800 shadow-2xl"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              style={{
                animation: 'slideDown 0.3s ease-out',
              }}
            >
              <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {SERVICES_MENU.map((service, index) => (
                    <Link 
                      key={index} 
                      href={service.href}
                      className="group"
                    >
                      <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-white/10 transition-all duration-200">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 group-hover:text-blue-400 transition-colors truncate">
                            {t(service.titleKey)}
                          </h3>
                          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                            {t(service.descKey)}
                          </p>
                        </div>
                        <svg 
                          className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-black/10 dark:border-white/10 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ key, href }) => (
                  <NavItem key={key} href={href}>
                    {t(`nav.${key}`)}
                  </NavItem>
                ))}
              </ul>
              <div className="mt-6 mb-4">
                <AppleLanguageSelector lang={lang} onLangChange={handleLangChange} isMobile />
              </div>
            </div>
          </Collapse>
        </MTNavbar>
      </div>
      
      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Navbar;
