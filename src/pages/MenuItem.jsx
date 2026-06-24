import { useLocation } from "react-router-dom"


export default function MenuItem(){

    const location = useLocation()
    const item = location.state?.item

    return(
        <div className="menu-item">
            <div className="heading">
                <h2>{item.name}</h2>
            </div>
            <div className="image-gallery">
                <div className="container">

                </div>
                <img src={`/src/assets/menu/${item.image}`}/>
            </div>
        </div>
    )
}