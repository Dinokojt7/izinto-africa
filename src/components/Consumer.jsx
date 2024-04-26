import React from 'react'
import ContentImage from '../assets/Laundry.png';
import Sneakers from '../assets/Sneakers.png';
import Linen from '../assets/Linen.png';
import Dryclean from '../assets/Dryclean.png';
import Car from '../assets/Car.png';
import Food from '../assets/Food.png';

function Consumer() {
  return (
    <div className="w-full border-b-2 border-gray-200">
        <div className="text-4xl pb-12 md:pb-16 font-bold text-[#121212]">Laundry</div>
        <div className='w-full pb-12 text-3xl border-b-2 mr-5 border-gray-200 font-bold flex'>
            <div className='pr-4 pt-1 w-2/6 md:w-1/6'>
                <img src={ContentImage} alt='/' style={{ width: "3.5rem" }} />
            </div>
            <div className='w-4/6 md:w-5/6'>
                <div className='font-bold pb-2 text-xl text-[#121212d8]'>Essentials</div>
                <div className='font-light text-xs font-sans text-[#000000]'>Wash your regular essential clothes from a click of a button.</div>
            </div>
          </div>
          <div className='w-full pb-12 pt-8 text-3xl border-b-2 border-gray-200 font-bold flex'>
            <div className='pr-4 pt-1 w-2/6 md:w-1/6'>
                <img src={Sneakers} alt='/' style={{ width: "3.5rem" }} />
            </div>
            <div className='w-4/6 md:w-5/6'>
                <div className='font-bold pb-2 text-xl text-[#121212d8]'>Wash Sneakers</div>
                <div className='font-light text-xs font-sans text-[#000000]'>Click collect and let us do the rest.</div>
            </div>
          </div>
          <div className='w-full pb-12 pt-8 text-3xl border-b-2 border-gray-200 font-bold flex'>
            <div className='pr-4 pt-1 w-2/6 md:w-1/6'>
                <img src={Linen} alt='/' style={{ width: "3.5rem" }} />
            </div>
            <div className='w-4/6 md:w-5/6'>
                <div className='font-bold pb-2 text-xl text-[#121212d8]'>Blankets and Linen</div>
                <div className='font-light text-xs font-sans text-[#000000]'>Wash blankets, all linen, and curtains.</div>
            </div>
          </div>
          <div className='w-full pb-12 pt-8 text-3xl border-b-2 border-gray-200 font-bold flex'>
            <div className='pr-4 pt-1 w-2/6 md:w-1/6'>
                <img src={Dryclean} alt='/' style={{ width: "3.5rem" }} />
            </div>
            <div className='w-4/6 md:w-5/6'>
                <div className='font-bold pb-2 text-xl text-[#121212d8]'>Dry Clean and Leather Care</div>
                <div className='font-light text-xs font-sans text-[#000000]'>Utilise a network of experienced dry cleaning experts.</div>
            </div>
          </div>
          <div className="mt-10 text-4xl pb-12 md:pb-16 font-bold text-[#121212]">Mobile Car Wash</div>
        <div className='w-full pb-12 text-3xl border-b-2 border-gray-200 font-bold flex'>
            <div className='pr-4 pt-1 w-2/6 md:w-1/6'>
                <img src={Car} alt='/' style={{ width: "3.5rem" }} />
            </div>
            <div className='w-4/6 md:w-5/6'>
                <div className='font-bold pb-2 text-xl text-[#121212d8]'>Car Wash</div>
                <div className=' font-light text-xs font-sans text-[#000000]'>Book a team of mobile car wash specialists
                 at your convenience.</div>
            </div>
          </div>
          <div className="mt-10 text-4xl pb-12 md:pb-16 font-bold text-[#121212]">Deliveries</div>
          <div className='w-full pb-5 pt-8 text-3xl border-gray-200 font-bold flex'>
            <div className='pr-4 pt-1 w-2/6 md:w-1/6'>
                <img src={Food} alt='/' style={{ width: "3rem" }} />
            </div>
            <div className='w-4/6 md:w-5/6'>
                <div className='font-bold pb-2 text-xl text-[#121212d8]'>Food</div>
                <div className='pb-10 font-light text-xs font-sans text-[#000000]'>Have all your cravings delivered to your doorstep.</div>
            </div>
          </div>
    </div>
  )
}

export default Consumer