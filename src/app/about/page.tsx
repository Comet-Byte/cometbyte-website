"use client";

import { Navbar, Footer } from "@/components";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { 
  RocketLaunchIcon, 
  LightBulbIcon, 
  UserGroupIcon,
  ShieldCheckIcon 
} from "@heroicons/react/24/solid";
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="px-8 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <Typography 
              variant="h1" 
              color="blue-gray" 
              className="mb-4"
              placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
            >
              {t('about.title')}
            </Typography>
            <Typography 
              variant="lead" 
              className="mx-auto max-w-3xl !text-gray-500"
              placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
            >
              {t('about.intro')}
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-20">
            <div>
              <Typography 
                variant="h3" 
                color="blue-gray" 
                className="mb-4"
                placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
              >
                {t('about.storyTitle')}
              </Typography>
              <Typography 
                className="mb-4 !text-gray-600"
                placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
              >
                {t('about.storyPara1')}
              </Typography>
              <Typography 
                className="mb-4 !text-gray-600"
                placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
              >
                {t('about.storyPara2')}
              </Typography>
            </div>
            <div>
              <Typography 
                variant="h3" 
                color="blue-gray" 
                className="mb-4"
                placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
              >
                {t('about.missionTitle')}
              </Typography>
              <Typography 
                className="mb-4 !text-gray-600"
                placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
              >
                {t('about.missionPara1')}
              </Typography>
              <Typography 
                className="!text-gray-600"
                placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
              >
                {t('about.missionPara2')}
              </Typography>
            </div>
          </div>

          <div className="mb-16">
            <Typography 
              variant="h2" 
              color="blue-gray" 
              className="mb-12 text-center"
              placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
            >
              {t('about.valuesTitle')}
            </Typography>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                <CardBody className="text-center" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  <RocketLaunchIcon className="h-12 w-12 mx-auto mb-4 text-gray-700" />
                  <Typography 
                    variant="h5" 
                    color="blue-gray" 
                    className="mb-2"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t('about.values.innovation.title')}
                  </Typography>
                  <Typography 
                    className="!text-gray-600"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t('about.values.innovation.desc')}
                  </Typography>
                </CardBody>
              </Card>
              
              <Card placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                <CardBody className="text-center" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  <LightBulbIcon className="h-12 w-12 mx-auto mb-4 text-gray-700" />
                  <Typography 
                    variant="h5" 
                    color="blue-gray" 
                    className="mb-2"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t('about.values.excellence.title')}
                  </Typography>
                  <Typography 
                    className="!text-gray-600"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t('about.values.excellence.desc')}
                  </Typography>
                </CardBody>
              </Card>
              
              <Card placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                <CardBody className="text-center" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  <UserGroupIcon className="h-12 w-12 mx-auto mb-4 text-gray-700" />
                  <Typography 
                    variant="h5" 
                    color="blue-gray" 
                    className="mb-2"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t('about.values.collaboration.title')}
                  </Typography>
                  <Typography 
                    className="!text-gray-600"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t('about.values.collaboration.desc')}
                  </Typography>
                </CardBody>
              </Card>
              
              <Card placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                <CardBody className="text-center" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  <ShieldCheckIcon className="h-12 w-12 mx-auto mb-4 text-gray-700" />
                  <Typography 
                    variant="h5" 
                    color="blue-gray" 
                    className="mb-2"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t('about.values.integrity.title')}
                  </Typography>
                  <Typography 
                    className="!text-gray-600"
                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} onResize={() => {}} onResizeCapture={() => {}}
                  >
                    {t('about.values.integrity.desc')}
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
