import styles from '../../Styles/index.module.scss';
import Fs from './Fs/Fs';
import Info from './Info/Info';
import Menu from './Menu/Menu';
import Booking from "./Booking/Booking";
import Catalog from "./Catalog/Catalog";

export default function Main() {

    return (
        <main className={styles.main}>
            <Fs/>
            <Info
                title="About Us"
                text="Tucked away in the corner of Wellington, Latte Cafe is a local neighbourhood cafe and bar. Latte
                        is all about doing what we love, in a city that we love. We keep stocked with local produce and
                        pastries. Bring your family for a bite, or meet your friends for a coffee or warm drink."
            />
            <Menu
                title="Menu"
                text="We change our menu every season. Here is what we are currently dishing up."
                buttonText={["Food Menu", "Drinks Menu", "Takeaway Menu"]}
                menuTitle="Latte Cafe"
            />
            <Booking/>
            <Catalog/>
        </main>
    )
}