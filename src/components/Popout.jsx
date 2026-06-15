import { AnimatePresence, motion } from "motion/react"
import "../styles/popout.css"
import { useState } from "react"
import { Exit1 } from "icons-by-heynendo";

export default function Popout({showPopout, setShowPopout, children}){

    const [hover, setHover] = useState(false);

    return(
        <AnimatePresence>
            {showPopout &&
                <motion.div className="popout"
                    onClick={() => setShowPopout(false)}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
                    exit={{ opacity: 0, y: 25, transition: { duration: 0.25, delay: 0 } }}

                >
                    <div className="content"
                        onClick={(e) => e.stopPropagation()}
                        onHoverStart={() => setHover(true)}
                        onHoverEnd={() => setHover(false)}
                    >
                        <AnimatePresence>
                            {1 &&
                            <div className="close"
                                onClick={() => setShowPopout(false)}
                            >
                                <Exit1 
                                    size={10}
                                />
                            </div>
                            }
                        </AnimatePresence>
                        {children}
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}