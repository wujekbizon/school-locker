import './UserLocker.scss';
import LockerContent from '../components/locker-detail/LockerContent';
import LockerInfo from '../components/locker-detail/LockerInfo';
import LockerSettings from '../components/locker-detail/LockerSettings';
import type { LockerDataType } from '../types/lockersType';

const UserLocker = (props: LockerDataType) => {
  return (
    <section className="user-locker">
      <LockerInfo title={props.title} img={props.img} />
      <LockerContent {...props} />
      <LockerSettings />
    </section>
  );
};
export default UserLocker;
