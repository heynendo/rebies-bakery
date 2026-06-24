import { useState, useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import MenuCard from '../components/MenuCard'
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

    const popularItems = menuData.filter(item => 
        item.name === "Custom Cakes" ||
        item.name === "Gourmet Cookies" ||
        item.name === "Cupcakes"
    )

    function ActiveMenuItems(menuData, userInput){
        //apply filter using userInput and filter variables to show menu items
        //add break line to every third menu item
    }


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
                {menuData.map(item => 
                    <MenuCard item={item} key={item.name}/>
                )}
            </div>
        </div>
    )
}

export default Menu