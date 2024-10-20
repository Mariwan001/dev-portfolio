import React, { useState } from 'react'
import { ALL_LINKS } from '../constants'
import { RiCloseFill, RiMenu3Fill } from '@remixicon/react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className='fixed top-0 left-0 w-full z-50'>
      <div className='flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg'>
        <div className='text-white font-semibold text-lg uppercase'>
          <a href='/'>Mariwan Iraj</a>
        </div>

        <div className='hidden md:flex space-x-8'>
          {ALL_LINKS.map((link, index) => (
            <a href={link.href} key={index} className='text-white hover:text-stone-400 transition duration-300'>
              {link.label}
            </a>
          ))}
        </div>

        <div className='md:hidden'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-white focus:outline-none'
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <RiCloseFill className='w-6 h-6' />
            ) : (
              <RiMenu3Fill className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>

      {/* Full-Screen Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-stone-950/90 backdrop-blur-lg flex flex-col justify-center items-center space-y-6 transition-all duration-700 ${
          menuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 translate-y-4 invisible'
        }`}
      >
        {/* Close Icon inside Full-Screen Menu */}
        <button
          onClick={() => setMenuOpen(false)}
          className='absolute top-4 right-4 text-white'
          aria-label='Close menu'
        >
          <RiCloseFill className='w-8 h-8' />
        </button>

        {/* Links */}
        {ALL_LINKS.map((link, index) => (
          <a
            href={link.href}
            className='text-white text-2xl font-semibold hover:text-stone-400 transition duration-300'
            onClick={handleLinkClick}
            key={index}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
