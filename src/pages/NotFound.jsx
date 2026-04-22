import { useNavigate } from "react-router-dom"
import PageTitle from "../components/PageTitle"


export default function NotFound(){
    
    const navigate = useNavigate()
    
    return(
        <div className="not-found">
            <PageTitle content="Page Not Found"/>
            <div className="container">
                <p>The requested page could not be found. Please check the URL or return to the homepage.</p>
                <button
                    className="basic-button"
                    onClick={() => navigate('/')}
                >back to home</button>
            </div>
        </div>
    )
}