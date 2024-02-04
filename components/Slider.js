import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card";

export default function Slider({ title, data }) {
  return (
    <div className="w-full mb-20">
      <h2 className="title-heading dark:text-white">{title}</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="py-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 "
            >
              <Card item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
