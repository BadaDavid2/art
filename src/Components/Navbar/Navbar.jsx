import React from 'react'
const Navbar = () => {
  return (
    <>
      <nav>
        <div className='links'>
            <div className="logo">art<span>biz</span></div>
            <ul>
                <li className='active'>Overview</li>
                <li>Articles</li>
                <li>Collection</li>
                <li>About Us</li>
            </ul>
        </div>
        <div className='search'>
            <img src="Img/searchIcon.png" className='searchIcon' alt="" />
            <div className="galleryBtn">see gallery</div>
        </div>
      <hr />
      </nav>
    </>
  )
}

export default Navbar
