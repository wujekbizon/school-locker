export const getAllLockers = async () => {
  const response = await fetch('http://localhost:3000/api/lockers');
  const { lockers } = await response.json();
  return lockers;
};
