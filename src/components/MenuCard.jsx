import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import rebiesLogo from "../assets/rebies-logo.jpg"
import '../styles/menu-item.css'
import Badge from "../ui/Badge"
import { Link } from "react-router-dom"

export default function MenuCard({item, ...props}){

    return(
        <Link className="menu-card" {...props}
            to={`${item.name}`}
            state={{ item }}
        >
            <div className="container">
                <h3>{item.name}</h3>
                <Badge>${item.price.base}.00+</Badge>
            </div>
            {item?.images[0] && <img src={`/images/menu/${item.images[0]}`}/>}
        </Link>
    )
}