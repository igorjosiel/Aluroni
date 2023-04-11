import stylesTheme from 'styles/Theme.module.scss';
import menu from 'data/menu.json';
import styles from './Start.module.scss';
import ourHouse from 'assets/our_house.png';

export default function Start() {
  let recommendedDishes = [...menu];

  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0,3);

  return (
    <section>
      <h3 className={stylesTheme.title}>Recomendações da cozinha</h3>
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
      <h3 className={stylesTheme.title}>Nossa casa</h3>
      <div className={styles.ourHouse}>
        <img src={ourHouse} alt='Casa do aluroni' />
        <div className={styles.ourHouse__address}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}