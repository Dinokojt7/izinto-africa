import React from 'react'
import Dot from '../assets/dot.png';
import { Link } from 'react-router-dom';


function Credits() {
  return (
    <div className='bg-[#3D3B40] md:grid md:grid-cols-2 h-20 font-bold my-auto pt-4 mx-auto md:pt-8 pl-6'>
       <div className='gap-3 flex mb-3 '>
       <Link to="/terms" className=' text-white'>Terms and Policies</Link>
       <div className='pt-3'>
            <img src={Dot} alt='/' style={{ width: "0.3rem", height: "0.3rem" }} />
       </div>
       <div className=' text-white'>Privacy Notice</div>
       </div>
       <div className='gap-3 justify-center md:block flex'>
       <div className=' text-stone-200'>© Izinto 2020 - 2024</div>
       {/* <div className='pt-3'>
            <img src={Dot} alt='/' style={{ width: "0.3rem", height: "0.3rem" }} />
       </div> */}
       </div>
        
    </div>
  )
}

export default Credits