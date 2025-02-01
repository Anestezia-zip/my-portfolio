import React, { useRef, useState } from "react";

export const items = [
  { text: "React", src: "/assets/react.png" },
  { text: "SCSS", src: "/assets/format.png" },
  { text: "JavaScript", src: "/assets/js.png" },
  { text: "TypeScript", src: "/assets/ts.png" },
  { text: "GIT", src: "/assets/git.png" },
  { text: "HTML5 & CSS3", src: "/assets/coding.png" },
  { text: "TailwindCSS", src: "/assets/tailwind.png" },
  { text: "Angular", src: "/assets/angular.png" },
  { text: "Responsive Design", src: "/assets/responsive.png" },
  { text: "Three.js", src: "/assets/three.png" },
  { text: "Web Accessibility", src: "/assets/mobile.png" },
  { text: "E-Commerce", src: "/assets/shopping.png" },
  { text: "Web Marketing", src: "/assets/marketing.png" },
  { text: "Software Testing", src: "/assets/software-testing.png" },
  { text: "PostgreSQL", src: "/assets/postgresql.png" },
  { text: "AWS S3", src: "/assets/aws.png" },
  { text: "Python", src: "/assets/python.png" },
  { text: "Django", src: "/assets/django.png" },
  { text: "MySQL", src: "/assets/mysql.png" },
  { text: "SEO", src: "/assets/seo.png" },
];

const TechIcon = ({ src, text, color, direction = "right", ...props }) => {
  const [hovered, setHovered] = useState(false);
  const textRef = useRef(null);

  
  return (
    <div 
      className={`relative flex items-center gap-2 ${color || ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <img className="w-[45px] max-sm:w-[30px] max-md:w-[40px] 2xl:w-[100px]" src={src} alt="Tech icon" />

      {/* Text */}
      <div
        className={`absolute transition-all duration-300 ease-out ${
          direction === "left" ? "right-full mr-2" : "left-full ml-2"
        }`}
        style={{
          width: hovered ? `calc(${textRef.current?.offsetWidth || 0}px + 4px)` : 0,
          overflow: "hidden",
        }}
      >
        <span
          ref={textRef}
          className="2xl:text-2xl max-lg:text-base p-1 rounded-lg bg-white whitespace-nowrap shadow-lg"
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default TechIcon;
