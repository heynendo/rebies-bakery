import { motion } from "motion/react"
import Badge from "../ui/Badge"
import "../styles/special-events.css"

const EVENTS = [
    "Baby Showers",
    "Birthdays",
    "Anniversaries",
    "Graduation Parties",
    "Weddings",
    "BBQs & Backyard Gatherings",
    "Holiday Celebrations",
    "Corporate Events",
    "Family Reunions",
    "Retirement Parties",
    "Baptisms & First Communions",
    "Gender Reveals",
    "Engagement Parties",
    "School & Community Events"
]

export default function SpecialEvents(){
    return(
        <div className="special-events">
            <h3>Book Your Next Special Event</h3>
                <motion.div
                    className="container"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 35,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {/* Render the list twice so it loops seamlessly */}
                    {[...EVENTS, ...EVENTS].map((x, index) => (
                        <Badge
                            key={index}
                            color={
                                index % 2 === 0 ?
                                "rgba(169, 17, 37, 0.7)"
                                :
                                "rgba(24, 24, 24, 0.9)"
                            }
                        >
                            {x}
                        </Badge>
                    ))}
                </motion.div>

            <p>No matter the occasion, we'd love to help bring your vision to life and create something your guests will be talking about long after the last bite!</p>
        </div>
    )
}