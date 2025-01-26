import React, { useRef, useState } from "react";

const IconButton = ({ width, src, text, color, ...props }) => {
  const [hovered, setHovered] = useState(false);
  const textRef = useRef(null);

  return (
    <button
      className={`flex flex-nowrap p-1 items-center rounded-lg text-black ${color || ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="w-[50px] max-md:w-[30px]" src={src} alt="Tech icon"/>
      <div 
        className="overflow-x-hidden transition-all duration-300 ease-out"
        style={{ width: hovered ? `calc(${textRef.current?.offsetWidth || 0}px + 6px)` || 0 : 0 }}
      >
        <span ref={textRef} className="p-1 m-1 rounded-lg bg-white inline-block whitespace-nowrap">
          {text}
        </span>
      </div>
    </button>
  );
};

export default IconButton;
