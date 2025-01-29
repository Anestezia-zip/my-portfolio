import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const GlobeComponent = () => {
  const globeRef = useRef();

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Указываем максимальную ширину для мобильных устройств

    if (globeRef.current) {
      const globe = globeRef.current;
      const controls = globe.controls();

      // Если на мобильном устройстве, отключаем зум
      if (isMobile) {
        controls.enableZoom = false;
      }

      controls.enableRotate = true; // Включаем вращение
      controls.enablePan = true; // Включаем панорамирование
    }
  }, []); // Эффект сработает только один раз после монтирования компонента

  return (
    <Globe
      ref={globeRef}
      height={326}
      width={326}
      backgroundColor="rgba(0, 0, 0, 0)"
      backgroundImageOpacity={0.5}
      showAtmosphere
      enableZoom={false}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      labelsData={[
        {
          lat: 53.3498,
          lng: -6.2603,
          text: "Ireland",
          color: "white",
          size: 15,
        },
      ]}
    />
  );
};

export default GlobeComponent;
