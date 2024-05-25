import React from 'react'
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-col'>
        <Link to="/"><img src={Logo} alt="Logo" width={160} height={32} loading="lazy"></img></Link>
        <nav>
            <ul className='flex flex-col'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>

            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
