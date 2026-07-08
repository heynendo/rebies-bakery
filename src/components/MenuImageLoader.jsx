import { useState, useEffect, useRef } from "react";
import '../styles/menu-image-loader.css'

export default function MenuImageLoader({ src, alt = "", className = "", ...props }) {
    const [status, setStatus] = useState("loading"); // "loading" | "loaded" | "error"
    const imgRef = useRef(null);

    useEffect(() => {
        setStatus("loading");
        const img = imgRef.current;
        if (img && img.complete && img.naturalWidth > 0) {
            setStatus("loaded");
        }
    }, [src]);

    return (
        <div className={`menu-image-loader ${className}`}>
            {status === "loading" && (
                <div className="menu-image-loader__skeleton" />
            )}

            {status === "error" && (
                <div className="menu-image-loader__error">
                    Image unavailable
                </div>
            )}

            <img
                ref={imgRef}
                src={src}
                alt={alt}
                onLoad={() => setStatus("loaded")}
                onError={() => setStatus("error")}
                style={{
                    opacity: status === "loaded" ? 1 : 0,
                    transition: "opacity 0.2s ease",
                }}
                {...props}
            />
        </div>
    );
}