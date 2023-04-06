import { useState } from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Cardapio.module.scss';
import SearchEngine from './SearchEngine';
import Filters from './Filters';
import Ordination from './Ordination';
import Items from './Items';
import { IOrdinationOptions } from './Ordination/Ordination.types';

export default function Cardapio() {
    const [searchEngine, setSearchEngine] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [ordination, setOrdination] = useState<IOrdinationOptions>('');

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
                <div className={styles.cardapio__filters}>
                    <Filters filter={filter} setFilter={setFilter} />
                    <Ordination ordination={ordination} setOrdination={setOrdination} />
                </div>
                <Items searchEngine={searchEngine} filter={filter} ordination={ordination} />
            </section>
        </main>
    );
}