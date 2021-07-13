import styles from '@styles/browse.module.scss';
import {Header, ProfileSelection} from '@components';
import {useDispatch} from 'react-redux';
import {useEffectOnce} from '@utilities/useEffectOnce';
import {getUser} from '@redux/actions/getUserAction';

const Browse = () => {
  const dispatch = useDispatch();
  useEffectOnce(() => {
    dispatch(getUser());
  });

  return (
    <div className={styles.container}>
      <Header />
      <ProfileSelection />
    </div>
  );
};

export default Browse;
