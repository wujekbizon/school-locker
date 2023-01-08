import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getAllLockers, getAllRumors } from '../../../../helpers/api';

import { RumorType } from '../../../../types/rumorsTypes';
import RumorList from '../../../../components/rumors/RumorList';

interface IParams extends ParsedUrlQuery {
  lockerId: string;
}

type Props = {
  lockerId: string;
  rumors: RumorType[];
};

const LockerAllRumorsPage = ({ lockerId, rumors }: Props) => {
  const lockerRumors = rumors.filter((rumor) => rumor.userId === lockerId) ?? [
    {
      message: 'You got 0 rumors',
    },
  ];

  return <RumorList rumorList={lockerRumors} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { lockerId } = context.params as IParams;

  const rumors = await getAllRumors();

  return {
    props: {
      lockerId,
      rumors: rumors.map((rumor) => ({
        ...rumor,
        _id: rumor._id.toString(),
      })),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const lockers = await getAllLockers();

  const lockersPath = lockers.map((locker) => ({
    params: { lockerId: locker._id.toString() },
  }));

  return {
    paths: lockersPath,
    fallback: false,
  };
};

export default LockerAllRumorsPage;
