import NewLocker from '../../components/lockers/NewLocker';
import Head from 'next/head';
import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';

const PopulateNewLocker = () => {
  return (
    <>
      <Head>
        <title>Populate a New Locker</title>
        <meta
          name="description"
          content="Create a new fully customize locker!"
        />
      </Head>
      <NewLocker />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const session = await getSession({ req: context.req });

  const id = session?.user?.id;

  if (session) {
    return {
      redirect: {
        destination: `/lockers/${id}`,
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default PopulateNewLocker;
