import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import LockerContent from '../../components/locker-detail/LockerContent';
import LockerInfo from '../../components/locker-detail/LockerInfo';
import LockerSettings from '../../components/locker-detail/LockerSettings';

import { getLockerById, getAllLockers } from '../../helpers/api';
import { LockerDataType } from '../../types/lockersType';

interface IParams extends ParsedUrlQuery {
  lockerId: string;
}

const LockerDetailPage = ({ locker }: { locker: LockerDataType }) => {
  if (!locker) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <LockerInfo title={locker.title} img={locker.img} />
      <LockerContent {...locker} />
      <LockerSettings />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { lockerId } = context.params as IParams;

  const locker = await getLockerById(lockerId);
  console.log(locker);

  return {
    props: {
      locker,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const lockers = await getAllLockers();

  const lockersPath = lockers.map((locker) => ({
    params: { lockerId: locker._id },
  }));

  console.log(lockersPath);
  return {
    paths: lockersPath,
    fallback: false,
  };
};

export default LockerDetailPage;
