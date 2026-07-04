import { Link } from "react-router-dom"
import "../styles/menu-cards.css"
import Badge from "../ui/Badge"

export default function PopularMenuItemCard({item, ...props}){

    let specialTag = 
        item.name === "Custom Cakes" ?
        <div>
            our most popular item!
        </div> 
        :
        item.name === "Cupcakes" ?
        <div>
            <h2>
                {Math.floor((item.details.flavors.length * item.details.frostings.length) / 100) * 100}+
            </h2>
            possible combinations
        </div> 
        :
        item.name === "Gourmet Cookies" ?
        <div>
            <h2>{item.details.flavors.length}</h2>
            different flavors
        </div> 
        :
        ''

    return(
        <Link className="popular-menu-item" {...props}
            to={`${item.name}`}
            state={{ item }}
        >
            <div className="container">
                <h3>{item.name}</h3>
                <div className="badges">
                    <Badge>
                        {specialTag}
                    </Badge>
                    <Badge color="black">
                        ${item.price.base}.00+
                    </Badge>
                </div>
            </div>
            <img src={`/images/menu/${item.images[0]}`}/>
        </Link>
    )
}