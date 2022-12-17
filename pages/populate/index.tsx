import NewLocker from '../../components/lockers/NewLocker';
import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';

const PopulateNewLocker = () => {
  return <NewLocker />;
};

export const getServerSideProps = async (context: any) => {
  const session = await getSession({ req: context.req });
  console.log(session);

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
