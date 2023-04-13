import styles from './GoBackButton.module.scss';
import { IGoBackButtonProps } from './GoBackButton.types';

export default function GoBackButton({ navigate }: IGoBackButtonProps) {
  return (
    <button className={styles.goBack} onClick={navigate}>
      {'< Voltar'}
    </button>
  );
}