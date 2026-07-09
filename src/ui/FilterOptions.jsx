import { motion } from "motion/react"
import '../styles/filter-options.css'

export default function FilterOptions({ 
    filterChoice, 
    setFilterChoice,
    filterChoices = [
        "Price Low to High",
        "Price High to Low",
        "Alphabetical: A to Z",
        "Alphabetical: Z to A"
    ]
}){
    return(
        <motion.div className='filter-options'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
        >
            <div className='container'>
                <span className='title'>Sort</span>
                {filterChoices.map(x =>
                    <>
                    <div className='option'
                        onClick={() => setFilterChoice(x)}
                    >
                        <div className={`indicator ${x === filterChoice ? 'selected' : ''}`} />
                        {x}
                    </div>
                    <div className='break' />
                    </>
                )}
            </div>
        </motion.div>
    )
}