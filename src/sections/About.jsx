import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import GlobeComponent from "../components/Globe";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("a.melni44enko@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <h2 className="sr-only">About me</h2>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* My name */}
        <article className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <figure className="h-full flex items-center justify-center">
              <img
                src="assets/grid-1.png"
                alt="Girl developer icon"
                className="w-full sm:h-[160px] max-sm:h-[150px] h-[70%] object-contain"
              />
            </figure>

            <header>
              <h2 className="grid-headtext">Hi, I’m Anastasia Peresunko</h2>
              <p className="grid-subtext">
              I'm passionate about web development and enjoy the constant challenge of learning 
              something new every day as I grow as a developer.
              </p>
            </header>
          </div>
        </article>
        {/* My tech stack */}
        <article className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <figure className="h-full flex items-center justify-center">
              <img
                src="assets/brain.png"
                alt="Tech stack icon representing coding skills"
                className="w-full sm:h-[140px] max-sm:h-[125px] h-[68%] object-contain"
              />
            </figure>

            <header>
              <h3 className="grid-headtext">Tech Stack</h3>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with a focus on the React ecosystem. 
                My expertise includes SQL databases, AWS cloud technologies. I have experience in SEO, web marketing, 
                and e-commerce.
              </p>
            </header>
          </div>
        </article>
        
        {/* Globe 3D model */}
        <article className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full max-sm:h-[200px] sm:h-[326px] h-fit flex justify-center items-center">
              <GlobeComponent />
            </div>
            <header>
              <h3 className="grid-headtext">
                I&apos;m very flexible with time zone communications & locations
              </h3>
              <p className="grid-subtext">
                I&apos;m based in Ireland and open to remote work worldwide.
              </p>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10 bg-gradient-to-b from-black via-gray-800 to-teal-900"
              />
            </header>
          </div>
        </article>
        
        {/* My passion */}
        <article className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
          <figure className="h-full flex items-center justify-center">
            <img
              src="assets/passion.gif"
              alt="Passion for coding GIF"
              className="w-full sm:h-[200px] max-sm:h-[160px] h-fit object-contain"
            />
          </figure>

            <header>
              <h3 className="grid-headtext">
                The world of coding excites me endlessly
              </h3>
              <p className="grid-subtext">
                It&apos;s more than
                just work — it&apos;s what drives me. <br />I thrive on
                discovering fresh technologies and continuously improving my
                abilities.
              </p>
            </header>
          </div>
        </article>
        
        {/* Contact */}
        <article className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
          <figure className="h-full flex items-center justify-center">
            <img
              src="assets/email.png"
              alt="grid-4"
              className="w-full h-[100px] object-contain sm:object-top"
            />
          </figure>

            <header className="space-y-2">
              <h3 className="grid-subtext text-center">Contact me</h3>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  width={30}
                  src={hasCopied ? "assets/check.png" : "assets/copy.png"}
                  alt={hasCopied ? "Copied to clipboard" : "Copy email to clipboard"}
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  a.melni44enko@gmail.com
                </p>
              </div>
            </header>
          </div>
        </article>

      </div>
    </section>
  );
};

export default About;
