import React from 'react'
import { TbHomeEco } from 'react-icons/tb'
import '../styles/header.css'

export default function Header() {
  return (
    <div className='header'>
        <TbHomeEco className='headericon'/>
        <h1>SmartHome</h1>
    </div>
  )
}
