import "../styles/menu-cards.css"
import Badge from "../ui/Badge"

export default function PopularMenuItemCard({item}){
    return(
        <div className="popular-menu-item">
            <div className="container">
                <h3>{item.name}</h3>
                <div className="badges">
                    <Badge>
                        our most popular item!
                    </Badge>
                    <Badge color="black">
                        {item.price}
                    </Badge>
                </div>
            </div>
            <img src={`/src/assets/menu/${item.image}`}/>
        </div>
    )
}