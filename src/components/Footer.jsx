import RebiesLogo from '../assets/rebies-logo.jpg'
import '../styles/footer.css'


function Footer(){
    return(
        <footer>
            <div>
                <span>website created by<a target="_blank" href="https://www.donovanheynen.com/">Donovan Heynen</a></span>
                <img src={RebiesLogo} />
            </div>
        </footer>
    )
}

export default Footer