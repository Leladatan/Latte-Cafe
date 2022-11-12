import styles from '../../../Styles/index.module.scss';
import fb from '../../../Image/header/message.svg';
import me from '../../../Image/header/fb.svg';
import inst from '../../../Image/header/inst.svg';


export default function Social() {
    return (
        <div className={styles.header__social}>
            <a href="#"><img src={me} alt="facebook"/></a>
            <a href="#"><img src={fb} alt="message"/></a>
            <a href="#"><img src={inst} alt="inst"/></a>
        </div>
    )
}