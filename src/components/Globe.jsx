import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { useMediaQuery } from "react-responsive";

const GlobeComponent = () => {
  const globeRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  useEffect(() => {
    if (globeRef.current) {
      const globe = globeRef.current;
      const controls = globe.controls();

      if (isMobile) {
        controls.enableZoom = false; // Отключаем зум на мобильных
      }

      controls.enableRotate = true;
      controls.enablePan = true;
    }
  }, [isMobile]); // Перезапускаем эффект при изменении isMobile

  return (
    <Globe
      ref={globeRef}
      height={isMobile ? 200 : 326} // Уменьшаем размер на мобилках
      width={isMobile ? 200 : 326}
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
