import Nav from './HeaderComponents/Nav';
import Logo from './HeaderComponents/Logo';
import Social from './HeaderComponents/Social';
import BurgerMenu from "./HeaderComponents/BurgerMenu";
import styles from '../../Styles/index.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__content}>
                    <Nav/>
                    <Logo title="Latte Cafe"/>
                    <Social/>
                    <BurgerMenu/>
                </div>
            </div>
        </header>
    )
}