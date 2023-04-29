import { memo, useMemo } from 'react';
import { ISearchEngineProps } from './SearchEngine.types';
import styles from './SearchEngine.module.scss';
import { CgSearch } from 'react-icons/cg';

function SearchEngine({ searchEngine, setSearchEngine }: ISearchEngineProps) {
  const element = useMemo(() => <CgSearch size={20} color='#4C4D5E' />, []);

  return <div className={styles.searchEngine}>
    <input
      value={searchEngine}
      onChange={event => setSearchEngine(event.target.value)}
      placeholder='Buscar'
    />
    {element}
  </div>;
}

export default memo(SearchEngine);