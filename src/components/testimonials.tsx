"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ishant Sharma",
      role: "Web Designer",
      rating: 5,
      feedback:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
      image: "/img/client.png",
    },
    {
      id: 2,
      name: "Ishant Sharma",
      role: "Web Designer",
      rating: 5,
      feedback:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
      image: "/img/client.png",
    },
    {
      id: 3,
      name: "Ishant Sharma",
      role: "Web Designer",
      rating: 5,
      feedback:
        "Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.",
      image: "/img/client.png",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <span className="text-[#E84E36] font-serif text-2xl">
          Customer Feedback
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#002A18] mt-4">
          What Happy Clients Says
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full p-2"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="pl-4 basis-[45%]">
              <div className="bg-gray-100 p-6 rounded-lg flex gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-36 h-40">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-lg object-cover"
                    />
                    <div className="absolute -bottom-4 right-[35%] w-12 h-12 bg-[#E84E36] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      <Quote />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">
                    {testimonial.feedback}
                  </p>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-[#E84E36] text-[#E84E36]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
