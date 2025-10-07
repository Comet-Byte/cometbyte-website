# 🚀 Quick Start - Add Translations in 3 Steps

## For Any Page That Needs Translation:

### Step 1: Add "use client" at the top
```tsx
"use client";
```

### Step 2: Import and use the hook
```tsx
import { useTranslation } from 'react-i18next';

export default function YourPage() {
  const { t } = useTranslation();
  
  // Now you can use t() anywhere!
}
```

### Step 3: Replace text with translation keys
```tsx
// Before:
<h1>Our Services</h1>

// After:
<h1>{t('services.title')}</h1>
```

---

## 📖 Available Translation Keys

### Navigation
- `nav.home` → "Home" / "الرئيسية" / "Главная"
- `nav.about` → "About" / "من نحن" / "О нас"
- `nav.services` → "Services" / "الخدمات" / "Услуги"
- `nav.contact` → "Contact" / "اتصل بنا" / "Контакты"

### Hero Section
- `hero.title` → "Transform Your Digital Future"
- `hero.subtitle` → "Empowering businesses..."
- `hero.cta` → "Start Your Journey"

### Services (Main Page)
- `services.title` → "Our Services"
- `services.subtitle` → "Comprehensive digital solutions..."
- `services.cta` → "Get Free Consultation"

### Individual Services
- `services.webMobile.title` → "Web & Mobile Development"
- `services.webMobile.description` → "Full-stack applications..."
- `services.digitalMarketing.title` → "Digital Marketing"
- `services.uiUx.title` → "UI/UX Design"
- `services.staffOutsourcing.title` → "Staff Outsourcing"
- `services.infrastructure.title` → "Infrastructure & Hosting"
- `services.ecommerce.title` → "E-commerce Development"
- `services.consulting.title` → "Technical Consulting"
- `services.security.title` → "Cyber Security"

### Service Detail Pages
- `serviceDetail.overview` → "Overview"
- `serviceDetail.keyFeatures` → "Key Features"
- `serviceDetail.whyChooseUs` → "Why Choose Us"
- `serviceDetail.getStarted` → "Get Started Today"
- `serviceDetail.readyToTransform` → "Ready to Transform Your Business?"
- `serviceDetail.talkToExpert` → "Talk to an Expert"
- `serviceDetail.viewAllServices` → "View All Services"

### Contact Page
- `contact.title` → "Get in Touch"
- `contact.subtitle` → "Let's create something amazing together"
- `contact.name` → "Your Name"
- `contact.email` → "Your Email"
- `contact.message` → "Your Message"
- `contact.send` → "Send Message"
- `contact.phone` → "Phone"

### Footer
- `footer.company` → "Company"
- `footer.services` → "Services"
- `footer.connect` → "Connect"
- `footer.newsletter` → "Newsletter"
- `footer.subscribe` → "Subscribe"
- `footer.rights` → "All rights reserved."

### About Page
- `about.title` → "About CometByte"
- `about.mission` → "Our Mission"
- `about.vision` → "Our Vision"
- `about.values` → "Our Values"

### Common/Utility
- `common.loading` → "Loading..."
- `common.error` → "Error"
- `common.readMore` → "Read More"

---

## 🎯 Complete Example: Service Page

```tsx
"use client";

import { useTranslation } from 'react-i18next';
import { Navbar, Footer } from '@/components';

export default function ServicePage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20">
          <h1 className="text-5xl font-bold">
            {t('services.webMobile.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('services.webMobile.detail')}
          </p>
        </section>

        {/* Features */}
        <section className="py-20">
          <h2 className="text-3xl font-bold">
            {t('serviceDetail.keyFeatures')}
          </h2>
          {/* Your features */}
        </section>

        {/* CTA */}
        <section className="py-20 bg-black text-white">
          <h2 className="text-4xl font-bold">
            {t('serviceDetail.readyToTransform')}
          </h2>
          <a 
            href="https://wa.me/971552094128"
            className="btn mt-8"
          >
            {t('serviceDetail.talkToExpert')}
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
```

---

## ✅ Quick Checklist

When implementing translations:

- [ ] Add `"use client";` at the top
- [ ] Import `useTranslation` hook
- [ ] Get `t` function: `const { t } = useTranslation();`
- [ ] Replace all text with `{t('key')}`
- [ ] Test in all 3 languages (En, Ar, Ru)
- [ ] Check Arabic RTL layout
- [ ] Verify WhatsApp links still work

---

## 🔧 Pro Tips

1. **Don't translate:**
   - Email addresses (info@cometbyte.com)
   - Phone numbers (+971 55 2094128)
   - WhatsApp URLs
   - Technical IDs/codes

2. **Always translate:**
   - Headings and titles
   - Descriptions and body text
   - Button labels
   - Form labels
   - Navigation items

3. **Test flow:**
   - Switch to English → Check layout
   - Switch to Arabic → Check RTL
   - Switch to Russian → Check text length
   - Switch back to English → Verify

---

## 🌍 Language Codes

```javascript
en → English (LTR)
ar → Arabic (RTL)
ru → Russian (LTR)
```

---

## 📁 Where to Find Translation Files

All translations are in:
```
src/i18n/locales/
  ├── en.json  (English)
  ├── ar.json  (Arabic)
  └── ru.json  (Russian)
```

---

## 🎉 You're Ready!

Just follow these 3 steps for any page, and use the translation keys from above. All the heavy lifting is done! 🚀

**Need more help?** Check `TRANSLATION_GUIDE.md` for detailed instructions.
