import React, {useState} from 'react';
import { IoCloseSharp } from "react-icons/io5";
import {HiMenuAlt2}  from 'react-icons/hi';
import Logo from '../assets/Artwork.png';


const Navbar = () => {
  const [nav, setNav] = useState(true)
  const [list, setList] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleSubList = () => {
    setList(!list)
  }

  return (
    <div> </div>
  )
}

export default Navbar