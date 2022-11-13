import styles from '../../../Styles/index.module.scss';
import {IBtnChange} from "../../../Interfaces/IBtnChange";
import classNames from "classnames";
import {useState} from "react";

interface IBtnItemProps {
    item: IBtnChange
}

export default function BtnItem(props: IBtnItemProps) {

    const [btnChange, setBtnChange] = useState(props.item.isActive)

    props.item.isActive = btnChange


    const btnClassTrue = classNames(` ${styles.btn__light_active}`)
    const btnClassesFalse = classNames(`${styles.btn__light}`)
    return (
        <button
            onClick={() => setBtnChange(prevState => !prevState)}
            className={props.item.isActive ? btnClassTrue : btnClassesFalse}>
            {props.item.title}
        </button>
    )
}