import React from 'react';
import Image from '../assets/avatar.svg';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className='min-h-[95vh] lg:min-h-[95vh] flex items-center' id='home'>
      
      <div className='container mx-auto'>

          <div className='flex-1 text-center font-secondary uppercase py-2 leading-[1.25]'>

            {/* HELLO, I AM Kai */}
            <motion.h1 
              variants={fadeIn('down', 0.3)} 
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className=' text-white font-light tracking-tighter
                        text-[50px] md:text-[70px] lg:text-[90px]' >
              <span>Hi, I'm </span> 
              <span className='text-accent'>Kai</span>
            </motion.h1>
            
            {/* a developer... */}
            <motion.h2 
              variants={fadeIn('up', 0.7)} 
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='font-secondary font-normal 
                          text-[15px] lg:text-[20px]'>

              <span className='text-white'>a </span>
              <TypeAnimation 
                sequence={[
                  "developer", 1200, 
                  "musician", 1200, 
                  "photographer", 1200,
                  "philosophy enthusiast", 1200,
                  "system business analyst", 1200, 
                  "soon-to-be computer science grad", 1200, 
                  "movie lover", 1200,
                ]} 
                speed={50}
                wrapper='span'
                repeat={Infinity}
              />
            </motion.h2>

          </div>
      </div>
    </section>
  );
};

export default Banner;
 