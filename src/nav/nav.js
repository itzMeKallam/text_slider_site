import Styles from './nav.module.css'
import images from '../old/logo.png'
const Nav=()=>{
    return (
        <div className={Styles.nav}> 
            <div className={Styles.logo}>
                <img src={images} alt="Logo" />
            </div>
            <div className={Styles.futures}>
                <ul>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Affiliate</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav