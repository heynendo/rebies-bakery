import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import rebiesLogo from "../assets/rebies-logo.jpg"
import '../styles/menu-item.css'


function MenuItem({item}){
    const [toggle, setToggle] = useState(false)

    const entries = Object.entries(item?.details || {})
    const nonEmpty = entries.filter(([, arr]) => Array.isArray(arr) && arr.length > 0)

    const [primaryCat, ...otherCats] = nonEmpty

    const imageSrc = item.image
        ? new URL(`../assets/menu/${item.image}`, import.meta.url).href
        : rebiesLogo

    return(
        <>
        <div className="menu-item">
            <div className="top">
                <div>
                    <h3>{item.name}</h3>
                    <AnimatePresence>
                    {toggle && primaryCat && (
                    <motion.div className="details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {primaryCat[0] !== "general" && <h4>{primaryCat[0]}</h4>}
                        <ul>
                        {primaryCat[1].map((val, idx) => (
                            <li key={idx}>{val}</li>
                        ))}
                        </ul>
                    </motion.div>
                    )}
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                {toggle && <motion.img 
                    src={imageSrc} 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                        height: { duration: 0.25},
                        opacity: { duration: 0.25, delay: 0.5 },
                        },
                    }}
                    exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                        height: { duration: 0.25, delay: 0.5 },
                        opacity: { duration: 0.25 },
                        },
                    }}
                />}
                </AnimatePresence>
            </div>
            <AnimatePresence>
            {toggle && otherCats.length > 0 && (
            <motion.div className="middle"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
            >
                {otherCats.map(([title, values]) => (
                <div className="details" key={title}>
                    <h4>{title}</h4>
                    <ul>
                    {values.map((val, idx) => (
                        <li key={idx}>{val}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </motion.div>
            )}
            </AnimatePresence>
            <div className="bottom">
                <p>{item.price}</p>
                <button onClick={() => setToggle(x => !x)}>{toggle ? "view less" : "view more"}</button>
            </div>
        </div>
        <div className="break" />
        </>
    )
}

export default MenuItem