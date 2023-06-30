import React from 'react';
import { BsGithub, BsMusicPlayerFill, BsFillImageFill, BsCloudDownload} from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const resumes = [
  {
    name: 'Developer',
    description: 'A business system analyst and a final year computer science student, currently focused on becoming a developer.',
    button: 'GITHUB',
    link: 'https://github.com/kaihochak', 
  },
  {
    name: 'Photography',
    description: 'A passionately street and travel photographer.',
    button: 'GALLERY',
    link: 'https://adobe.ly/3NyiU06', 
  },
  {
    name: 'Music',
    description: 'A guitarist and music producer, working on indie and post-rock music projects.',
    button: 'LISTEN',
    link: 'https://linktr.ee/chanisswimming', 
  },
];

const icons = [
  <BsGithub className='text-accent lg:text-3xl lg:w-20'/>,
  <BsFillImageFill className='text-accent  lg:text-3xl lg:w-20'/>,
  <BsMusicPlayerFill className='text-accent lg:text-3xl lg:w-20'/>,
];

const cv = 'https://drive.google.com/file/d/1rXp-_qY56Gb6cmWwnIqM5N2J_iFAvRe5/view';

const Resume = () => {
  return (
    <section className='section h-screen' id='resume'>

      <div className='container mx-auto px-4 py-5
                      lg:py-10  lg:px-20'>

        <div className='flex flex-col gap-y-5 
                        lg:items-center lg:py-5'>


          {/* resumes */}
          <motion.div             
            variants={fadeIn('down', 0.3)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex flex-row justify-center
                        lg:my-auto leading-none'
          >
            <div >
              {/* Title */}
              <h2 className='uppercase text-center text-accent pb-5 lg:pb-0 text-[20px] lg:text-[25px]'>My Resume</h2>

              {/* items */}
              {resumes.map((resume, index) => {
                const {name, description, button, link} = resume;
                return (

                  // each item
                  <div className='flex flex-col lg:flex-row 
                                  justify-between border-b border-white/20
                                  py-[20px] px-[6px] gap-x-3 gap-y-5
                                  lg:py-[35px] lg:px-[25px] lg:gap-x-6' key={index}>
                    
                    {/* text box */}
                    <div className='px-2 lg:px-3'>
                      <h4 className='text-[18px] tracking-wider font-primary font-normal mb-3
                                    lg:text-[22px] lg:mb-6'>
                        {name}
                      </h4>
                      <p className='text-[14px] tracking-wider  font-secondary leading-normal
                                    lg:text-[16px] '>
                        {description}
                      </p>
                    </div>
                    
                    {/* buttons */}
                    <div className='flex flex-row lg:flex-col px-2 gap-x-2
                                      lg:m-1 lg: gap-y-3 lg:justify-center lg:items-center'>
                                        
                      <a href={link} target="_blank" className='flex items-center 
                                                                text-[12px] lg:text-lg'>
                        {icons[index]} </a>
                        
                      <a href={link} target="_blank" className='text-accent text-[12px] lg:text-md'>
                        {button}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* button */}
          <motion.div             
            variants={fadeIn('up', 0.5)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex leading-none justify-center pt-3'
          >
            <button className='font-normal text-[15px] lg:text-[20px]'>
              <a href={cv} target="_blank"
                  className='text-accent flex items-center gap-x-2'
                  role='button'>
                    Download CV <BsCloudDownload />
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
