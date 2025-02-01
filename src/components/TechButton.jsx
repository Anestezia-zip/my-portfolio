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
    // Функция для обработки кликов вне элемента
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setActiveIndex(null); // Скрыть текст, если клик вне кнопки
      }
    };

    // Добавляем обработчик кликов
    document.addEventListener("click", handleClickOutside);

    // Убираем обработчик при размонтировании компонента
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setActiveIndex]);

  return (
    <div 
      ref={buttonRef} // Привязываем ссылку к элементу
      className={`tech-logo cursor-pointer flex items-center gap-2 ${color} ${activeIndex === index ? "active:scale-105" : "z-0"}`} // Добавляем z-20 для активного элемента
      onClick={handleClick} // Обработчик клика по кнопке
    >
      {/* Icon */}
      <img className={`w-[45px] max-sm:w-[30px] max-md:w-[40px] ${activeIndex === index && "scale-125"}`} src={src} alt="Tech icon" />

      {/* Text */}
      {activeIndex === index && (
        <div
            className={`absolute z-30 ${props.positionClass} transition-all duration-300 ease-out`}
        >
            <span
              className={`2xl:text-2xl text-base p-1 rounded-lg bg-white whitespace-nowrap shadow-lg ${activeIndex === index && 'relative z-20'}"`}
            >
              {text}
            </span>
        </div>
      )}
    </div>
  );
};

export default TechButton;
