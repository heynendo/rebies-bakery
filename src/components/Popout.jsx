import { AnimatePresence, motion } from "motion/react"
import "../styles/popout.css"
import { useState } from "react"
import { Exit1 } from "icons-by-heynendo";
import { getWindowWidth } from "../functions/GetWindowWidth";

export default function Popout({showPopout, setShowPopout, children}){

    const [hover, setHover] = useState(false);

    const windowWidth = getWindowWidth()

    return(
        <AnimatePresence mode="wait">
            {showPopout &&
                <motion.div className="popout"
                    onClick={() => setShowPopout(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
                    exit={{ opacity: 0, transition: { duration: 0.25, delay: 0 } }}

                >
                    <motion.div className="content"
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        initial={{ y: 25 }}
                        animate={{ y: 0 }}
                        exit={{ y: 25 }}
                        transition={{ duration: 0.25 }}
                    >
                        <AnimatePresence>
                            {(hover || windowWidth < 600) &&
                            <motion.div className="close"
                                onClick={() => setShowPopout(false)}
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                exit={{ opacity: 0}}
                                transition={{ duration: 0.1 }}
                            >
                                <Exit1 
                                    size={10}
                                    color="#eeeeee"
                                />
                            </motion.div>
                            }
                        </AnimatePresence>
                        {children}
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}