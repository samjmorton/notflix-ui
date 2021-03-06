import styles from '@styles/browse.module.scss';
import {Header, ProfileSelection} from '@components';
import {useDispatch} from 'react-redux';
import {useEffectOnce} from '@utilities/useEffectOnce';
import {getUser} from '@redux/actions/getUserAction';
import Link from 'next/link';

const Browse = () => {
  const dispatch = useDispatch();

  useEffectOnce(() => {
    dispatch(getUser());
  });

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.title}>Who's Watching?</div>
        <ProfileSelection />
        <div className={styles.manage}>
          <Link href="/manageProfiles">
            MANAGE PROFILES
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Browse;
