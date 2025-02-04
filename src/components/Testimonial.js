import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <section className="mb-64 lg:mb-48">
      <div className="container mx-auto">
        <div className="bg-purple-400/10 max-h-[400px] p-12 rounded-lg ">
          <div className="text-center">
            <h2
              className="text-3x1 font-bold mb-6"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay="1600"
            >
              What our clients say
            </h2>
            <p
              className="max-w-2x1 mx-auto mb-12 lg:mb-24"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay="1800"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              commodi tenetur amet fugiat magni deserunt possimus omnis culpa
              corrupti porro?
            </p>
          </div>

          <div data-aos="fade-up" data-aos-offset="300" data-aos-delay="2000">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
