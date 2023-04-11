import classNames from 'classnames';
import filters from './filters.json';
import styles from './Filters.module.scss';
import { IFiltersProps } from './Filters.types';
import { Dish } from 'types/Dish';

export default function Filters({filter, setFilter}: IFiltersProps) {
  function selectFilter(option: Dish) {
    if (filter === option.id) return setFilter(null);

    return setFilter(option.id);
  }

  return (
    <div className={styles.filters}>
      {
        filters.map(option => (
          <button
            key={option.id}
            onClick={() => selectFilter(option)}
            className={classNames({
              [styles.filters__button]: true,
              [styles['filters__button--active']]: option.id === filter,
            })}
          >
            {option.label}
          </button>
        ))
      }
    </div>
  );
}