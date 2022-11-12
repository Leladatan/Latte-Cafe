import styles from '../../../Styles/index.module.scss';
import {IBtnChange} from "../../../Interfaces/IBtnChange";
import BtnItem from "./BtnItem";

interface IMenu {
    title: string
    text: string
    menuTitle: string
}


export default function Menu(props: IMenu) {

    const btnItem: IBtnChange[] = [
        {
            id: "Food",
            title: "Food Menu",
            // isActive: true,
        },
        {
            id: "Drinks",
            title: "Drinks Menu",
            // isActive: false,
        },
        {
            id: "Takeaway",
            title: "Takeaway Menu",
            // isActive: false,
        },
    ]

    return (
        <section className={styles.menu}>
            <div className={styles.container}>
                <div className={styles.menu__content}>
                    <div className={styles.menu__content_text}>
                        <div className={styles.menu__content_text_title}>
                            <h2 className={styles.title__menu}>
                                {props.title}
                            </h2>
                            <p className={styles.text__menu}>
                                {props.text}
                            </p>
                        </div>
                        <div className={styles.btns__menu}>
                            {btnItem.map(item => (
                                <BtnItem item={item} key={item.id}/>
                            ))}
                        </div>
                    </div>
                    <div className={styles.menu__content_menu}>
                        <h2 className={styles.content_menu_title_logo}>
                            {props.menuTitle}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}