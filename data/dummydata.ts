import { LockerDataType } from '../types/lockersType';

const DUMMY_DATA: LockerDataType[] = [
  {
    _id: 1,
    schoolName: 'HighSchool 1',
    email: '',
    password: '',
    student: 'Greg Wolfinger',
    title: "Bizon's Death Locker",
    classroom: '3A',
    privacy: 'public',
    img: '/images/l7.png',
    createdAt: '08-11-1996',
  },
  {
    _id: 2,
    schoolName: 'HighSchool 1',
    student: 'Mr Poppy',
    email: '',
    password: '',
    title: 'The Locker',
    classroom: '8D',
    privacy: 'public',
    img: '/images/l2.png',
    createdAt: '01-09-2007',
  },
  {
    _id: 3,
    schoolName: 'Best School',
    student: 'Karen Kurosaki',
    email: '',
    password: '',
    title: 'My Bee Locker',
    classroom: '4B',
    privacy: 'public',
    img: '/images/l9.png',
    createdAt: '12-04-2020',
  },
  {
    _id: 4,
    schoolName: 'Unknown',
    student: 'Stranger Surfer',
    email: '',
    password: '',
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
