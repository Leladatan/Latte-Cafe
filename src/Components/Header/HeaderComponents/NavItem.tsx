import styles from '../../../Styles/index.module.scss';
import {INavItem} from "../../../Interfaces/INavItem";

interface INavItemProps {
    item: INavItem
}

export default function NavItem(props: INavItemProps) {
    return (
        <li className="header__list_item">
            <a href={props.item.link} className={styles.header__list_link}>{props.item.title}</a>
        </li>
    )
}