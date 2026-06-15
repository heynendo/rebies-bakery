// functions/PreventScroll.jsx
import { useEffect } from "react"

export default function usePreventScroll(active) {
    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden"
            document.documentElement.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
            document.documentElement.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
            document.documentElement.style.overflow = ""
        }
    }, [active])
}