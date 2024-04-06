import React from 'react'
import Deliver from '../assets/Deliver.png';

function Consumer() {
  return (
    <div>
          <div className="text-4xl pb-6 font-bold pt-8 text-gray-800">Earn with Izinto</div>
          <div className='w-full pb-5 pt-8 text-3xl border-gray-200 font-bold flex'>
            <div className='pr-7 pt-1'>
                <img src={Deliver} alt='/' style={{ width: "3rem" }} />
            </div>
            <div className=''>
                <div className='font-bold pb-2 text-xl text-gray-700'>Deliver with us</div>
                <div className=' text-gray-800 font-light text-sm'>Make deliveries and earn extra income.</div>
            </div>
          </div>
    </div>
  )
}

export default Consumer