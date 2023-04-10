import menu from 'data/menu.json';
import styles from './Start.module.scss';

export default function Start() {
  let recommendedDishes = [...menu];

  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0,3);

  return (
    <section>
      <h3 className={styles.title}>Recomendações da cozinha</h3>
      <div className={styles.allRecommended}>
        {recommendedDishes.map(dishe => (
          <div key={dishe.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={dishe.photo} alt={dishe.title} />
            </div>
            <button className={styles.recommended__button}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}