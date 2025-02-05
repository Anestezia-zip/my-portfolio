import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import CanvasLoader from "../components/Loading";
import ModernGadgets from "../components/ModernGadgets";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constatns";
import TechIcon, { items } from "../components/TechIcon";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import TechButton from "../components/TechButton";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 639.5 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="w-full flex flex-col relative" id="home" role="banner">
      <div className="w-fit mx-auto flex flex-col sm:mt-28 mt-20 c-space gap-2">
        <h1 className="sm:text-3xl max-sm:mt-4 text-xl font-medium text-black text-center font-generalsans">
          Hi there, welcome to my portfolio!
        </h1>
        <h2 className="hero_tag text-transparent bg-clip-text bg-gradient-to-b from-black via-gray-800 to-teal-700">
          Crafting solutions that leave a mark
        </h2>
      </div>

      <div className="flex max-md:flex-col items-center justify-center max-lg:gap-4 max-[830px]:gap-1 gap-12 px-4">
        {/* Left item list */}
        <div className="hidden relative top-10 md:flex justify-center gap-6 items-end w-fit">
          <div className="relative -top-10 flex flex-col gap-6">
            {items.slice(0, 5).map((item, i) => (
              <div
                key={i}
                className={
                  i % 2 === 0
                    ? "animate-float-down-right"
                    : "animate-float-down-left"
                }
              >
                <TechIcon
                  text={item.text}
                  src={item.src}
                  direction="left"
                  tabIndex="0"
                  aria-label={`Technical icon: ${item.text}`}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {items.slice(5, 10).map((item, i) => (
              <div
                key={i}
                className={
                  i % 2 === 0
                    ? "animate-float-down-left"
                    : "animate-float-down-right"
                }
              >
                <TechIcon text={item.text} src={item.src} direction="left" />
              </div>
            ))}
          </div>
        </div>

        {/* Centre: 3D-сцена */}
        <div
          className="relative -top-6 w-full h-[240px] md:w-[320px] md:h-[320px] lg:w-[350px] 2xl:w-[700px] 2xl:h-[550px]"
          aria-hidden="true"
          role="presentation"
        >
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <HeroCamera isMobile={isMobile}>
                <ModernGadgets
                  position={sizes.deskPosition}
                  rotation={[0.4, -0.8, 0]}
                  scale={sizes.deskScale}
                />
              </HeroCamera>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>

        {/* Right item list */}
        <div className="hidden relative top-10 md:flex justify-center gap-6 items-end w-fit">
          <div className="flex flex-col z-10 gap-6">
            {items.slice(10, 15).map((item, i) => (
              <div
                key={i}
                className={
                  i % 2 === 0
                    ? "animate-float-down-right"
                    : "animate-float-down-left"
                }
              >
                <TechIcon
                  text={item.text}
                  src={item.src}
                  tabIndex="0"
                  aria-label={`Technical icon: ${item.text}`}
                />
              </div>
            ))}
          </div>
          <div className="relative -top-10 z-0 flex flex-col gap-6">
            {items.slice(15, 20).map((item, i) => (
              <div
                key={i}
                className={
                  i % 2 === 0
                    ? "animate-float-down-left"
                    : "animate-float-down-right"
                }
              >
                <TechIcon text={item.text} src={item.src} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile tech item list */}
        <div className="relative -top-10 max-[360px]:-top-14 md:hidden flex items-center justify-center w-fit">
          <div>
            <h3 className="font-generalsans text-lg my-3">
              My technical arsenal:
            </h3>
            <div className="grid grid-cols-5 gap-x-3 gap-y-6 p-4">
              {items.slice(0, 20).map((item, i) => (
                <div
                  key={i}
                  className={
                    i % 2 === 0
                      ? "animate-float-down-left"
                      : "animate-float-down-right"
                  }
                >
                  <TechButton
                    src={item.src}
                    text={item.text}
                    index={i}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    color="w-15 h-15"
                    tabIndex="0"
                    positionClass="-top-7 left-1/2 transform -translate-x-1/2"
                    aria-label={`Technical icon: ${item.text}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-2xl:top-14 max-md:-top-4 left-0 right-0 w-fit mx-auto z-10 c-space mt-2">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96 2xl:text-3xl bg-gradient-to-b from-teal-900 via-gray-800 to-black"
            aria-label="Contact me"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
