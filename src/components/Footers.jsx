import React, { useState, useEffect } from 'react';
import Logo from '../assets/artwork.png';
import X from '../assets/X.png';
import Instagram from '../assets/Instagram.png';


const Footers = () => {
  return (
    <div className='bg-[#EEF5FF] pb-20 h-96'>
        <div className='mt-20 pt-8 pl-6 h-96'>
            <img src={Logo} alt='/' style={{ width: "8rem" }} />
            <div className='pt-2 text-lg font-bold text-zinc-500'>
                Everything On Demand
            </div>
            <div className='pt-5 text-sm font-semibold text-zinc-500'>
            17 Autumn Rd,
            </div>
            <div className=' text-sm font-semibold text-zinc-500'>
            Edenburg, Rivonia 2128
            </div>
            <div className='pt-6 text-sm font-bold text-zinc-500'>
            Follow us and keep updated!
            </div>
            <div className='flex gap-2 pt-2'>
                <img src={Instagram} alt='/' style={{ width: "1.3rem", height: "1.3rem" }}  />
                <img src={X} alt='/' style={{ width: "1.3rem", height: "1.3rem" }} />
            </div>
        </div>
    </div>
  )
}

export default Footers;


