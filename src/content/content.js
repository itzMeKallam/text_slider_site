import Styles from './content.module.css'

const Content=()=>{
    return (
        <div className={Styles.content}>
            <div className={Styles.title}>Make Website
            <div className={Styles.slider}>
                <div>Now</div>
                <div>Today</div>
                <div>Free</div>
            </div>
            </div>
            <p>Making Website is now one of the easiest thing in the world. You just need to learn HTML, CSS,<br />
            JavaScript and you are good to go.</p>
            <button>Register Now To Know More</button>
        </div>
    )
}

export default Content