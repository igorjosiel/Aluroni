import { useState } from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Cardapio.module.scss';
import SearchEngine from './SearchEngine';

export default function Cardapio() {
    const [searchEngine, setSearchEngine] = useState('');

    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>

            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <SearchEngine searchEngine={searchEngine} setSearchEngine={setSearchEngine} />
            </section>
        </main>
    );
}