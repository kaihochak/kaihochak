import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {FiMail} from 'react-icons/fi';

const About = () => {

  return (
    <section className='section h-screen' id='about'>

      <div className='container mx-auto px-10 lg:px-20 py-5 lg:py-10 '>
        <div className='flex flex-col gap-y-10 h-[75vh] 
                            lg:flex-row lg:gap-x-15 lg:items-center lg:py-5'>
          
          {/* LEFT: image */}
          <motion.div 
            variants={fadeIn('right', 0.3)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat lg:h-[640px] mix-blend-burn bg-top'>
          </motion.div>

          {/* RIGHT: info */}
          <motion.div
            variants={fadeIn('left', 0.5)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex-1 leading-none px-1'>

            {/* text */}
            <h2 className='h2 uppercase text-accent text-[20px] lg:text-[25px]'>About me</h2>
            <p className='mb-6 tracking-wide text-[15px] 
                              lg:tracking-wider lg:text-[22px] leading-relaxed'> 
                Hey there! I'm a system analyst and soon-to-be computer science grad.
                Currently, I'm diving into web development.
                I love photography, I make music, and I get lost in movies and philosophy. 
                <br/><br/>
                Whether you're searching for a teamplayer on your team, or simply want to explore shared interests, let's Connect and make things happen! 
            </p>
  


            {/* email */}
            <button className='font-normal text-[15px] lg:text-[20px]'>
              <a href='mailto:jacobchakkaiho@gmail.com'
                  className='text-accent flex items-center gap-x-2'
                  role='button'>
                    <FiMail/> Let's Connect!
              </a>
            </button>

          </motion.div>


        </div> 
      </div>
    </section>
  );
};

export default About;
