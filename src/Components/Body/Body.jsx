import React from 'react'
import Navbar from '../Navbar/Navbar'

const Body = () => {
  return (
    <>
      <header>
        <Navbar/>
        <main>
            <div className="text">
                <div>
                    <h1>All Your <span>Artwork</span> <br/> in One Place</h1>
                    <p>We have put together a collection of art that depicts <br/> character, style and creativity.</p>
                    <div className="galleryBtn">see gallery</div>
                </div>
                <div className="imgShadow">
                    <img src="/Img/shadowImg.png" alt="" />
                    <div className='artTitle'><small>nulvolsa, cloudy.</small><i>1859</i></div>
                </div>
            </div>
            <h1 className='art-text'>Here are some art pieces</h1>
            <div className="img">
                <div className="img1">
                    <img src="/Img/img1.png" alt="" />
                </div>
                <div className="img2">
                    <img src="/Img/img2.png" alt="" />
                </div>
                <div className="img3">
                    <img src="/Img/img3.png" alt="" />
                </div>
                <div className="img4">
                    <img src="/Img/img4.png" alt="" />
                </div>
            <div className="mini-text">
                <h1>Modern Art</h1>
                <p>Modern art includes artistic work produced periods ranging from 1860s to 1970s and denotes key style and philosophies of art produced during that era</p>
            </div>
            </div>
        </main>
      </header>
    </>
  )
}

export default Body
