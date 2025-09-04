import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import "../styles/hero-banner.css"
import img1 from "../assets/heroBanner/img1.png"
import img2 from "../assets/heroBanner/img2.png"
import img3 from "../assets/heroBanner/img3.png"
import img4 from "../assets/heroBanner/img4.png"
import img5 from "../assets/heroBanner/img5.png"

const images = [img1, img2, img3, img4, img5]

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

  useEffect(() => {
        images.forEach(src => {
          const link = document.createElement("link")
          link.rel = "preload"
          link.as = "image"
          link.href = src
          document.head.appendChild(link)
        })
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
