import React from 'react'
import Wash from '../assets/Wash.png';
import Machine from '../assets/Machine.png';
import Takeaway from '../assets/Takeaway.png';

function Locations() {
  return (
    <div className="w-full border-b-2 border-gray-200">
          <div className="text-4xl pb-10 font-bold pt-8  text-[#121212]">See all locations with different services</div>
          <div className='w-full pb-12 text-3xl border-b-2 border-gray-200 font-bold flex'>
            <div className='pr-4 pt-1 w-2/6 md:w-1/6'>
                <img src={Machine} alt='/' style={{ width: "3.5rem" }} />
            </div>
            <div className='w-4/6 md:w-5/6'>
                <div className='font-bold pb-2 text-xl text-[#121212d8]'>Laundry services</div>
                <div className=' font-light text-xs font-sans text-[#000000]'>Access laundry pickup and delivery throughout Johannesburg North, Midrand, Sandton CBD, Central Johannesburg, and Johannesburg South.</div>
            </div>
          </div>
          <div className='w-full pb-12 pt-8 text-3xl border-b-2 border-gray-200 font-bold flex'>
            <div className='pr-4 pt-1 w-2/6 md:w-1/6'>
                <img src={Takeaway} alt='/' style={{ width: "3.5rem" }} />
            </div>
            <div className='w-4/6 md:w-5/6'>
                <div className='font-bold pb-2 text-xl text-[#121212d8]'>Lunchtime food delivery</div>
                <div className=' font-light text-xs font-sans text-[#000000]'>Get your lunch delivered from your favourite merchants, at WoodMead, WaterFall, and Melrose.</div>
            </div>
          </div>
          <div className='w-full pb-5 pt-8 text-3xl border-gray-200 font-bold flex'>
            <div className='pr-4 pt-1 w-2/6 md:w-1/6'>
                <img src={Wash} alt='/' style={{ width: "3.5rem" }} />
            </div>
            <div className='w-4/6 md:w-5/6'>
                <div className='font-bold pb-2 text-xl text-[#121212d8]'>Car wash services</div>
                <div className=' font-light text-xs pb-10 font-sans text-[#000000]'>Access our exclusive car wash services in Centurion, Johannesburg, and Vaal.</div>
            </div>
          </div>
    </div>
  )
}

export default Locations