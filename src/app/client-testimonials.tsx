"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";

const TESTIMONIALS = [
  {
    feedback:
      "CometByte transformed our business with their innovative web application. The team was professional, responsive, and delivered beyond our expectations.",
    client: "Sarah Johnson",
    title: "CEO @ TechStart Inc.",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "Working with CometByte was a game-changer for us. They built a mobile app that our customers love and helped us increase engagement by 300%.",
    client: "Michael Chen",
    title: "CTO @ MobileFirst Solutions",
    img: "/image/avatar3.jpg",
  },
  {
    feedback:
      "The quality of work and attention to detail from CometByte is outstanding. They delivered our e-commerce platform on time and within budget.",
    client: "Emily Rodriguez",
    title: "Founder @ ShopEasy",
    img: "/image/avatar2.jpg",
  },
];

export function ClientTestimonials() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            What Our Clients Say
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            We are proud to work with amazing clients who trust us to deliver 
            exceptional software solutions. Here&apos;s what they have to say about 
            their experience with CometByte.
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {TESTIMONIALS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientTestimonials;
