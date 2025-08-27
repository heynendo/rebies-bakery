import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect} from "react"
import RebiesLogo from '../assets/rebies-logo.jpg'
import HamburgerMenu from '../assets/hamburger-menu.png'
import scrollToTop from "../functions/scrollToTop"
import '../styles/header.css'

const linkVariants = {
  hidden: { height: 0, opacity: 0, y: -50 },
  visible: { height: "auto", opacity: 1, y: 0 },
  exit: { height: 5, opacity: 0, y: -50 }
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1, // forward
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1, // reverse order on exit
    }
  }
}

function Header() {
    const [toggle, setToggle] = useState(false)
    const [screenLg, setScreenLg] = useState(window.innerWidth > 640)

    const location = useLocation()
    let currentPage = location.pathname.replace("/", "")
    if (currentPage === '') currentPage = 'home'

    useEffect(() => {
        function handleResize() {
            setScreenLg(window.innerWidth > 640)
            if (window.innerWidth > 640){
                setToggle(false)
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return(
        <header className="flex fixed top-0 left-0 px-8 justify-self-center justify-between sm:justify-around w-screen items-center">
            { screenLg ?
                <>
                <Link 
                    onClick={scrollToTop}
                    to='/about' 
                    className={currentPage === "about" ? "underline decoration-[#B50030] decoration-4" : "underline decoration-[#B5003000] decoration-4"}
                >About</Link>
                <Link 
                    onClick={scrollToTop}
                    to='/menu'
                    className={currentPage === "menu" ? "underline decoration-[#B50030] decoration-4" : "underline decoration-[#B5003000] decoration-4"}    
                >Menu</Link>
                <Link to='/' onClick={scrollToTop}><img src={RebiesLogo}/></Link>
                <Link 
                    onClick={scrollToTop}
                    to='contact'
                    className={currentPage === "contact" ? "underline decoration-[#B50030] decoration-4" : "underline decoration-[#B5003000] decoration-4"}    
                >Contact</Link>
                <a href="https://www.facebook.com/profile.php?id=61573868559765" target="_blank">Facebook</a>
                </>
                :
                <>
                <Link onClick={scrollToTop} to='/'><img src={RebiesLogo}/></Link>
                <div className="mobile-menu flex justify-between fixed right-6">
                    <h3 onClick={scrollToTop}>{currentPage}</h3>
                    <img 
                    className="hamburger-menu" 
                    src={HamburgerMenu}
                    onClick={() => setToggle(x => !x)}    
                    />
                </div>
                </>
            }
            <AnimatePresence>
            {toggle && 
                <motion.div
                    className="dropdown fixed right-0 top-20 flex flex-col space-y-1"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={containerVariants}
                    onClick={() => setToggle(false)}
                >
                    {currentPage !== 'home' && (
                        <motion.div variants={linkVariants}>
                            <Link onClick={scrollToTop} to='/'>Home</Link>
                        </motion.div>
                    )}
                    {currentPage !== 'about' && (
                        <motion.div variants={linkVariants}>
                            <Link onClick={scrollToTop} to='/about'>About</Link>
                        </ motion.div>
                    )}
                    {currentPage !== 'menu' && (
                        <motion.div variants={linkVariants}>
                            <Link onClick={scrollToTop} to='/menu'>Menu</Link>
                        </ motion.div>
                    )}
                    {currentPage !== 'contact' && (
                        <motion.div variants={linkVariants}>
                            <Link onClick={scrollToTop} to='contact'>Contact</Link>
                        </ motion.div>
                    )}
                    <motion.div variants={linkVariants}>
                        <a href="https://www.facebook.com/profile.php?id=61573868559765" target="_blank">Facebook</a>
                    </motion.div>
                </motion.div>
            }
            </AnimatePresence>
        </header>
    )
}

export default Header