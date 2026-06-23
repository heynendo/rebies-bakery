import { useState, useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import MenuItem from '../components/MenuItem'
import menuData from '../data/menu.json'
import '../styles/menu.css'
import scrollToTop from '../functions/scrollToTop'
import SearchBar from '../components/SearchBar'
import FilterIcon from '../ui/icons/FilterIcon'
import PopularMenuItemCard from '../components/PopularMenuItemCard'

function Menu(){

    useEffect(()=>{
        scrollToTop()
    },[])

    const [width, setWidth] = useState(window.innerWidth)
    const [userInput, setUserInput] = useState("")

    const popularItems = menuData.filter(item => item.name === "Custom Cakes" ||
                                                 item.name === "Cupcakes" ||
                                                 item.name === "Gourmet Cookies"
    )
    console.log(popularItems)

    return(
        <div className="menu">
            <PageTitle content="Menu" />
            <h2>Popular Items</h2>
            <div className='popular-items'>
                {popularItems.map(item => <PopularMenuItemCard item={item} />)}
            </div>
            <div className="search-container">
                <SearchBar
                    userInput={userInput}
                    setUserInput={setUserInput}
                />
                <div className="filter-toggle">
                    <FilterIcon
                        size={20}
                    />
                </div>
            </div>
        </div>
    )
}

export default Menu