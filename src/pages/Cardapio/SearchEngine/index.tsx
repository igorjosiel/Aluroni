import React from 'react';
import { ISearchEngineProps } from './SearchEngine.types';
import styles from './SearchEngine.module.scss';
import {CgSearch} from 'react-icons/cg';

export default function SearchEngine({searchEngine, setSearchEngine}: ISearchEngineProps) {
  return <div className={styles.searchEngine}>
    <input
      value={searchEngine}
      onChange={event => setSearchEngine(event.target.value)}
      placeholder='Buscar'
    />
    <CgSearch size={20} color='#4C4D5E' />
  </div>
}