import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../components/Loading'
import ModernGadgets from '../components/ModernGadgets'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constatns'
import Target from '../components/Target'
import IconButton from '../components/IconButton'


const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 640 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-32 mt-24 c-space gap-3">
        <h1 className="sm:text-3xl max-sm:mt-10 text-xl font-medium text-black text-center font-generalsans">
          Hi there, welcome to my portfolio!
        </h1>
        <h2 className="hero_tag text-transparent bg-clip-text bg-gradient-to-b from-black via-gray-800 to-teal-700">
          Crafting solutions that leave a mark
        </h2>
      </div>

      <div className='flex max-lg:flex-col-reverse max-lg:items-center'>
        <div className=' z-10 w-[60%] max-lg:w-[80%] max-lg:justify-center relative top-12 max-xl:top-12 flex gap-6 left-20 max-lg:-left-12'>
          <div className='uppercase text-xl relative translate-y-20 font-medium font-generalsans'>
            <h3>My</h3>
            <h3>tech</h3>
            <h3>skills</h3>
          </div>
          <ul>
            <li className='flex gap-12 max-xl:gap-8 mb-4'>
              <IconButton text='HTML5 & CSS3' src="/assets/coding.png" />
              <IconButton text='SCSS' src="/assets/format.png" />
              <IconButton text='JavaScript' src="/assets/js.png" />
              <IconButton text='TypeScript' src="/assets/ts.png" />
              <IconButton text='GIT' src="/assets/git.png" />
            </li>
            <li className='flex gap-12 max-xl:gap-8 mb-4'>
              <IconButton text='React' src="/assets/react.png" />
              <IconButton text='TailwindCSS' src="/assets/tailwind.png" />
              <IconButton text='Angular' src="/assets/angular.png" />
              <IconButton text='Responsive design' src="/assets/responsive.png" />
              <IconButton text='Three' src="/assets/three.png" />
            </li>
            <li className='flex gap-12 max-xl:gap-8 mb-4'>
              <IconButton text='Web accessibility' src="/assets/mobile.png" />
              <IconButton text='AWS' src="/assets/aws.png" />
              <IconButton text='Web marketing' src="/assets/marketing.png" />
              <IconButton text='SEO' src="/assets/seo.png" />
              <IconButton text='Software testing' src="/assets/software-testing.png" />
            </li>
            <li className="flex gap-12 max-xl:gap-8 mb-4">
              <IconButton text='E-commerce' src="/assets/shopping.png" />
              <IconButton text='Python' src="/assets/python.png" />
              <IconButton text='Django' src="/assets/django.png" />
              <IconButton text='MySQL' src="/assets/mysql.png" />
              <IconButton text='PostgreSQL' src="/assets/postgresql.png" />
            </li>
          </ul>
        </div>

        <div className="w-[35%] max-xl:w-[40%] max-lg:w-[60%] h-[400px] relative top-2 right-10 max-[1140px]:right-10">
          <Canvas className='w-full h-full'>
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
      </div>

    </section>
  )
}

export default Hero