import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion'
import './styles/index.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Menu from './pages/Menu'
import Header from './components/Header'
import Footer from './components/Footer'
import MotionWrapper from './functions/MotionWrapper'
import NotFound from './pages/NotFound'
import MenuItem from './pages/MenuItem'

function AppRoutes(){
  const location = useLocation()
  console.log(location.pathname)

  return(
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<MotionWrapper> <Home /> </MotionWrapper>} />
          <Route path="/contact" element={<MotionWrapper> <Contact /> </MotionWrapper>} />
          <Route path="/about" element={<MotionWrapper> <About /> </MotionWrapper>} />
          <Route path="/menu" element={<MotionWrapper> <Menu /> </MotionWrapper>} />
          <Route path="/menu/:id" element={ <MenuItem />} />
          <Route path="*" element={<MotionWrapper> <NotFound /> </MotionWrapper>} />
        </Routes>
      </AnimatePresence>
      {location.pathname.includes("/menu/") ? '' : <Footer />}
    </>
  )
}

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
)
