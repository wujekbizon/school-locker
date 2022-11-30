import { LockerItemType } from '../types/lockersType';

const DUMMY_DATA: LockerItemType[] = [
  {
    id: 1,
    school: 'HighSchool 1',
    student: 'Greg Wolfinger',
    title: "Bizon's Death Locker",
    classroom: '3A',
    privacy: 'public',
    img: '/images/l7.png',
    createdAt: '08-11-1996',
  },
  {
    id: 2,
    school: 'HighSchool 1',
    student: 'Mr Poppy',
    title: 'The Locker',
    classroom: '8D',
    privacy: 'public',
    img: '/images/l2.png',
    createdAt: '01-09-2007',
  },
  {
    id: 3,
    school: 'Best School',
    student: 'Karen Kurosaki',
    title: 'My Bee Locker',
    classroom: '4B',
    privacy: 'public',
    img: '/images/l9.png',
    createdAt: '12-04-2020',
  },
  {
    id: 4,
    school: 'Unknown',
    student: 'Stranger Surfer',
    title: 'unknown',
    classroom: 'not',
    privacy: 'private',
    img: '/images/laa.png',
    createdAt: '03-03-2013',
  },
];

export const getAllLockers = () => {
  return DUMMY_DATA;
};
