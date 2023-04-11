import { useParams, useNavigate } from 'react-router-dom';
import styles from './Dish.module.scss';
import menu from 'data/menu.json';
import TagsDish from 'components/TagsDish';

export default function Dish() {
  const { id } = useParams();

  const navigate = useNavigate();

  const dish = menu.find(item => item.id === Number(id));

  if (!dish) {
    return '';
  }

  return (
    <>
      <button className={styles.goBack} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>
          {dish.title}
        </h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>
            {dish.description}
          </p>
        </div>
        <TagsDish {...dish} />
      </section>
    </>
  );
}