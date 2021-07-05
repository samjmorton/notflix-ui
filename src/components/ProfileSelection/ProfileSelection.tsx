import styles from './ProfileSelection.module.scss';
import Image from 'next/image';

const profiles = [{name: 'sam'}, {name: 'kathryn'}, {name: 'steve'}];

export const ProfileSelection: React.FC<IProps> = () => (
  <div className={styles.profileSelectionContainer}>
    <div className={styles.title}>Who's Watching</div>
    <div className={styles.profileContainer}>
      {profiles.map(({name}) => (
        <div key={name} className={styles.profile}>
          <div className={styles.icon}>
            <Image src="/images/profile.png" layout="fill" />
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

export interface IProps {}
