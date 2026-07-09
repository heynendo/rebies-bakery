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
import { motion, AnimatePresence } from 'motion/react'
import FilterOptions from '../ui/FilterOptions'

function Menu(){

    const width = getWindowWidth()
    const [showFilters, setShowFilters] = useState(false)
    const [userInput, setUserInput] = useState("")
    const [filterChoice, setFilterChoice] = useState("Alphabetical: A to Z")

    useEffect(()=>{
        scrollToTop()
    },[])

    const popularItems = menuData
        .filter(item => 
            item.name === "Custom Cakes" ||
            item.name === "Gourmet Cookies" ||
            item.name === "Cupcakes"
        )

    const activeMenuItems = menuData
        .filter(item => {
            const query = userInput.toLowerCase()
            return item.name.toLowerCase().includes(query) || 
                   item.desc.toLowerCase().includes(query)
        })
        .sort((a, b) => {
            if(filterChoice === "Alphabetical: A to Z") return a.name.localeCompare(b.name)
            else if(filterChoice === "Alphabetical: Z to A") return b.name.localeCompare(a.name)
            else if(filterChoice === "Price High to Low") return b.price - a.price
            else return a.price - b.price
        })
        .map((item, index) => <MenuCard item={item} key={item.name} />)

    return(
        <div className="menu">
            <PageTitle content="Menu" />
            <h2>Popular Items</h2>
            <div className='popular-items'>
                {popularItems.map(item => <PopularMenuItemCard item={item} key={item.name}/>)}
            </div>
            <div className='break'/>
            <div className="search-container">
                <SearchBar
                    userInput={userInput}
                    setUserInput={setUserInput}
                />
                <div className="filter-toggle"
                    onClick={() => setShowFilters(x => !x)}
                >
                    <FilterIcon
                        size={20}
                    />
                </div>
                {showFilters &&
                <div className='filter-overlay' onClick={() => setShowFilters(false)} />
                }
                <AnimatePresence>
                {showFilters &&
                <FilterOptions
                    filterChoice={filterChoice}
                    setFilterChoice={setFilterChoice}
                />
                }
                </AnimatePresence>
            </div>
            <div className='menu-items'>
                <AnimatePresence mode="popLayout">
                    {activeMenuItems}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Menu