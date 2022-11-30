import LockerList from '../../components/lockers/LockerList';
import { getAllLockers } from '../../data/dummydata';
import { LockerItemType } from '../../types/lockersType';

const SchoolLockersPage = ({ lockers }: { lockers: LockerItemType[] }) => {
  return <LockerList items={lockers} />;
};
export default SchoolLockersPage;

export const getStaticProps = () => {
  const allLockers = getAllLockers();

  return {
    props: {
      lockers: allLockers,
    },
  };
};
