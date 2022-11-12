import styles from '../../../Styles/index.module.scss';
import {INavItem} from "../../../Interfaces/INavItem";
import NavItem from "./NavItem";

export default function Nav() {
    const navItem: INavItem[] = [
        {
            id: 1,
            title: 'About Us',
            link: '/',
        },
        {
            id: 2,
            title: 'Info',
            link: '/',
        },
        {
            id: 3,
            title: 'Menu',
            link: '/',
        },
        {
            id: 4,
            title: 'Booking',
            link: '/',
        },
    ]

    return (
        <nav className={styles.navbar}>
            <ul className={styles.header__list}>
                {navItem.map(item => (
                    <NavItem item={item} key={item.id}/>
                ))}
            </ul>
        </nav>
    )
}