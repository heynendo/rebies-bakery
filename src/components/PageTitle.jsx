import { motion, AnimatePresence } from "framer-motion"

function PageTitle({content}){



    return(
        <AnimatePresence>
            <motion.h1 
                className="body-title"
                /*initial={{ x: "-100vw", opacity: 0 }}
                animate={{ 
                    x: 0, 
                    opacity: 1, 
                    transition: { delay: 0.5, duration: 0.25 } 
                }}
                exit={{ 
                    x: "100vw", 
                    opacity: 0, 
                    transition: { duration: 0.25 } 
                }}*/
                >
                {content}
            </motion.h1>
        </AnimatePresence>
    )
}

export default PageTitle