import styles from '../../../Styles/index.module.scss';
import BookingItem from "./BookingItem";
import {IBooking} from "../../../Interfaces/IBooking";


export default function Booking() {
    const bookingItem: IBooking[] = [
        {
            title: "Location",
            text: "101 Cuba St, Te Aro, Wellington",
        },
        {
            title: "Hours",
            text: "Tuesday to Friday 7AM - 3PM",
            twoText: "Saturday to Sunday 8AM - 3PM",
        },
        {
            title: "Mondays?",
            text: "We are closed on Mondays to reflect and refuel",
        },

    ]
    return (
        <section className={styles.booking}>
            <div className={styles.container}>
                <div className={styles.booking__content}>
                    {bookingItem.map(item => (
                        <BookingItem item={item} key={item.text}/>
                    ))}
                </div>
            </div>
        </section>
    )
}