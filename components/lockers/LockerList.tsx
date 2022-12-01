import { LockerDataType } from '../../types/lockersType';
import LockerItem from '../lockers/LockerItem';

type Props = {
  items: LockerDataType[];
};

const LockerList = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => {
        return <LockerItem key={item._id} {...item} />;
      })}
    </ul>
  );
};
export default LockerList;
