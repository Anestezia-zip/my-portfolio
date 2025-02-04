import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { useMediaQuery } from "react-responsive";

const GlobeComponent = () => {
  const globeRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  
  useEffect(() => {
    if (globeRef.current) {
      const globe = globeRef.current;
      const controls = globe.controls();

      if (isMobile) {
        controls.enableZoom = false; // Disable zoom on mobiles
      }

      controls.enableRotate = true;
      controls.enablePan = true;
    }
  }, [isMobile]);

  return (
    <Globe
      ref={globeRef}
      height={isMobile ? 220 : 326}
      width={isMobile ? 220 : 326}
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
