import React, { Suspense, useEffect, useState } from "react";
import { projectsByTech } from "../constatns";
import { Canvas } from "@react-three/fiber";
import Loading from "../components/Loading";
import { Center, OrbitControls } from "@react-three/drei";
import { calculateSizes } from "../constatns";
import { useMediaQuery } from "react-responsive";
import TvMonitor from "../components/TvMonitor";
import TechButton from "../components/TechButton";

const Projects = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [activeTechTag, setActiveTechTag] = useState(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const isSmall = useMediaQuery({ maxWidth: 639.5 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1280 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet, isLaptop);

  const currentCategory = projectsByTech[selectedCategoryIndex];
  const currentProject = currentCategory.projects[selectedProjectIndex];
  const projectCount = currentCategory.projects.length;
  const totalProjects = projectsByTech.reduce(
    (total, category) => total + category.projects.length,
    0
  );

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const handleCategoryChange = (index) => {
    setSelectedCategoryIndex(index);
    setSelectedProjectIndex(0);
  };


  return (
    <section className="c-space my-20 sm:mt-40" id="projects">
      <h3 className="head-text mb-8" id="projects-heading">
        My {totalProjects} projects:
      </h3>

      {/* Category select */}
      <div className="flex items-center max-sm:gap-4 gap-8 lg:gap-96">
        <label htmlFor="category-select" className="sr-only">
          Select project category
        </label>
        <select
          id="category-select"
          className="p-2 border rounded-md bg-white text-black"
          value={selectedCategoryIndex}
          onChange={(e) => handleCategoryChange(Number(e.target.value))}
          aria-labelledby="projects-heading"
        >
          {projectsByTech.map((category, index) => (
            <option key={category.tech} value={index}>
              {category.tech}
            </option>
          ))}
        </select>
        <h4 className="lg:text-lg">
          <span className="font-bold mr-2 tracking-wide">
            Number of projects in category:
          </span>
          {projectCount}
        </h4>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-4 gap-5 w-full">
        {/* Project card */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-8 px-4 bg-gradient-to-b from-[#579784] via-[#4a7287] to-[#232c3c] shadow-lg shadow-black-500 lg:shadow-2xl lg:shadow-black-200">
          {/* Project card header */}
          <div className="flex gap-8 max-sm:gap-2 items-center justify-between max-sm:justify-center p-3 shadow-2xl shadow-black-500 w-full rounded-lg bg-gradient-to-b from-white-600 to-transparent">
            <button
              className="arrow-btn max-sm:hidden"
              onClick={() => handleNavigation("previous")}
              aria-label="View previous project"
            >
              <img
                src="/assets/arrow-left.png"
                alt="left arrow"
                className="pr-0.5"
                aria-hidden="true"
              />
            </button>

            <div className="flex items-center gap-4 max-sm:gap-2">
              <img
                className="w-10 h-10 max-sm:w-6 max-sm:h-6"
                src={currentProject.logo}
                alt="logo"
              />
              <h4 className="text-white max-sm:text-base w-fit text-2xl font-semibold animatedText">
                {currentProject.title}
              </h4>
            </div>

            <button
              className="arrow-btn max-sm:hidden"
              onClick={() => handleNavigation("next")}
              aria-label="View next project"
            >
              <img
                src="/assets/arrow-right.png"
                alt="right arrow"
                className="pl-0.5"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Project card description */}
          <div className="max-sm:min-h-64 flex flex-col gap-5 lg:text-lg text-white my-5 max-sm:my-1">
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          {/* Project tech icons and links */}
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="relative">
                  <TechButton
                    src={tag.path}
                    text={tag.name}
                    index={index}
                    activeIndex={activeTechTag}
                    setActiveIndex={setActiveTechTag}
                    color="w-15 h-15"
                    tabIndex="0"
                    positionClass="-top-8 left-0 transform"
                    aria-label={`Technical icon: ${tag.text}`}
                  />
                </div>
              ))}
            </div>

            <div>
              <a
                className="flex items-center gap-2 cursor-pointer text-white mb-1"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Check live site: ${currentProject.title}`}
              >
                <p>Check live site</p>
                <img
                  src="/assets/increase.png"
                  alt="arrow"
                  className="w-6 h-6"
                  aria-hidden="true"
                />
              </a>
              <a
                className="flex items-center gap-2 cursor-pointer text-white"
                href={currentProject.githubHref}
                target="_blank"
                rel="noreferrer"
                aria-label={`Check github code for ${currentProject.title}`}
              >
                <p>Check github code</p>
                <img
                  src="/assets/github.png"
                  alt="arrow"
                  className="w-6 h-6 bg-white rounded-full"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Project header buttons but on mobile devices */}
          <div className="flex justify-between">
            <button
              className="arrow-btn sm:hidden"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/arrow-left.png"
                alt="left arrow"
                className="pr-0.5"
              />
            </button>
            <button
              className="arrow-btn sm:hidden"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/arrow-right.png"
                alt="right arrow"
                className="pl-0.5"
              />
            </button>
          </div>
        </div>

        {/* Project 3D model */}
        <div className="rounded-lg shadow-2xl shadow-black-500 border h-96 max-lg:h-80 lg:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<Loading />}>
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

        <div
          className="max-sm:text-xs lg:hidden"
          onClick={() => setIsTooltipVisible(!isTooltipVisible)}
          aria-expanded={isTooltipVisible}
          aria-controls="tooltip"
        >
          <p className="flex items-center gap-1 py-0.5">
            <span>Don't see the video?</span>{" "}
            <img
              className="w-4 h-4"
              src="/assets/info.png"
              alt="Info icon"
              aria-hidden="true"
            />
          </p>

          {isTooltipVisible && (
            <div
              id="tooltip"
              className="w-fit text-green-400 bg-black-500 rounded px-2 py-0.5"
            >
              Try turning off the power-saving mode
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
