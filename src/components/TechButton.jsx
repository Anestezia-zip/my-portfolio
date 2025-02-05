import React, { useEffect, useRef } from "react";

const TechButton = ({ src, text, color = '', index, activeIndex, setActiveIndex, ...props }) => {
    const buttonRef = useRef(null); // Ссылка на саму кнопку

  const handleClick = (event) => {
    event.stopPropagation(); // Остановить всплытие, чтобы не сработал глобальный обработчик
    if (activeIndex === index) {
        setActiveIndex(null); // Если этот элемент уже активен, то деактивируем
    } else {
        setActiveIndex(index); // Если не активен, то активируем
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // Добавляем touchstart
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [setActiveIndex]);
  

  return (
    <div 
      ref={buttonRef} // Привязываем ссылку к элементу
      className={`tech-logo cursor-pointer flex items-center gap-2 ${color} ${activeIndex === index && "active:scale-105"}`}
      onClick={handleClick} // Обработчик клика по кнопке
    >
      {/* Icon */}
      <img className={`w-[45px] max-sm:w-[30px] max-md:w-[40px] ${activeIndex === index && "scale-125"}`} src={src} alt="Tech icon" />

      {/* Text */}
      {activeIndex === index && (
        <div
            className={`absolute ${props.positionClass} transition-all duration-300 ease-out`}
        >
            <span
              className="2xl:text-2xl text-base p-1 rounded-lg bg-white whitespace-nowrap shadow-lg"
            >
              {text}
            </span>
        </div>
      )}
    </div>
  );
};

export default TechButton;
