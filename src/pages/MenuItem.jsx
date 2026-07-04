import { Link, useLocation } from "react-router-dom";
import { TailedArrow4 } from "icons-by-heynendo";
import { useEffect, useMemo, useState } from "react";
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

    // Initialize every pricing option to its first value
    const [selectedOptions, setSelectedOptions] = useState(() => {
        const selections = {};

        item.price.options.forEach(option => {
            selections[option.key] = option.values[0];
        });
        return selections;
    });

    const totalPrice = useMemo(() => {
        return (
            item.price.base +
            Object.values(selectedOptions).reduce(
                (sum, option) => sum + option.modifier,
                0
            )
        );
    }, [selectedOptions, item]);

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
                                <img src={`/src/assets/menu/${image}`} />
                            </div>
                        ))}
                    </div>
                    <div className="main-img">
                        <img src={`/src/assets/menu/${currentImage}`} />
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
                {item.price.options.length > 0 && (
                    <div className="left">
                        {item.price.options.map(option => (
                            <div
                                key={option.key}
                                className="content"
                            >
                                <h3>{option.label}</h3>
                                <ToggleOptions
                                    options={option.values}
                                    currentOption={selectedOptions[option.key]}
                                    setCurrentOption={(newValue) =>
                                        setSelectedOptions(prev => ({
                                            ...prev,
                                            [option.key]: newValue
                                        }))
                                    }
                                />
                            </div>
                        ))}
                    </div>
                )}
                <div className="right">
                    <h3>COST</h3>
                    <h2>${totalPrice.toFixed(2)}+</h2>
                </div>
            </div>
        </div>
    );
}