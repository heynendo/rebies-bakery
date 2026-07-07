import { Link, useLocation } from "react-router-dom";
import { TailedArrow4 } from "icons-by-heynendo";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Badge from "../ui/Badge";
import scrollToTop from "../functions/scrollToTop";
import ToggleOptions from "../ui/ToggleOptions";

export default function MenuItem() {

    useEffect(() => {
        scrollToTop();
    }, []);

    const location = useLocation();
    const item = location.state?.item;

    // TODO: load item from JSON if page refreshed

    const [currentImage, setCurrentImage] = useState(
        item.images[0] ?? null
    );

    return (
        <div className="menu-item">

            <div className="heading">
                <Link to={-1}>
                    <TailedArrow4
                        rotation={180}
                        color="#A91125"
                    />
                </Link>
                <h2>{item.name}</h2>
                <div />
            </div>

            {item.images.length > 0 ?
                <div className="image-gallery">
                    <div className="selector">
                        {item.images.map(image => (
                            <div key={image}
                                onClick={() => setCurrentImage(image)}
                            >
                                <img src={`/images/menu/${image}`}/>
                            </div>
                        ))}
                    </div>
                    <div className="main-img">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImage}
                                src={`/images/menu/${currentImage}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.1 }}
                            />
                        </AnimatePresence>
                    </div>
                </div>
                :
                <div className="image-gallery-placeholder" />
            }

            <span className="desc">
                {item.desc}
            </span>

            <div className="break" />

            <div className="more">
                {Object.entries(item.details).map(([category, values]) => (
                    <div
                        key={category}
                        className="category"
                    >
                        <h3>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h3>
                        <div className="options">
                            {values.map((value) => (
                                <Badge
                                    key={value}
                                    color="none"
                                >
                                    {value}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="pricing">
                <h3>COST:</h3>
                <h2>${item.price.toFixed(2)}+</h2>
            </div>
        </div>
    );
}