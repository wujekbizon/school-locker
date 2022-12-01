import { NextApiResponse, NextApiRequest } from 'next';
import { connectToDatabase, getAllDocuments } from '../../../helpers/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    let client;

    try {
      client = await connectToDatabase('lockertest');
    } catch (error) {
      res.status(500).json({ message: 'Connecting to database failed!' });
      return;
    }

    try {
      const lockersArray = await getAllDocuments(client, 'lockers');
      const newLockers = lockersArray.map((locker) => {
        const { password, email, ...rest } = locker;
        return rest;
      });

      res.status(200).json({
        lockers: newLockers,
      });
    } catch (error) {
      res.status(500).json({ message: 'Getting data failed' });
    }
  }
};

export default handler;
