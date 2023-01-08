import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import LockerContent from '../../components/locker-detail/LockerContent';
import LockerInfo from '../../components/locker-detail/LockerInfo';
import LockerSettings from '../../components/locker-detail/LockerSettings';
import Head from 'next/head';
import { getLockerById, getAllLockers } from '../../helpers/api';
import { LockerDataType } from '../../types/lockersType';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface IParams extends ParsedUrlQuery {
  lockerId: string;
}

const LockerDetailPage = ({ locker }: { locker: LockerDataType }) => {
  const router = useRouter();
  const { status, data } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') router.replace('/populate');
  }, [status, router]);

  if (!locker) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'authenticated') {
    return (
      <>
        <Head>
          <title>{locker.title}</title>
          <meta
            name="description"
            content={`This is ${locker.student} portfolio locker.`}
          />
        </Head>
        <LockerInfo title={locker.title} img={locker.img} />
        <LockerContent {...locker} />
        <LockerSettings />
      </>
    );
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { lockerId } = context.params as IParams;

  const locker = await getLockerById(lockerId);

  return {
    props: {
      locker,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const lockers = await getAllLockers();

  const lockersPath = lockers.map((locker) => ({
    params: { lockerId: locker._id },
  }));

  return {
    paths: lockersPath,
    fallback: 'blocking',
  };
};

export default LockerDetailPage;
