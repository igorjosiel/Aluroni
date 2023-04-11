import { useState, useEffect } from 'react';
import menu from 'data/menu.json';
import Item from './Item';
import styles from './Items.module.scss';
import { IItemsProps, IOrdinationType } from './Items.types';
import { Menu } from 'types/Dish';

export default function Items(props: IItemsProps) {
  const [list, setList] = useState(menu);
  
  const { searchEngine, filter, ordination } = props;

  function testSearch(title: string) {
    const regex = new RegExp(searchEngine, 'i');

    return regex.test(title);
  }

  function testFilter(id: number) {
    if(filter !== null) return filter === id;

    return true;
  }

  function orderBy(newList: Menu, ordinationType: IOrdinationType) {
    return newList.sort((item1, item2) => item1[ordinationType] > item2[ordinationType] ? 1 : -1);
  }

  function order(newList: Menu) {
    switch(ordination) {
    case 'porcao': return orderBy(newList, 'size');
    case 'qtdPessoas': return orderBy(newList, 'serving');
    case 'preco': return orderBy(newList, 'price');

    default: return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));

    setList(order(newList));
  }, [searchEngine, filter, ordination]);

  return (
    <div className={styles.items}>
      {list.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}