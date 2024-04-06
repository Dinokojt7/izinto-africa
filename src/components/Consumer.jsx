import React from 'react'
import ContentImage from '../assets/Laundry.png';
import Sneakers from '../assets/Sneakers.png';
import Linen from '../assets/Linen.png';
import Dryclean from '../assets/Dryclean.png';
import Car from '../assets/Car.png';
import Food from '../assets/Food.png';

function Consumer() {
  return (
    <div>
        <div className="text-4xl pb-16 font-bold text-gray-800">Laundry</div>
        <div className='w-full pb-12 text-3xl border-b-2 border-gray-200 font-bold flex'>
            <div className='pr-7 pt-1'>
                <img src={ContentImage} alt='/' style={{ width: "3rem" }} />
            </div>
            <div className=''>
                <div className='font-bold pb-2 text-xl text-gray-700'>Essentials</div>
                <div className=' text-gray-800 font-light text-sm'>Wash your regular essential clothes from a click of a button.</div>
            </div>
          </div>
          <div className='w-full pb-12 pt-8 text-3xl border-b-2 border-gray-200 font-bold flex'>
            <div className='pr-7 pt-1'>
                <img src={Sneakers} alt='/' style={{ width: "3rem" }} />
            </div>
            <div className=''>
                <div className='font-bold pb-2 text-xl text-gray-700'>Wash Sneakers</div>
                <div className=' text-gray-800 font-light text-sm'>Click collect and let us do the rest.</div>
            </div>
          </div>
          <div className='w-full pb-12 pt-8 text-3xl border-b-2 border-gray-200 font-bold flex'>
            <div className='pr-7 pt-1'>
                <img src={Linen} alt='/' style={{ width: "3rem" }} />
            </div>
            <div className=''>
                <div className='font-bold pb-2 text-xl text-gray-700'>Blankets and Linen</div>
                <div className=' text-gray-800 font-light text-sm'>Wash blankets, all linen, and curtains.</div>
            </div>
          </div>
          <div className='w-full pb-12 pt-8 text-3xl border-b-2 border-gray-200 font-bold flex'>
            <div className='pr-7 pt-1'>
                <img src={Dryclean} alt='/' style={{ width: "3rem" }} />
            </div>
            <div className=''>
                <div className='font-bold pb-2 text-xl text-gray-700'>Dry Clean and Leather Care</div>
                <div className=' text-gray-800 font-light text-sm'>Utilise a network of experienced dry cleaning experts.</div>
            </div>
          </div>
          <div className="text-4xl pb-16 font-bold pt-8 text-gray-800">Mobile Car Wash</div>
        <div className='w-full pb-12 text-3xl border-b-2 border-gray-200 font-bold flex'>
            <div className='pr-7 pt-1'>
                <img src={Car} alt='/' style={{ width: "3rem" }} />
            </div>
            <div className=''>
                <div className='font-bold pb-2 text-xl text-gray-700'>Car Wash</div>
                <div className=' text-gray-800 font-light text-sm'>Book a team of mobile car wash specialists
                 at your convenience.</div>
            </div>
          </div>
          <div className="text-4xl pb-6 font-bold pt-8 text-gray-800">Deliveries</div>
          <div className='w-full pb-5 pt-8 text-3xl border-gray-200 font-bold flex'>
            <div className='pr-7 pt-1'>
                <img src={Food} alt='/' style={{ width: "3rem" }} />
            </div>
            <div className=''>
                <div className='font-bold pb-2 text-xl text-gray-700'>Food</div>
                <div className=' text-gray-800 font-light text-sm'>Have all your cravings delivered to your doorstep.</div>
            </div>
          </div>
    </div>
  )
}

export default Consumer