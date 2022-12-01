import { NextApiResponse, NextApiRequest } from 'next';
import { hashPassword } from '../../../helpers/auth';
import {
  connectToDatabase,
  findOneDocument,
  insertOneDocument,
} from '../../../helpers/db';
import { LockerDataType } from '../../../types/lockersType';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {
      student,
      email,
      password,
      privacy,
      classroom,
      schoolName,
      title,
      img,
    }: LockerDataType = req.body;
    const hashedPassword = await hashPassword(password);

    const lockerTitle = `${student} Locker`;

    const newLocker = {
      email,
      password: hashedPassword,
      createdAt: new Date(),
      title: title || lockerTitle,
      student,
      img: img || '/images/i7.png',
      schoolName: schoolName || 'Test School',
      classroom: classroom || 'Test Classroom',
      privacy,
    };

    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 8 ||
      !student ||
      student.trim() === ''
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
      const existingLocker = await findOneDocument(client, 'lockers', {
        email: email,
      });

      if (existingLocker) {
        res.status(422).json({ message: 'Locker exist already!' });
        return;
      }

      await insertOneDocument(client, 'lockers', newLocker);
      res.status(201).json({ message: 'Created Locker!' });
    } catch (error) {
      res.status(500).json({ message: 'Insert data failed!' });
    }
  }
};

export default handler;
