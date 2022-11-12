import styles from '../../../Styles/index.module.scss';
import firstImage from '../../../Image/main/catalog/first.png'
import secondImage from '../../../Image/main/catalog/second.png'
import thirdImage from '../../../Image/main/catalog/third.png'

export default function Catalog() {
    return (
        <section className={styles.catalog}>
            <div className={styles.container}>
                <div className={styles.catalog__content}>
                    <div className={styles.catalog__content_left}>
                        <div className={styles.catalog__content_left_top}>
                            <img className={styles.firstImage} src={firstImage} alt="first"/>
                        </div>
                        <div className={styles.catalog__content_left_bottom}>
                            <img className={styles.secondImage} src={secondImage} alt="second"/>
                        </div>
                    </div>
                    <div className={styles.catalog__content_right}>
                        <img className={styles.thirdImage} src={thirdImage} alt="third"/>
                    </div>
                </div>
            </div>
        </section>
    )
}