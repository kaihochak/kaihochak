import React from 'react';

import img1 from "../assets/portfolio-img1.png";
// import img2 from "../assets/portfolio-img2.png";
// import img3 from "../assets/portfolio-img3.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section className='section  h-screen ' id='work'>
      <div className='container m-auto px-10 py-10
                          lg:px-20 lg:py-10 '>

        <div className='flex flex-col gap-x-10'>

          {/* title */}
          <motion.div 
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='text-center gap-y-12'
          >
            <h2 className='h2 lg:pb-5 uppercase text-accent text-[20px] lg:text-[25px]'>
              My Latest Projects
            </h2>
          </motion.div>

          {/* Images */}

          <div className='grid lg:grid-cols-2 gap-4 lg:gap-10 content-start' >

                      
            {/* work 1 */}
            <motion.div 
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl' >
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img 
                className='group-hover:scale-125 transition-all duration-500'
                src={img1} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Project Title</span>
              </div>
            </motion.div>
                
            {/* work 2 */}
            <motion.div 
              variants={fadeIn('left', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl' >

              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img 
                className='group-hover:scale-125 transition-all duration-500'
                src={img1} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Project Title</span>
              </div>
            </motion.div>

            {/* work 1 */}
            <motion.div 
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl' >

              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img 
                className='group-hover:scale-125 transition-all duration-500'
                src={img1} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Project Title</span>
              </div>

            </motion.div>
          </div >
        </div>
      </div>
    </section>
  );
};

export default Work;
