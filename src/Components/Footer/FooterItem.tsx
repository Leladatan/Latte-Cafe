import styles from '../../Styles/index.module.scss';
import {IFooterLink} from "../../Interfaces/IFooterLink";

interface IFooterLinkProps {
    item: IFooterLink
}


export default function FooterItem(props: IFooterLinkProps) {
    return (
        <li className={styles.footer_item}>
            <a href={props.item.link} className={styles.footer_link}>{props.item.title}</a>
        </li>
    )
}