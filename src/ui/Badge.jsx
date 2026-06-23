import "../styles/badge.css"

export default function Badge({children, color="red"}){
    return(
        <div 
            className="badge" 
            style={{backgroundColor: color === "red" ? 
                    "rgba(169, 17, 37, 0.7)" : "rgba(0, 0, 0, 0.8)"
            }}
        >
            {children}
        </div>
    )
}
