import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import rebiesLogo from "../assets/rebies-logo.jpg"
import '../styles/menu-item.css'


function MenuItem({item}){
    const [toggle, setToggle] = useState(false)
    

    //add framer motion transitions going from toggle on/off

    const entries = Object.entries(item?.details || {})
    const nonEmpty = entries.filter(([, arr]) => Array.isArray(arr) && arr.length > 0)

    const [primaryCat, ...otherCats] = nonEmpty

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
                        transition={{ duration: 0.5, ease: "easeInOut" }}
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
                    src={item.image || rebiesLogo} 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                        height: { duration: 0.25, ease: "easeOut" },
                        opacity: { duration: 0.25, ease: "easeOut", delay: 0.5 },
                        },
                    }}
                    exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                        height: { duration: 0.25, ease: "easeIn", delay: 0.5 },
                        opacity: { duration: 0.25, ease: "easeIn" },
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
                transition={{ duration: 0.5, ease: "easeInOut" }}
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