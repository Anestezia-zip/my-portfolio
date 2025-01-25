import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../components/Loading'
import ModernGadgets from '../components/ModernGadgets'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constatns'
import Target from '../components/Target'


const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 640 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-32 mt-24 c-space gap-3">
        <p className="sm:text-3xl max-sm:mt-10 text-xl font-medium text-white text-center font-generalsans">
          Hi there, welcome to my portfolio!
        </p>
        <p className="hero_tag text-white">Crafting solutions that leave a mark</p>
      </div>

      <div className="w-2/3 h-[70%] max-md:h-[60%] absolute top-48 right-0">
        <Canvas className='w-full h-[80%]'>
          {/* <Leva /> */}
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0,0,5]}/>
            <OrbitControls enableZoom={false} />

            <group position={sizes.deskPosition} className="model-container">
              <ModernGadgets 
                position={[0,0,0]}
                rotation={[0.4, -0.8, 0]}
                scale={sizes.deskScale} 
              />

            </group>

            <group>
              {/* <Target /> */}
            </group>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5}/>
            
          </Suspense>
        </Canvas>
      </div>

    </section>
  )
}

export default Hero