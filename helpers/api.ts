import { LockerDataType } from '../types/lockersType';

export const getAllLockers = async () => {
  const response = await fetch('http://localhost:3000/api/lockers');
  const { lockers }: { lockers: LockerDataType[] } = await response.json();
  return lockers;
};

export const getLockerById = async (id: string) => {
  const allLockers = await getAllLockers();
  return allLockers.find((locker) => locker._id === id);
};
