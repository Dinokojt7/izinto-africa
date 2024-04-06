import React from 'react'
import Network from '../assets/Merchant.png';

function Merchant() {
  return (
    <div>
          <div className="text-4xl pb-6 font-bold pt-8 text-gray-800">Grow your business</div>
          <div className='w-full pb-5 pt-8 text-3xl border-gray-200 font-bold flex'>
            <div className='pr-7 pt-1'>
                <img src={Network} alt='/' style={{ width: "3rem" }} />
            </div>
            <div className=''>
                <div className='font-bold pb-2 text-xl text-gray-700'>Sell with us</div>
                <div className=' text-gray-800 font-light text-sm'>Tap into our network of food shoppers to deliver your orders.</div>
            </div>
          </div>
    </div>
  )
}

export default Merchant