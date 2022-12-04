import LockerList from '../../components/lockers/LockerList';
import { GetStaticProps } from 'next';
import { LockerDataType } from '../../types/lockersType';
import { getAllLockers } from '../../helpers/api';

const SchoolLockersPage = ({ lockers }: { lockers: LockerDataType[] }) => {
  return <LockerList items={lockers} />;
};
export default SchoolLockersPage;

export const getStaticProps: GetStaticProps = async () => {
  const allLockers = await getAllLockers();

  return {
    props: {
      lockers: allLockers,
    },
    revalidate: 1800,
  };
};
