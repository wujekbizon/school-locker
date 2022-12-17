import RumorList from '../../components/rumors/RumorList';
import { rumorList } from '../../data/dummyRumors';
import { GetStaticProps } from 'next';
import { RumorType } from '../../types/rumorsTypes';

const RumorsPageList = ({ allRumors }: { allRumors: RumorType[] }) => {
  return <RumorList rumorList={allRumors} />;
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      allRumors: rumorList,
    },
  };
};

export default RumorsPageList;
