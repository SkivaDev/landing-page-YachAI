import React from "react";
import { features } from "../data/features.json";
import Card from "../components/Card";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Features() {

  const cssSlide = 'each-slide-effect';

  return (
    <div className="w-full px-[90px] py-[58px] bg-white2">
      <h3 className="text-[18px] text-center mb-[64px]">
        Usa Inteligencia artificial para mejorar tu aprendizaje.
      </h3>
      <div className="flex justify-between items-start mb-[64px] max-w-[1240px] mx-auto">
        <div className="block md:hidden">
          {features.map((feature, i) => (
            <Card key={i} cssSlide={''} {...feature} />
          ))}
        </div>
        <div className="hidden md:block">
          <Slide>
            {features.map((feature, i) => (
              <Card key={i} cssSlide={cssSlide} {...feature} />
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Features;
