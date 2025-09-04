import RebiesLogo from '../assets/rebies-logo.jpg'
import '../styles/footer.css'


function Footer(){
    return(
        <footer>
            <div>
                <div className="certificate"><a href="/food-handler-cert.png" target="_blank" title="Click to view certificate">Food Handling Trained & Certified</a></div>
                <img src={RebiesLogo} />
            </div>
            <span>website created by&nbsp;<a target="_blank" href="https://www.donovanheynen.com/">Donovan Heynen</a></span>
        </footer>
    )
}

export default Footer