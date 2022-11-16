import React from 'react'
import './Navbar.css'
import AIESEC_logo from '../logo/AIESEC_logo.png'
import ACC_logo from '../logo/ACC_logo.png'
import BAA_logo from '../logo/BAA_logo.png'
import TuneProtect_logo from '../logo/TuneProtect_logo.png'
import YSF_logo from '../logo/YSF_logo.png'

const navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-start_logo'>
        <img src={AIESEC_logo} alt="AIESEC Logo"/>
        <img src={YSF_logo} alt="Youth Speak Forum Logo"/>
      </div>
      <div className='navbar-text'>
        <span>AIESEC IN UM</span>
        <br></br>
        <span>Business Case Challenge</span>
        <br></br>
        <span>Case Study Reveal</span>
      </div>
      <div className='navbar-end_logo'>
        <img src={TuneProtect_logo} alt=""/>
        <img src={BAA_logo} alt="" />
        <img src={ACC_logo} alt="" />
      </div>
    </div>
  )
}

export default navbar