/*import { useState, useEffect } from "react"
import { motion, AnimatePresence} from "framer-motion"
import '../styles/hero-banner.css'

const images = [
    "/src/assets/heroBanner/img1.png",
    "/src/assets/heroBanner/img2.png",
    "/src/assets/heroBanner/img3.png",
    "/src/assets/heroBanner/img4.png",
    "/src/assets/heroBanner/img5.png"
]

function HeroBanner(){
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    },[])

    return(
        <div 
            className="hero-banner" 
            style={{ backgroundImage: `url(${images[index]})`}}
        >
            <span>you dream it...</span>
            <span>we can bake it!</span>
        </div>
    )
}

export default HeroBanner*/

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import "../styles/hero-banner.css"

const images = [
  "/src/assets/heroBanner/img1.png",
  "/src/assets/heroBanner/img2.png",
  "/src/assets/heroBanner/img3.png",
  "/src/assets/heroBanner/img4.png",
  "/src/assets/heroBanner/img5.png"
]

function HeroBanner() {
  const [index, setIndex] = useState(0)
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
      setToggle((prev) => !prev)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = images[index]
  const prevImage = images[index === 0 ? images.length - 1 : index - 1]

  return (
    <div className="hero-banner">
      <motion.div
        className="hero-image"
        style={{ backgroundImage: `url(${toggle ? nextImage : prevImage})` }}
        initial={{ opacity: toggle ? 0 : 1 }}
        animate={{ opacity: toggle ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="hero-image"
        style={{ backgroundImage: `url(${toggle ? prevImage : nextImage})` }}
        initial={{ opacity: toggle ? 1 : 0 }}
        animate={{ opacity: toggle ? 0 : 1 }}
        transition={{ duration: 1.5 }}
      />
      <span>you dream it...</span>
      <span>we can bake it!</span>
    </div>
  )
}

export default HeroBanner
