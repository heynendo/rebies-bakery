import { Link, useLocation } from "react-router-dom"
import { TailedArrow4 } from "icons-by-heynendo";
import { useEffect, useState } from "react";
import Badge from "../ui/Badge";
import scrollToTop from "../functions/scrollToTop";


export default function MenuItem(){

    useEffect(()=>{
        scrollToTop()
    },[])

    const location = useLocation()
    const item = location.state?.item
    //TODO: get item info from menu.JSON if useLocation fails

    const [currentImage, setCurrentImage] = useState(item.images[0] ? item.images[0] : null)

    return(
        <div className="menu-item">
            <div className="heading">
                <Link   to={-1}

                >
                <TailedArrow4 
                    rotation={180}
                    color="#A91125"
                />
                </Link>
                <h2>{item.name}</h2>
                <div />
            </div>
            <div className="image-gallery">
                <div className="selector">
                    {item.images.map(image => 
                        <div
                            onClick={() => setCurrentImage(image)}
                        >
                            <img src={`/src/assets/menu/${image}`} />
                        </div>
                    )}
                </div>
                <div className="main-img"><img src={`/src/assets/menu/${currentImage}`}/></div>
            </div>
            <span className="desc">
                {item.desc}
            </span>
            <div className="break" />
            <div className="more">
                {Object.entries(item.details).map(([category, values]) => (
                    <div key={category} className="category">
                        <h3>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h3>

                        <div className="options">
                        {values.map((value, index) => (
                            <Badge 
                                key={index}
                                color='none'
                            >
                                {value}
                            </Badge>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="pricing">
                <div className="left">
                    {/*Object.entries.apply(item.price.variables).map(([category, values]) => (
                        <h2>{}</h2>
                    ))*/}
                </div>
                <div className="right">
                    <h3>COST</h3>
                    <h2>${item.price.base}.00+</h2>
                </div>
            </div>
        </div>
    )
}