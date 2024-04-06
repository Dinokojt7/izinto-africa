import React, { useState, useEffect } from 'react';
import Fresh from '../assets/Fresh.png';
import Sneaker from '../assets/Sneaker.png';
import Izinto from '../assets/Izinto.png';
import EasyWash from '../assets/EasyWash.png';

function Newsroom() {
    const [media, setMedia] = useState([]);

    // useEffect(() => {
    //   // Fetch Instagram media using access token
    //   const fetchInstagramMedia = async () => {
    //     try {
    //       // Make API request to fetch Instagram media
    //       const response = await fetch(
    //         `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=${YOUR_ACCESS_TOKEN}`
    //       );
    //       const data = await response.json();
    //       setMedia(data.data); // Update state with fetched media
    //     } catch (error) {
    //       console.error('Error fetching Instagram media:', error);
    //     }
    //   };
  
    //   fetchInstagramMedia(); // Call the function to fetch media
    // }, []


  return (
    <div className='pb-36 font-bold border-t-2 border-gray-200 relative'>
        <div className="text-4xl pt-16 pb-10 text-gray-800 pl-32 pr-32">Instagram</div>
        {/* <div className="grid grid-cols-3 gap-4"> */}
        {/* Render Instagram media */}
        {/* {media.map((item) => ( */}
            {/* <div key={item.id}> */}
            {/* Render images or videos */}
            {/* {item.media_type === 'IMAGE' && ( */}
                {/* <img src={item.media_url} alt="Instagram Post" /> */}
            {/* )} */}
            {/* {item.media_type === 'VIDEO' && ( */}
                {/* <video controls> */}
                {/* <source src={item.media_url} type="video/mp4" /> */}
                {/* </video> */}
            {/* )} */}
            {/* Add more media types as needed */}
            {/* </div> */}
        {/* ) */}
        {/* ) */}
        {/* } */}
        {/* </div> */}
        <div className='pl-32 pr-32'>
            <div className="grid grid-cols-4 gap-2">
                <div className='w-40 h-48 py-auto bg-[rgb(232, 232, 232,0.8)] my-auto'><img src={Izinto} alt="Image 1" className="mx-auto  my-auto w-40 " /></div>
                <div className='w-40 h-48 bg-[#797268] py-auto my-auto'><img src={Fresh} alt="Image 1" className="mx-auto  my-auto w-40 " /></div>
                <div className='w-40 h-48 bg-[#797268] py-auto my-auto'><img src={Sneaker} alt="Image 1" className="  my-auto w-64 " /></div>
                <div className='w-40 h-48 bg-[#797268] py-auto my-auto'><img src={EasyWash} alt="Image 1" className="mx-auto  my-auto w-40 " /></div>
            </div>
        </div>
    </div>

  )
}

export default Newsroom