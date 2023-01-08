import LockerList from '../../components/lockers/LockerList';
import { GetStaticProps } from 'next';
import { LockerDataType } from '../../types/lockersType';
import { getAllLockers } from '../../helpers/api';
import Head from 'next/head';

const SchoolLockersPage = ({ lockers }: { lockers: LockerDataType[] }) => {
  return (
    <>
      <Head>
        <title>All Lockers</title>
        <meta
          name="description"
          content="Browse a huge list of people portfolio lockers."
        />
      </Head>
      <LockerList lockers={lockers} />
    </>
  );
};
export default SchoolLockersPage;

export const getStaticProps: GetStaticProps = async () => {
  const allLockers = await getAllLockers();

  return {
    props: {
      lockers: allLockers.map((locker) => ({
        ...locker,
        createdAt: locker.createdAt.toString(),
        _id: locker._id.toString(),
      })),
    },
    revalidate: 1800,
  };
};
