"use client";

import { Navbar, Footer } from "@/components";
import { Typography, Input, Textarea, Button, Card, CardBody } from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="px-8 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            {/* @ts-ignore */}
            <Typography variant="h1" color="blue-gray" className="mb-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
              {t('contact.title')}
            </Typography>
            {/* @ts-ignore */}
            <Typography variant="lead" className="mx-auto max-w-3xl !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
              {t('contact.subtitle')}
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              {/* @ts-ignore */}
              <Typography variant="h3" color="blue-gray" className="mb-6" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                {t('contact.infoTitle')}
              </Typography>
              
              <div className="space-y-6 mb-8">
                {/* Email Card with Glass Effect */}
                <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6 group hover:bg-white/70 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start gap-4 relative z-10">
                    <EnvelopeIcon className="h-6 w-6 text-gray-700 mt-1" />
                    <div>
                      {/* @ts-ignore */}
                      <Typography variant="h6" color="blue-gray" className="mb-1" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                        {t('contact.email')}
                      </Typography>
                      {/* @ts-ignore */}
                      <Typography className="!text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                        info@cometbyte.com
                      </Typography>
                      {/* @ts-ignore */}
                      <Typography className="!text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                        partners@cometbyte.com
                      </Typography>
                    </div>
                  </div>
                </div>

                {/* Phone Card with Glass Effect */}
                <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6 group hover:bg-white/70 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start gap-4 relative z-10">
                    <PhoneIcon className="h-6 w-6 text-gray-700 mt-1" />
                    <div>
                      {/* @ts-ignore */}
                      <Typography variant="h6" color="blue-gray" className="mb-1" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                        {t('contact.phone')}
                      </Typography>
                      {/* @ts-ignore */}
                      <Typography className="!text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                        {t('contact.phoneGeneral')}: +971 55 2094128
                      </Typography>
                      {/* @ts-ignore */}
                      <Typography className="!text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                        {t('contact.phonePartnership')}: +91 7907291622
                      </Typography>
                    </div>
                  </div>
                </div>

                {/* Locations Card with Glass Effect */}
                <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6 group hover:bg-white/70 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start gap-4 relative z-10">
                    <MapPinIcon className="h-6 w-6 text-gray-700 mt-1" />
                    <div>
                      {/* @ts-ignore */}
                      <Typography variant="h6" color="blue-gray" className="mb-1" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                        {t('contact.locationsTitle')}
                      </Typography>
                      {/* @ts-ignore */}
                      <Typography className="!text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                        {t('contact.locationIndia')}
                      </Typography>
                      {/* @ts-ignore */}
                      <Typography className="!text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                        {t('contact.locationUAE')}
                      </Typography>
                      {/* @ts-ignore */}
                      <Typography className="!text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                        {t('contact.locationKSA')}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours with Glass Effect */}
              <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                {/* @ts-ignore */}
                <CardBody className="relative z-10" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  {/* @ts-ignore */}
                  <Typography variant="h5" color="blue-gray" className="mb-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                    {t('contact.hoursTitle')}
                  </Typography>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      {/* @ts-ignore */}
                      <Typography className="!text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>{t('contact.hoursWeekdays')}:</Typography>
                      {/* @ts-ignore */}
                      <Typography className="!text-gray-900 font-medium" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>{t('contact.hoursWeekdaysTime')}</Typography>
                    </div>
                    <div className="flex justify-between">
                      {/* @ts-ignore */}
                      <Typography className="!text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>{t('contact.hoursSaturday')}:</Typography>
                      {/* @ts-ignore */}
                      <Typography className="!text-gray-900 font-medium" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>{t('contact.hoursSaturdayTime')}</Typography>
                    </div>
                    <div className="flex justify-between">
                      {/* @ts-ignore */}
                      <Typography className="!text-gray-600" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>{t('contact.hoursSunday')}:</Typography>
                      {/* @ts-ignore */}
                      <Typography className="!text-gray-900 font-medium" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>{t('contact.hoursClosed')}</Typography>
                    </div>
                  </div>
                </CardBody>
              </div>
            </div>

            {/* Contact Form with Glass Effect */}
            <div>
              <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                {/* @ts-ignore */}
                <CardBody className="relative z-10" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  {/* @ts-ignore */}
                  <Typography variant="h4" color="blue-gray" className="mb-6" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}>
                    {t('contact.formTitle')}
                  </Typography>
                  <form className="space-y-6">
                    <div>
                      {/* @ts-ignore */}
                      <Input 
                        label={t('contact.formName')}
                        size="lg"
                        color="gray"
                        className="!bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      {/* @ts-ignore */}
                      <Input 
                        label={t('contact.formEmail')}
                        type="email"
                        size="lg"
                        color="gray"
                        className="!bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      {/* @ts-ignore */}
                      <Input 
                        label={t('contact.formPhone')}
                        type="tel"
                        size="lg"
                        color="gray"
                        className="!bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      {/* @ts-ignore */}
                      <Input 
                        label={t('contact.formSubject')}
                        size="lg"
                        color="gray"
                        className="!bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      {/* @ts-ignore */}
                      <Textarea 
                        label={t('contact.formMessage')}
                        rows={6}
                        color="gray"
                        className="!bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    {/* @ts-ignore */}
                    <Button 
                      color="gray" 
                      size="lg" 
                      className="w-full group relative overflow-hidden"
                      placeholder="" 
                      onPointerEnterCapture={() => {}} 
                      onPointerLeaveCapture={() => {}}
                    >
                      <span className="relative z-10">{t('contact.formSubmit')}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </Button>
                  </form>
                </CardBody>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      <style jsx global>{`
        @keyframes liquid-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
      `}</style>
    </>
  );
}
