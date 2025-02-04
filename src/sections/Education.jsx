import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { education } from "../constatns";
import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/Loading.jsx";

const Education = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (

    <section className="c-space" id="education">
      <h3 className="sr-only">My journey in education</h3>
      <div className="w-full ">
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={2} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position={[0,-2.6,0]}
                  scale={2.6}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5 work-content_after work-content_before">
              {education.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName("idle")}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-4">
                    <p className="text-sm mb-2">
                      {item.year} — <span>{item.place}</span>
                    </p>
                    <p className="font-bold">{item.title}</p>
                    <p className="flex flex-col transition-all ease-in-out duration-500">
                      <span className="underline">Modules:</span>
                      <span>{item.modules}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
