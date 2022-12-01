import LockerList from '../../components/lockers/LockerList';
import { getAllLockers } from '../../data/dummydata';
import { LockerDataType } from '../../types/lockersType';

const SchoolLockersPage = ({ lockers }: { lockers: LockerDataType[] }) => {
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
