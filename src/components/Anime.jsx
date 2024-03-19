import { useGSAP } from "@gsap/react";

import { rightImg, watchImg } from "../utils";

import { animatedWithGsap } from "../utils/animations";
import AmvCarousel from "./AmvCarousel";

const Anime = () => {
  useGSAP(() => {
    animatedWithGsap("#anime_title", { y: 0, opacity: 1 });
    animatedWithGsap(".link_2", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="anime_title" className="section-heading">
            Anime moments.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link_2">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link_2">
              Watch the event
              <img src={rightImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>
        <AmvCarousel />
      </div>
    </section>
  );
};

export default Anime;
