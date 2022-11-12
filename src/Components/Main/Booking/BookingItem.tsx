import styles from '../../../Styles/index.module.scss';
import {IBooking} from "../../../Interfaces/IBooking";

interface IBookingProps {
    item: IBooking
}


export default function BookingItem(props: IBookingProps) {
    return(
        <div className={styles.booking__item}>
            <h2 className={styles.booking__title}>
                {props.item.title}
            </h2>
            <p className={styles.booking__text}>
                {props.item.text}
                <br/>
                <br/>
                {props.item.twoText}
            </p>
        </div>
    )
}