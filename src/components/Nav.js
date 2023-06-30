import React from 'react';
import {BiCoffee, BiHomeAlt2} from 'react-icons/bi';
import {MdOutlineComputer, MdOutlineRamenDining} from 'react-icons/md';
import {Link} from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed my-64 right-2 lg:right-5 overflow-hidden z-50'>
      <div className='container h-full flex flex-col max-w-xs mx-auto px-0
             text-white/50 rounded-full justify-between items-center'>

        <Link 
          to='home' 
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-900}
          duration={500}
          className='cursor-pointer m-3 w-[60px] h-[60px] flex items-center justify-center'>
          <BiHomeAlt2 />
        </Link>
        
        <Link 
          to='about' 
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-900}
          duration={500}
          className='cursor-pointer m-3 w-[60px] h-[60px] flex items-center justify-center'>
          <BiCoffee />
        </Link>

        <Link 
          to='services' 
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-70}
          duration={500}
          className='cursor-pointer m-3 w-[60px] h-[60px] flex items-center justify-center'>
          <MdOutlineComputer />
        </Link>
        
        <Link 
          to='work' 
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-900}
          duration={500}
          className='cursor-pointer m-3 w-[60px] h-[60px] flex items-center justify-center'>
          <MdOutlineRamenDining />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
