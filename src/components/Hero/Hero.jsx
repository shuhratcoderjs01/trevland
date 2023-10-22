import React from 'react'
import Button from '../Button/Button'

import hero__bg from "../../assets/img/hero_bg.jpg"

function Hero() {
  return (
    <>
    
    <div className='container xl:pt-48 lg:pt-44 md:pt-32 pt-24 '>

      <div className=' max-w-[70.5%] lg:max-w-[50.5%]'>
        <h1 className=' text-6xl text-white font-bold font-title'>Railtrips To Here, <br /> There And Everywhere!</h1>
            <p className='text-white text-lg opacity-60 max-w-[420px] mt-8 mb-10'>We all wish to start our year the best way possible and also according to a common belief if you have a great start to your.</p>
            <Button>Explore more</Button>
        </div>
    </div>
     <div className=' top-0 left-0 absolute w-screen h-[700px] lg:h-[900px] bg-black -z-30 overflow-x-hidden'>
     <img src={hero__bg} alt="" className=' w-full h-full ' />
 </div>
 
 </>
  )
}

export default Hero