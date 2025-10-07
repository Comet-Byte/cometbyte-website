# 🌍 i18next Translation Implementation Guide

## ✅ Already Implemented

The following components have been fully translated and are working:

1. **Navbar** (`src/components/navbar.tsx`)
   - Navigation links (Home, About, Services, Contact)
   - Services dropdown menu with all 8 services
   - CometByte branding text

2. **Hero** (`src/app/hero.tsx`)
   - Main title and subtitle
   - Service showcase labels
   - CTA button

3. **Footer** (`src/components/footer.tsx`)
   - Company, Services, and Connect sections
   - Newsletter section
   - Copyright text

4. **Layout** (`src/app/layout.tsx`)
   - I18nProvider wrapper added
   - Supports Arabic (RTL) and Russian (Cyrillic) fonts

## 📝 How to Add Translations to Remaining Pages

### Step 1: Mark Component as Client Component

Add at the top of your file:

```tsx
"use client";
```

### Step 2: Import useTranslation Hook

```tsx
import { useTranslation } from 'react-i18next';
```

### Step 3: Use the Hook in Component

```tsx
export default function YourComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('your.translation.key')}</h1>
    </div>
  );
}
```

### Step 4: Update Translation Files

Add your new keys to all three translation files:
- `src/i18n/locales/en.json`
- `src/i18n/locales/ar.json`
- `src/i18n/locales/ru.json`

## 🎯 Pages That Need Translation

### 1. **Main Services Page** (`src/app/services/page.tsx`)

**English keys already exist in translations:**
```json
"services": {
  "title": "Our Services",
  "subtitle": "Comprehensive digital solutions...",
  "cta": "Get Free Consultation",
  // All 8 services with title, description, detail
}
```

**How to implement:**
```tsx
"use client";
import { useTranslation } from 'react-i18next';

export default function ServicesPage() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('services.title')}</h1>
      <p>{t('services.subtitle')}</p>
      {/* Use t('services.webMobile.title'), etc. */}
    </div>
  );
}
```

### 2. **Contact Page** (`src/app/contact/page.tsx`)

**English keys already exist:**
```json
"contact": {
  "title": "Get in Touch",
  "subtitle": "Let's create something amazing together",
  "name": "Your Name",
  "email": "Your Email",
  "message": "Your Message",
  "send": "Send Message",
  "india": "India Office",
  "uae": "UAE Office",
  "ksa": "KSA Office",
  "phone": "Phone",
  "email_label": "Email"
}
```

### 3. **About Page** (`src/app/about/page.tsx` or `src/app/about.tsx`)

**English keys already exist:**
```json
"about": {
  "title": "About CometByte",
  "subtitle": "Pioneering Digital Excellence...",
  "mission": "Our Mission",
  "vision": "Our Vision",
  "values": "Our Values",
  "innovation": "Innovation",
  "quality": "Quality",
  "integrity": "Integrity",
  "collaboration": "Collaboration"
}
```

### 4. **Individual Service Pages** (8 pages in `src/app/services/*/page.tsx`)

Pages:
- `/services/web-mobile-development/page.tsx`
- `/services/digital-marketing/page.tsx`
- `/services/ui-ux-design/page.tsx`
- `/services/staff-outsourcing/page.tsx`
- `/services/infrastructure-hosting/page.tsx`
- `/services/ecommerce-development/page.tsx`
- `/services/technical-consulting/page.tsx`
- `/services/cyber-security/page.tsx`

**English keys already exist:**
```json
"serviceDetail": {
  "overview": "Overview",
  "keyFeatures": "Key Features",
  "whyChooseUs": "Why Choose Us",
  "getStarted": "Get Started Today",
  "readyToTransform": "Ready to Transform Your Business?",
  "talkToExpert": "Talk to an Expert",
  "viewAllServices": "View All Services"
}
```

**Plus service-specific keys:**
```json
"services": {
  "webMobile": {
    "title": "Web & Mobile Development",
    "description": "Full-stack applications and mobile solutions",
    "detail": "Transform your ideas into powerful digital experiences..."
  }
  // ... other services
}
```

## 📋 Translation Keys Reference

### Complete Key Structure

```
nav.*                    → Navigation items
hero.*                   → Hero section
services.*               → Services (titles, descriptions, details)
serviceDetail.*          → Service page common elements
footer.*                 → Footer sections
contact.*                → Contact page
about.*                  → About page
common.*                 → Shared elements (loading, error, etc.)
```

## 🔄 Language Switching Logic

The language switcher in the navbar automatically:
1. Changes i18next language
2. Updates localStorage
3. Sets document direction (RTL for Arabic)
4. Re-renders all components with new translations

### Supported Languages

| Code | Language | Direction | Flag |
|------|----------|-----------|------|
| En   | English  | LTR       | 🇺🇸   |
| Ar   | Arabic   | RTL       | 🇸🇦   |
| Ru   | Russian  | LTR       | 🇷🇺   |

## 🎨 RTL (Arabic) Support

Arabic is fully supported with RTL direction. The system automatically:
- Sets `dir="rtl"` on `<html>` element
- Maintains Arabic translations with proper meanings
- Preserves layout and styling

## 🚀 Quick Implementation Example

Here's a complete example for a service page:

```tsx
"use client";

import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function WebMobileDevelopment() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <h1 className="text-5xl font-bold">
          {t('services.webMobile.title')}
        </h1>
        <p className="text-xl text-gray-600">
          {t('services.webMobile.detail')}
        </p>
      </section>

      {/* Features */}
      <section className="py-20">
        <h2>{t('serviceDetail.keyFeatures')}</h2>
        {/* Your features content */}
      </section>

      {/* CTA */}
      <section className="py-20">
        <h2>{t('serviceDetail.readyToTransform')}</h2>
        <a 
          href="https://wa.me/971552094128?text=..."
          className="btn"
        >
          {t('serviceDetail.talkToExpert')}
        </a>
      </section>
    </div>
  );
}
```

## ⚠️ Important Notes

1. **Always use "use client"** directive when using useTranslation hook
2. **Check all three language files** when adding new keys
3. **Meanings in Russian and Arabic** have been verified by native context
4. **WhatsApp links** should remain as-is (URLs don't need translation)
5. **Email addresses** and phone numbers are not translated

## 📝 Adding New Translation Keys

If you need to add new content that's not in the current translations:

1. **Add to English** (`src/i18n/locales/en.json`):
```json
"yourSection": {
  "newKey": "Your English text"
}
```

2. **Add to Arabic** (`src/i18n/locales/ar.json`):
```json
"yourSection": {
  "newKey": "النص العربي الخاص بك"
}
```

3. **Add to Russian** (`src/i18n/locales/ru.json`):
```json
"yourSection": {
  "newKey": "Ваш русский текст"
}
```

4. **Use in component**:
```tsx
{t('yourSection.newKey')}
```

## ✨ Best Practices

1. ✅ Use semantic key names (`nav.home`, not `navbar.homeLink`)
2. ✅ Group related translations (`services.webMobile.*`)
3. ✅ Keep keys consistent across all language files
4. ✅ Test language switching after adding new translations
5. ✅ Verify RTL layout with Arabic language

## 🔍 Testing

1. Switch to Arabic → Check RTL layout and translations
2. Switch to Russian → Check Cyrillic display and translations
3. Switch back to English → Verify everything works
4. Check all pages navigate correctly in all languages
5. Verify WhatsApp links work with language-specific messages

---

**Ready to implement?** Start with the Contact page, then Services pages, then About page. All translation keys are already prepared! 🚀
