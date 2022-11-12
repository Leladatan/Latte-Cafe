import styles from '../../../Styles/index.module.scss';
import fb from '../../../Image/header/message.svg';
import me from '../../../Image/header/fb.svg';
import inst from '../../../Image/header/inst.svg';


export default function Social() {
    return (
        <div className={styles.header__social}>
            <a href="#" className=""><img src={me} alt="facebook" className="facebook"/></a>
            <a href="#" className=""><img src={fb} alt="message" className="message"/></a>
            <a href="#" className=""><img src={inst} alt="inst" className="instagram"/></a>
        </div>
    )
}