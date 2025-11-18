import { useState, useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import MenuItem from '../components/MenuItem'
import menuData from '../data/menu.json'
import '../styles/menu.css'
import scrollToTop from '../functions/scrollToTop'

function Menu(){

    useEffect(()=>{
        scrollToTop()
    })

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const half = Math.ceil(menuData.menu.length / 2)
    const firstHalf = menuData.menu.slice(0, half)
    const secondHalf = menuData.menu.slice(half)


    return(
        <div className="menu">
            <PageTitle content="Menu" />
            <div className='container'>
                <div className='column'>
                    <div className='break'/>
                    {firstHalf.map(item => <MenuItem item={item} key={item.name}/>)}
                </div>
                <div className='column'>
                    {width > 800 && <div className='break'/>}
                    {secondHalf.map(item => <MenuItem item={item} key={item.name}/>)}
                </div>
            </div>
        </div>
    )
}

export default Menu