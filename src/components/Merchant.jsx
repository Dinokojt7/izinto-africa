import React from 'react'
import Network from '../assets/Merchant.png';

function Merchant() {
  return (
    <div className="w-full border-b-2 border-gray-200">
          <div className="text-4xl pb-6 font-bold pt-8 text-[#121212]">Grow your business</div>
          <div className='w-full pb-5 pt-8 text-3xl border-gray-200 font-bold flex'>
            <div className='pr-4 pt-1 w-2/6 md:w-1/6'>
                <img src={Network} alt='/' style={{ width: "3.5rem" }} />
            </div>
            <div className='w-4/6 md:w-5/6'>
                <div className='font-bold pb-2 text-xl text-[#121212d8]'>Sell with us</div>
                <div className=' pb-10 font-light text-xs font-sans text-[#000000]'>Tap into our network of food shoppers to deliver your orders.</div>
            </div>
          </div>
    </div>
  )
}

export default Merchant