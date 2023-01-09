import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { MdWorkOutline } from 'react-icons/md';
import './nav.css';


const Nav = (props) => {
  return (
    <nav>
      <a href='#' onClick={()=> props.setactiveNav('#')} className={props.activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> props.setactiveNav('#about')} className={props.activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=> props.setactiveNav('#experience')} className={props.activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#service' onClick={()=> props.setactiveNav('#service')} className={props.activeNav === '#service' ? 'active' : ''}><MdWorkOutline/></a>
      <a href='#contact' onClick={()=> props.setactiveNav('#contact')} className={props.activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav