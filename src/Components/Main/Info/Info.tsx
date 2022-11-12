import styles from '../../../Styles/index.module.scss';

interface IInfoProps {
    title: string
    text: string
}

export default function Info(props: IInfoProps) {
    return (
        <section className={styles.info}>
            <div className={styles.container}>
                <div className={styles.info__content}>
                    <h2 className={styles.title__info}>
                        {props.title}
                    </h2>
                    <p className={styles.text__info}>
                        {props.text}
                    </p>
                </div>
            </div>
        </section>
    )
}