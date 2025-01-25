import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi there, welcome to my portfolio! <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-white">Crafting solutions that leave a mark</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className='w-full h-full'>
          <PerspectiveCamera makeDefault position={[0,0,30]}/>
        </Canvas>
      </div>

    </section>
  )
}

export default Hero