import { useState, useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import MenuCard from '../components/MenuCard'
import menuData from '../data/menu.json'
import '../styles/menu.css'
import scrollToTop from '../functions/scrollToTop'
import SearchBar from '../components/SearchBar'
import FilterIcon from '../ui/icons/FilterIcon'
import PopularMenuItemCard from '../components/PopularMenuItemCard'
import getWindowWidth from '../functions/GetWindowWidth'

function Menu(){

    const width = getWindowWidth()

    useEffect(()=>{
        scrollToTop()
    },[])
    const [userInput, setUserInput] = useState("")

    const popularItems = menuData.filter(item => 
        item.name === "Custom Cakes" ||
        item.name === "Gourmet Cookies" ||
        item.name === "Cupcakes"
    )

    let activeMenuItems = menuData
        .filter(item => item.name.includes(userInput) || 
                        item.desc.includes(userInput)
                )
        .map((item, index) => 
            (width < 980 ? (index % 2 === 1) : (index % 3 === 2)) ? 
            <div className='break'/> : <MenuCard item={item} key={item.name}/>
        )

    return(
        <div className="menu">
            <PageTitle content="Menu" />
            <h2>Popular Items</h2>
            <div className='popular-items'>
                {popularItems.map(item => <PopularMenuItemCard item={item} key={item.name}/>)}
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
            <div className='menu-items'>
                {activeMenuItems}
            </div>
        </div>
    )
}

export default Menu