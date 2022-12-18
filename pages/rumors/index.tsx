import RumorList from '../../components/rumors/RumorList';
import { rumorList } from '../../data/dummyRumors';
import { GetStaticProps } from 'next';
import { RumorType } from '../../types/rumorsTypes';
import FormRumor from '../../components/rumors/NewRumor';
import { useSession } from 'next-auth/react';

const RumorsPageList = ({ allRumors }: { allRumors: RumorType[] }) => {
  const { data: session, status } = useSession();

  return (
    <>
      <RumorList rumorList={allRumors} />
      {/* can be only visible when authenticated */}
      {session && status === 'authenticated' && <FormRumor />}
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      allRumors: rumorList,
    },
  };
};

export default RumorsPageList;
