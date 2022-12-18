import RumorList from '../../components/rumors/RumorList';
import { rumorList } from '../../data/dummyRumors';
import { GetStaticProps } from 'next';
import { RumorType } from '../../types/rumorsTypes';
import NewRumor from '../../components/rumors/NewRumor';
import { useSession } from 'next-auth/react';
import { getAllRumors } from '../../helpers/api';

const RumorsPageList = ({ allRumors }: { allRumors: RumorType[] }) => {
  const { data: session, status } = useSession();

  return (
    <>
      <RumorList rumorList={allRumors} />
      {/* can be only visible when authenticated */}
      {session && status === 'authenticated' && <NewRumor />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allRumors = await getAllRumors();

  return {
    props: {
      allRumors,
    },
  };
};

export default RumorsPageList;
