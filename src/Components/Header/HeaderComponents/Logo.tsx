import styles from '../../../Styles/index.module.scss';

interface IlogoProps {
    title: string
}

export default function Logo(props: IlogoProps) {
    return (
        <div className="header__content__logo">
            <h1 className={styles.text__logo}>{props.title}</h1>
        </div>
    )
}