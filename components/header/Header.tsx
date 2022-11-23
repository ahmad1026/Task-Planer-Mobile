import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between items-center'>
        <img className='w-8' src="/utils/Vector.svg" alt="" />
        <h1 className='text-lg font-bold text-primaryText'>Ahmad</h1>
        <img className='w-8' src="/utils/hamburgerMenu.svg" alt="" />
    </div>
  )
}
