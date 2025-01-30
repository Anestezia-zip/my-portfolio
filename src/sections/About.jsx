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
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="h-full flex items-center justify-center">
              <img
                src="assets/grid-1.png"
                alt="Girl developer icon"
                className="w-full sm:h-[160px] h-[70%] object-contain"
              />
            </div>

            <div>
              <p className="grid-headtext">Hi, I’m Anastasia Peresunko</p>
              <p className="grid-subtext">
              I'm passionate about web development and enjoy the constant challenge of learning 
              something new every day as I grow as a developer.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="h-full flex items-center justify-center">
              <img
                src="assets/brain.png"
                alt="grid-2"
                className="w-full sm:h-[140px] h-[68%] object-contain"
              />
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with a focus on the React ecosystem. 
                My expertise includes SQL databases, AWS cloud technologies. I have experience in SEO, web marketing, 
                and e-commerce.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <GlobeComponent />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Ireland and open to remote work worldwide.
              </p>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10 bg-gradient-to-b from-black via-gray-800 to-teal-900"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
          <div className="h-full flex items-center justify-center">
            <img
              src="assets/passion.gif"
              alt="grid-3"
              className="w-full sm:h-[200px] h-fit object-contain"
            />
          </div>

            <div>
              <p className="grid-headtext">
                The world of coding excites me endlessly
              </p>
              <p className="grid-subtext">
                It&apos;s more than
                just work — it&apos;s what drives me. <br />I thrive on
                discovering fresh technologies and continuously improving my
                abilities.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
          <div className="h-full flex items-center justify-center">
            <img
              src="assets/email.png"
              alt="grid-4"
              className="w-full h-[100px] object-contain sm:object-top"
            />
          </div>

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  width={30}
                  src={hasCopied ? "assets/check.png" : "assets/copy.png"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  a.melni44enko@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
