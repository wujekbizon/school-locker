import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase, insertOneDocument } from '../../helpers/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email }: { email: string } = req.body;

    if (!email || !email.includes('@') || email.trim() === '') {
      res.status(422).json({ message: 'Invalid inputs' });
      return;
    }

    let client;

    try {
      client = await connectToDatabase('lockertest');
    } catch (error) {
      res.status(500).json({ message: 'Connecting to database failed!' });
      return;
    }

    try {
      const result = await insertOneDocument(client, 'newsmonger', { email });
      console.log(result);
      res.status(200).json({ message: 'Email added with success!' });
    } catch (error) {
      res.status(500).json({ message: 'Insert data failed!' });
    }
  }
};

export default handler;
