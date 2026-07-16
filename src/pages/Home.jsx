import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import marieHeadshot from '../assets/marie-headshot.png'
import cookiesImg from "../assets/cookies.jpg"
import cakeImg from "../assets/home-cake.jpeg"
import facebookLogo from "../assets/facebook-logo.png"
import HeroBanner from "../components/HeroBanner"
import scrollToTop from "../functions/scrollToTop"
import '../styles/home.css'
import BottomBanner from '../components/BottomBanner'
import Popout from '../components/Popout'
import FarmersMarketFlyer from '../assets/farmersMarketFlyer.jpg'
import usePreventScroll from '../functions/usePreventScroll'
import SpecialEvents from '../components/SpecialEvents'

function Home(){

    const [showBanner, setShowBanner] = useState(true)
    const [showPopout, setShowPopout] = useState(false)

    useEffect(()=>{
        scrollToTop()
    },[])

    usePreventScroll(showPopout)

    return(
        <div className="home">
            <HeroBanner />

            <SpecialEvents />

            <div className='contacts'>
                <Link to='/contact' onClick={scrollToTop} className="basic-button">schedule now</Link>
                <button className="basic-button phone-number"
                    onClick={() => window.location.href = "tel:7082594314"}
                >call today! 708-259-4314</button>
            </div>
            <BottomBanner 
                content={
                    <>
                    <p>visit us at the Oak Forest Farmer's Market!</p>
                    <button onClick={() => setShowPopout(true)}>learn more</button>
                    </>
                }
                showBanner={showBanner}
                setShowBanner={setShowBanner}
            />
            <Popout
                showPopout={showPopout}
                setShowPopout={setShowPopout}
            >
                <img 
                    src={FarmersMarketFlyer}
                    className='farmers-market-flyer'
                    loading='lazy'
                />
            </Popout>
            <div className="card-container card-about">
                <div className='card'></div>
                <img src={marieHeadshot}  loading='lazy'/>
                <p>My name is Marie Biedrzycki, I am a passionate baker spreading joy one sweet treat at a time. Nothing makes me happier than making others smile with my creations! I am located in Oak Forest, Illinois.</p>
                <Link to='/about' onClick={scrollToTop} className='basic-button'>learn more</Link>
            </div>

            <div className="card-container card-cookies">
                <div className='card'></div>
                <img src={cookiesImg} loading='lazy'/>
                <h3>Premium Quality Ingredients!</h3>
                <p>Our homemade cookies use the same quality ingredients you'd reach for at home. No fancy additives - just good wholesome ingredients that make every cookie taste just like home. No matter what, we use ingredients you can recognize - and pronounce.</p>
            </div>

            <div className="card-container card-cakes">
                <div className='card'></div>
                <img src={cakeImg} loading='lazy'/>
                <p>Every cake is made to tell your story. From elegant tiered wedding cakes with custom designs to fun, themed birthday cakes featuring creative decorations, each cake is as unique as your celebration. Click below to see more options.</p>
                <Link to='/about' onClick={scrollToTop} className='basic-button'>see others</Link>
            </div>

            <div className="card-container card-facebook">
                <div className='card'></div>
                <img src={facebookLogo} loading='lazy'/>
                <p>Follow ReBie's Bakery on Facebook! Stay up to date on specials and learn more about the business</p>
                <a href="https://www.facebook.com/profile.php?id=61573868559765" target="_blank" className='basic-button'>go to page</a>
            </div>
        </div>
    )
}

export default Home