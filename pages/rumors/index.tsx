import RumorList from '../../components/rumors/RumorList';
import { GetStaticProps } from 'next';
import { RumorType } from '../../types/rumorsTypes';
import NewRumor from '../../components/rumors/NewRumor';
import { useSession } from 'next-auth/react';
import { getAllRumors } from '../../helpers/api';
import Head from 'next/head';

const RumorsPageList = ({ allRumors }: { allRumors: RumorType[] }) => {
  const { data: session, status } = useSession();

  return (
    <>
      <Head>
        <title>All Rumors</title>
        <meta
          name="description"
          content="Check the latest rumors in your school ground."
        />
      </Head>
      {/* can be only visible when authenticated */}
      {session && status === 'authenticated' && <NewRumor />}
      <RumorList rumorList={allRumors} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allRumors = await getAllRumors();

  return {
    props: {
      allRumors: allRumors.map((rumor) => ({
        ...rumor,
        _id: rumor._id.toString(),
      })),
    },
    revalidate: 600,
  };
};

export default RumorsPageList;
