import React from 'react'
import './Content.css'
import FlippableCard from '../FlippableCard/FlippableCard'

const Content = () => {
  return (
    <div>
      <div className='row-content'>
        <FlippableCard number="1"/>
        <FlippableCard number="2"/>
        <FlippableCard number="3"/>
        <FlippableCard number="4"/>
      </div>
      <div className='row-content'>
        <FlippableCard number="5"/>
        <FlippableCard number="6"/>
        <FlippableCard number="7"/>
        <FlippableCard number="8"/>
      </div>
      <div className='row-content'>
        <FlippableCard number="9"/>
        <FlippableCard number="10"/>
        <FlippableCard number="11"/>
        <FlippableCard number="12"/>
      </div>
      <div className='row-content'>
        <FlippableCard number="13"/>
        <FlippableCard number="14"/>
        <FlippableCard number="15"/>
        <FlippableCard number="16"/>
      </div>
    </div>
    
  )
}

export default Content