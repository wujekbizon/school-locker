import { RumorType } from '../../types/rumorsTypes';
import RumorItem from './RumorItem';

type Props = {
  rumorList: RumorType[];
};

const RumorList = ({ rumorList }: Props) => {
  return (
    <ul>
      {rumorList.map((rumor) => {
        return <RumorItem key={rumor.id} {...rumor} />;
      })}
    </ul>
  );
};
export default RumorList;
