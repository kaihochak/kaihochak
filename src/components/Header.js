import React from 'react';
import {Link} from 'react-scroll';

const Header = () => {
  return (
    <header className='inset-y-1 leading-[3]'>

        <div className='fixed container flex max-w-full mx-auto px-5
                uppercase text-white/50 justify-between items-center z-50'>
          
          {/* LEFT: KAI CHAK */}
          <div>
            <Link 
              to='home' 
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer text-[16px] lg:text-[25px] font-normal tracking-tightest btn'>
              KAI CHAK
            </Link>
          </div>
          
          {/* RIGHT: buttons */}
          <div>
            <Link 
              to='about' 
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer m-2 text-[16px] lg:text-[25px] font-normal tracking-tightest btn'>
              About
            </Link>

            <Link 
              to='resume' 
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer m-2 text-[16px] lg:text-[25px] font-normal tracking-tightest btn'>
              Resume
            </Link>
            
            <Link 
              to='work' 
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer m-2 text-[16px] lg:text-[25px] font-normal tracking-tightest btn'>
              projects
            </Link>
          </div>
      </div>
    </header> 
  );
};

export default Header;
