import { LockerItemType } from '../../types/lockersType';
import LockerItem from '../lockers/LockerItem';

type Props = {
  items: LockerItemType[];
};

const LockerList = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => {
        return <LockerItem key={item.id} {...item} />;
      })}
    </ul>
  );
};
export default LockerList;
