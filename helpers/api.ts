import type { LockerDataType } from '../types/lockersType';
import type { RumorType } from '../types/rumorsTypes';
import { connectToDatabase, getAllDocuments } from './db';

// export const getAllLockers = async () => {
//   const response = await fetch('http://localhost:3000/api/lockers');
//   const { lockers }: { lockers: LockerDataType[] } = await response.json();
//   return lockers;
// };

export const getAllLockers = async () => {
  const client = await connectToDatabase('lockertest');
  const lockers = await getAllDocuments(client, 'lockers');
  return lockers;
};

export const getLockerById = async (id: string) => {
  const allLockers = await getAllLockers();
  return allLockers.find((locker) => locker._id.toString() === id);
};

export const getAllRumors = async () => {
  const response = await fetch('http://localhost:3000/api/rumors');
  const { rumors }: { rumors: RumorType[] } = await response.json();
  return rumors;
};

export const getRumorById = async (id: string) => {
  const allRumors = await getAllRumors();
  return allRumors.find((rumor) => rumor._id === id);
};
