import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import marieHeadshot from '../assets/marie-headshot.png'
import cookiesImg from "../assets/cookies.png"
import cakeImg from "../assets/home-cake.jpeg"
import facebookLogo from "../assets/facebook-logo.png"
import HeroBanner from "../components/HeroBanner"
import scrollToTop from "../functions/scrollToTop"
import '../styles/home.css'

function Home(){

    return(
        <div className="home">
            <HeroBanner />
            <Link to='/contact' onClick={scrollToTop} className="basic-button">schedule now</Link>
            
            <div className="card-container card-about">
                <div className='card'></div>
                <img src={marieHeadshot} />
                <p>My name is Marie Biedrzycki, I am a passionate baker spreading joy one sweet treat at a time. Nothing makes me happier than making others smile with my creations! I am located in Oak Forest, Illinois.</p>
                <Link to='/about' onClick={scrollToTop} className='basic-button'>learn more</Link>
            </div>

            <div className="card-container card-cookies">
                <div className='card'></div>
                <img src={cookiesImg} />
                <h3>Premium Quality Ingredients!</h3>
                <p>Our homemade cookies use the same quality ingredients you'd reach for at home. No fancy additives - just good wholesome ingredients that make every cookie taste just like home. No matter what, we use ingredients you can recognize - and pronounce.</p>
            </div>

            <div className="card-container card-cakes">
                <div className='card'></div>
                <img src={cakeImg} />
                <p>Every cake is made to tell your story. From elegant tiered wedding cakes with custom designs to fun, themed birthday cakes featuring creative decorations, each cake is as unique as your celebration. Click below to see more options.</p>
                <Link to='/about' onClick={scrollToTop} className='basic-button'>see others</Link>
            </div>

            <div className="card-container card-facebook">
                <div className='card'></div>
                <img src={facebookLogo} />
                <p>Follow ReBie's Bakery on Facebook! Stay up to date on specials and learn more about the business</p>
                <a href="https://www.facebook.com/profile.php?id=61573868559765" target="_blank" className='basic-button'>go to page</a>
            </div>
        </div>
    )
}

export default Home