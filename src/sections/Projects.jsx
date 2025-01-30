import React, { Suspense, useState } from "react";
import { projectsByTech } from "../constatns";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/Loading";
import { Center, OrbitControls } from "@react-three/drei";
import { calculateSizes } from "../constatns";
import { useMediaQuery } from "react-responsive";
import TvMonitor from "../components/TvMonitor";

const projectCount = projectsByTech.find(
  (category) => category.tech === "React + TailwindCSS"
).projects.length;

const Projects = () => {
  const isSmall = useMediaQuery({ maxWidth: 639.5 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const currentProject = projectsByTech.find(
    (category) => category.tech === "React + TailwindCSS"
  ).projects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20">
      <p className="head-text">My projects</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-8 px-4 bg-gradient-to-b from-[#579784] via-[#4a7287] to-[#232c3c] shadow-2xl shadow-black-200">
          <div className="flex gap-8 items-center justify-between p-3 shadow-2xl shadow-black-500 w-full rounded-lg bg-gradient-to-b from-white-600 to-transparent">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/arrow-left.png"
                alt="left arrow"
                className="pr-0.5"
              />
            </button>

            <div className="flex items-center gap-4">
              <img className="w-10 h-10" src={currentProject.logo} alt="logo" />
              <p className="text-white text-2xl font-semibold animatedText">
                {currentProject.title}
              </p>
            </div>

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/arrow-right.png"
                alt="right arrow"
                className="pl-0.5"
              />
            </button>
          </div>

          <div className="flex flex-col gap-5 lg:text-lg text-white my-5">
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <div>
              <a
                className="flex items-center gap-2 cursor-pointer text-white mb-1"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
              >
                <p>Check live site</p>
                <img
                  src="/assets/increase.png"
                  alt="arrow"
                  className="w-6 h-6"
                />
              </a>
              <a
                className="flex items-center gap-2 cursor-pointer text-white"
                href={currentProject.githubHref}
                target="_blank"
                rel="noreferrer"
              >
                <p>Check github code</p>
                <img
                  src="/assets/github.png"
                  alt="arrow"
                  className="w-6 h-6 bg-white rounded-full"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group
                  scale={sizes.tvScale}
                  position={sizes.tvPosition}
                  rotation={[0, 0, 0]}
                >
                  <TvMonitor texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
