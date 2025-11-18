import PageTitle from '../components/PageTitle'
import marieHeadshot from '../assets/marie-headshot.png'
import '../styles/about.css'
import ImageGallery from '../components/ImageGallery'
import { useEffect } from 'react'
import scrollToTop from '../functions/scrollToTop'

function About(){
    useEffect(()=>{
        scrollToTop()
    })

    return(
        <div className="about">
            <PageTitle content="About Me" />
            <div className='card-container-about'>
                <div className='card'></div>
                <img src={marieHeadshot} />
                <p>Running a small baked goods business has allowed me to turn my love for baking into something people truly enjoy. Every day is a mix of creativity and hard work as I craft delicious treats that bring a smile to my customers. Though the hours can be long, the satisfaction of seeing others appreciate my work makes it all worthwhile.</p>
            </div>
            <ImageGallery sectionKey="customcakes"/>
            <ImageGallery sectionKey="cupcakes"/>
            <ImageGallery sectionKey="specialdesserts"/>
            <ImageGallery sectionKey="diapercakes"/>
        </div>
    )
}

export default About