import { useState, useEffect } from "react"
import { motion } from 'motion/react'
import rebiesLogo from "../assets/rebies-logo.jpg"
import '../styles/menu-item.css'
import Badge from "../ui/Badge"
import { Link } from "react-router-dom"
import MenuImageLoader from "./MenuImageLoader"

const MotionLink = motion.create(Link)

export default function MenuCard({item, ...props}){

    return(
        <MotionLink
            className="menu-card"
            {...props}
            to={`${item.name}`}
            state={{ item }}
            layout
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className="container">
                <h3>{item.name}</h3>
                <Badge>${item.price}.00+</Badge>
            </div>
            {item?.images[0] &&
                <MenuImageLoader
                    src={`/images/menu/${item.images[0]}`}
                    alt={item.name}
                />
            }
        </MotionLink>
    )
}