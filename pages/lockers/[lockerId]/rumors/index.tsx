import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import {
  getAllLockers,
  getAllRumors,
  getLockerById,
} from '../../../../helpers/api';
import { LockerDataType } from '../../../../types/lockersType';
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
  console.log(lockerId);

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
    props: { lockerId, rumors },
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
