import styles from './ProfileSelection.module.scss';
import Image from 'next/image';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';

export const ProfileSelection: React.FC<IProps> = () => {
  const {profile} = useSelector(({user}: RootState) => user);

  return (
    <div className={styles.profileSelectionContainer}>
      <div className={styles.title}>Who's Watching</div>
      <div className={styles.profileContainer}>
        {profile?.accounts.map(({name, profileImage}) => (
          <div key={name} className={styles.profile}>
            <div className={styles.icon}>
              <Image src={profileImage} layout="fill" />
            </div>
            <div className={styles.name}>{name}</div>
          </div>
        ))}
      </div>
      <button className={styles.manage} onClick={() => console.log('MANAGE PROFILES')}>
        MANAGE PROFILES
      </button>
    </div>
  );
};

export interface IProps {}
