import { Link } from "react-router-dom"
import "../styles/menu-cards.css"
import Badge from "../ui/Badge"

export default function PopularMenuItemCard({item, ...props}){
    return(
        <Link className="popular-menu-item" {...props}
            to={`${item.name}`}
            state={{ item }}
        >
            <div className="container">
                <h3>{item.name}</h3>
                <div className="badges">
                    <Badge>
                        our most popular item!
                    </Badge>
                    <Badge color="black">
                        price
                    </Badge>
                </div>
            </div>
            <img src={`/src/assets/menu/${item.images[0]}`}/>
        </Link>
    )
}