import React from 'react'
import Wash from '../assets/Wash.png';
import Machine from '../assets/Machine.png';
import Takeaway from '../assets/Takeaway.png';

function Locations() {
  return (
    <div>
          <div className="text-4xl pb-16 font-bold pt-8 text-gray-800">See all locations with different services</div>
          <div className='w-full pb-12 text-3xl border-b-2 border-gray-200 font-bold flex'>
            <div className='pr-7 pt-1'>
                <img src={Machine} alt='/' style={{ width: "3rem" }} />
            </div>
            <div className=''>
                <div className='font-bold pb-2 text-xl text-gray-700'>Laundry services</div>
                <div className=' text-gray-800 font-light text-sm'>Access laundry pickup and delivery throughout Johannesburg North, Midrand, Sandton CBD, Central Johannesburg, and Johannesburg South.</div>
            </div>
          </div>
          <div className='w-full pb-12 pt-8 text-3xl border-b-2 border-gray-200 font-bold flex'>
            <div className='pr-7 pt-1'>
                <img src={Takeaway} alt='/' style={{ width: "3rem" }} />
            </div>
            <div className=''>
                <div className='font-bold pb-2 text-xl text-gray-700'>Lunchtime food delivery</div>
                <div className=' text-gray-800 font-light text-sm'>Get your lunch delivered from your favourite merchants, at WoodMead, WaterFall, and Melrose.</div>
            </div>
          </div>
          <div className='w-full pb-5 pt-8 text-3xl border-gray-200 font-bold flex'>
            <div className='pr-7 pt-1'>
                <img src={Wash} alt='/' style={{ width: "3rem" }} />
            </div>
            <div className=''>
                <div className='font-bold pb-2 text-xl text-gray-700'>Car wash services</div>
                <div className=' text-gray-800 font-light text-sm'>Access our exclusive car wash services in Centurion, Johannesburg, and Vaal.</div>
            </div>
          </div>
    </div>
  )
}

export default Locations