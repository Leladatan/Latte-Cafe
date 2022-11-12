import styles from '../../../Styles/index.module.scss';
import {IBtnChange} from "../../../Interfaces/IBtnChange";
import classNames from "classnames";

interface IBtnItemProps {
    item: IBtnChange
}

export default function BtnItem(props: IBtnItemProps) {

    const btnClassTrue = classNames(` ${styles.btn__light_active}`)
    const btnClassesFalse = classNames(`${styles.btn__light}`)

    return (
        // <label className={styles.radio}>
        //     <input type="radio" id={props.item.id} name="btn" className={styles.radiomem}/>
        //     <span
        //         className={props.item.isActive ? btnClassTrue : btnClassesFalse}>
        //         {props.item.title}
        //     </span>
        // </label>
        <button className={props.item.isActive ? btnClassTrue : btnClassesFalse}>
            {props.item.title}
        </button>
    )
}