import styles from '@styles/browse.module.scss';
import {Header, ProfileSelection} from '@components';

const Browse = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ProfileSelection />
    </div>
  );
};
export default Browse;
