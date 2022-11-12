import styles from '../../Styles/index.module.scss';
import {IFooterLink} from "../../Interfaces/IFooterLink";
import FooterItem from "./FooterItem";

export default function Footer() {

    const itemIFooterLink: IFooterLink[]  = [
        {
            id: 1,
            title: "Built by Nikolai Bain.",
            link: "/",
        },
        {
            id: 2,
            title: "Powered by Webflow.",
            link: "/",
        },
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__content}>
                    <span className={styles.footer_company}>
                        © Latte Cafe 2022.
                    </span>
                    <ul className={styles.footer_list}>
                        {itemIFooterLink.map(item => (
                            <FooterItem item={item} key={item.id}/>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}