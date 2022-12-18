import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase, insertOneDocument } from '../../../helpers/db';
import { RumorType } from '../../../types/rumorsTypes';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { userId, title, content, likes }: RumorType = req.body;

    // server-side validation

    if (
      !userId ||
      !title ||
      title.trim() === '' ||
      !content ||
      content.trim() === ''
    ) {
      res.status(422).json({
        message: 'Cannot send empty fields!',
      });
      return;
    }

    const newRumor = {
      userId,
      title,
      content,
      likes,
    };

    let client;

    try {
      client = await connectToDatabase('lockertest');
    } catch (error) {
      res.status(500).json({ message: 'Connecting to database failed!' });
      return;
    }

    try {
      // connecting to db

      const result = await insertOneDocument(client, 'rumors', newRumor);
      console.log(result);
      res.status(201).json({ message: 'Rumor successfully has been created' });
    } catch (error) {
      res.status(500).json({ message: 'Insert data failed!' });
    }
  }
};

export default handler;
