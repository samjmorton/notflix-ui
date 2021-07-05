import Image from 'next/image';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <a className={styles.logo}>
        <Image priority src="/images/logo.png" height={25} width={90} alt="Netflix"></Image>
      </a>
    </div>
  );
};
