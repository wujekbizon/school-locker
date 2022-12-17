import { LockerDataType } from '../../types/lockersType';
import LockerItem from '../lockers/LockerItem';

type Props = {
  lockers: LockerDataType[];
};

const LockerList = ({ lockers }: Props) => {
  return (
    <ul>
      {lockers.map((locker) => {
        return <LockerItem key={locker._id} {...locker} />;
      })}
    </ul>
  );
};
export default LockerList;
