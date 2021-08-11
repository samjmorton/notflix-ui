import styles from './ProfileSelection.module.scss';
import Image from 'next/image';
import {useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


export const ProfileSelection: React.FC<IProps> = ({manage}) => {
  const {profile} = useSelector(({user}: RootState) => user);

  return (
    <div className={styles.profileSelectionContainer}>
      <div className={styles.profileContainer}>
        {profile?.accounts.map(({name, profileImage}) => (
          <div key={name} className={styles.profile}>
            <div className={`${styles.icon} ${manage && styles.manageIcon}`} >
              <Image src={profileImage} layout="fill" />
              <div className={styles.editIconWrapper}>
                {manage && <FontAwesomeIcon icon={faEdit} />}
              </div>
            </div>
            <div className={styles.name}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export interface IProps {
  manage?: boolean
}
