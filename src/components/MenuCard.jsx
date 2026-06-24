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
                <Badge>{item.price}</Badge>
            </div>
            {item?.image && <img src={`/src/assets/menu/${item.image}`}/>}
        </Link>
    )
}