import { useState } from 'react';
import styles from './Cardapio.module.scss';
import SearchEngine from './SearchEngine';
import Filters from './Filters';
import Ordination from './Ordination';
import Items from './Items';
import { IOrdinationOptions } from './Ordination/Ordination.types';
import stylesTheme from 'styles/Theme.module.scss';

export default function Cardapio() {
  const [searchEngine, setSearchEngine] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [ordination, setOrdination] = useState<IOrdinationOptions>('');

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTheme.cardapio__titulo}>Cardápio</h3>
      <SearchEngine searchEngine={searchEngine} setSearchEngine={setSearchEngine} />
      <div className={styles.cardapio__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Ordination ordination={ordination} setOrdination={setOrdination} />
      </div>
      <Items searchEngine={searchEngine} filter={filter} ordination={ordination} />
    </section>
  );
}