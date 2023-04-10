import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import styles from './Ordination.module.scss';
import options from './options.json';
import { IOrdinationProps } from './Ordination.types';

export default function Ordination({ordination, setOrdination}: IOrdinationProps) {
  const [open, setOpen] = useState(false);

  const ordinationName = ordination && options.find(option => option.value === ordination)?.name;

  return (
    <button
      className={classNames({
        [styles.ordination]: true,
        [styles['ordination--active']]: ordination !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{ordinationName || 'Ordenar Por'}</span>
      {open ? <MdKeyboardArrowUp size={22} /> : <MdKeyboardArrowDown size={22} />}
      <div className={classNames({
        [styles.ordination__options]: true,
        [styles['ordination__options--active']]: open,
      })}>
        {options.map(option => (
          <div
            key={option.value}
            className={styles.ordination__option}
            onClick={() => setOrdination(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}