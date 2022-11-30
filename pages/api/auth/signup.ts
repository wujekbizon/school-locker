import { NextApiResponse, NextApiRequest } from 'next';
import { hashPassword } from '../../../helpers/auth';
import { connectToDatabase } from '../../../helpers/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    const hashedPassword = await hashPassword(password);

    const newLocker = {
      email,
      name,
      password: hashedPassword,
      createdAt: new Date(),
    };

    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 8 ||
      !name ||
      name.trim() === ''
    ) {
      res.status(422).json({
        message: 'Invalid input - password must be at leat 8 characters long.',
      });
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
      const db = client.db();
      const existingLocker = await db
        .collection('lockers')
        .findOne({ email: email });

      if (existingLocker) {
        res.status(422).json({ message: 'Locker exist already!' });
        return;
      }

      await db.collection('lockers').insertOne(newLocker);
      res.status(201).json({ message: 'Created Locker!' });
    } catch (error) {
      res.status(500).json({ message: 'Insert data failed!' });
    }
  }
};

export default handler;
