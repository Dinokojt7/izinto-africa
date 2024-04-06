import React from 'react'
import Dot from '../assets/dot.png';

function Credits() {
  return (
    <div className='bg-[#3D3B40] md:grid md:grid-cols-2 h-20 font-bold my-auto pt-4 md:pt-8 pl-6'>
       <div className='gap-3 flex mb-3'>
       <div className=' text-stone-200'>Terms and Policies</div>
       <div className='pt-3'>
            <img src={Dot} alt='/' style={{ width: "0.3rem", height: "0.3rem" }} />
       </div>
       <div className=' text-stone-100'>Privacy Notice</div>
       </div>
       <div className='gap-3 justify-center md:block flex'>
       <div className=' text-stone-400'>© Izinto 2020 - 2024</div>
       {/* <div className='pt-3'>
            <img src={Dot} alt='/' style={{ width: "0.3rem", height: "0.3rem" }} />
       </div> */}
       </div>
        
    </div>
  )
}

export default Credits