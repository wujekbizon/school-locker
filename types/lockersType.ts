import { ObjectId } from 'mongodb';

export type LockerDataType = {
  _id: ObjectId | number;
  student: string;
  email: string;
  password: string;
  schoolName: string;
  title: string;
  classroom: string;
  privacy: string;
  img: string;
  createdAt: string;
};
