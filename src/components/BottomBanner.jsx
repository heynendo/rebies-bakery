import { Exit1 } from "icons-by-heynendo";
import "../styles/bottom-banner.css";
import { AnimatePresence, motion } from "framer-motion";


export default function BottomBanner({showBanner, setShowBanner, content}){

    return(
        <AnimatePresence>
            {showBanner &&
            <motion.div className="bottom-banner"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
                exit={{ opacity: 0, y: 25, transition: { duration: 0.25, delay: 0 } }}
            >
                <div className="left">

                </div>
                <div className="content">
                    {content}
                </div>
                <div className="close"
                    onClick={() => setShowBanner(false)}
                >
                    <Exit1 
                        size={10}
                    />
                </div>
            </motion.div>
            }
        </AnimatePresence>
    )
}