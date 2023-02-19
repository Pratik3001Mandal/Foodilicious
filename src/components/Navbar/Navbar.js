import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar fixed-top bg-body-tertiary recipeTheme">
            <div className="container-fluid">
            <img className='image' src="./../FoodIcon.png" />
            </div>
        </nav>
    </div>
  )
}
