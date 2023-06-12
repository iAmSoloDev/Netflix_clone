import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false) 

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 100) {

    //         } else handleShow
    //     })
    //     return () => {
    //         window.removeEventListener("scroll")
    //     } 
    // }, [])

  return (
    <nav className='nav'>
        <img className='nav_logo'
            src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'
            alt='Netflix Logo' 
        />

        <img className='nav_avatar'
            src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.webp'
            alt='Netflix profile Image' 
        />
    </nav>
  )
}

export default Nav