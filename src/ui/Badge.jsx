import "../styles/badge.css"

export default function Badge({children, color="rgba(169, 17, 37, 0.7)"}){
    return(
        <div 
            className="badge" 
            style={{backgroundColor: color }}
        >
            {children}
        </div>
    )
}
