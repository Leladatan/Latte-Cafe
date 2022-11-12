import styles from '../../../Styles/index.module.scss';

interface IMenu {
    title: string
    text: string
    buttonText: string[]
    menuTitle: string
}

export default function Menu(props: IMenu) {

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
                            <button
                                className={styles.btn__light_active}>
                                {props.buttonText[0]}</button>
                            <button
                                className={styles.btn__light}>
                                {props.buttonText[1]}</button>
                            <button
                                className={styles.btn__light}>
                                {props.buttonText[2]}</button>
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