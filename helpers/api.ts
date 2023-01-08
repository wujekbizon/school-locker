import { connectToDatabase, getAllDocuments } from './db';

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
  const client = await connectToDatabase('lockertest');
  const rumors = await getAllDocuments(client, 'rumors');
  return rumors;
};

export const getRumorById = async (id: string) => {
  const allRumors = await getAllRumors();
  return allRumors.find((rumor) => rumor._id.toString() === id);
};
