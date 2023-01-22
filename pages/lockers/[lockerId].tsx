import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { UserLocker } from '../../sections';
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
        <UserLocker {...locker} />
      </>
    );
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { lockerId } = context.params as IParams;

  const locker = await getLockerById(lockerId);

  return {
    props: {
      locker: {
        ...locker,
        _id: locker?._id.toString(),
        createdAt: locker?.createdAt.toString(),
      },
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const lockers = await getAllLockers();

  const lockersPath = lockers.map((locker) => ({
    params: { lockerId: locker._id.toString() },
  }));

  return {
    paths: lockersPath,
    fallback: 'blocking',
  };
};

export default LockerDetailPage;
