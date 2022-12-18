import { NextApiRequest, NextApiResponse } from 'next';
import {
  connectToDatabase,
  insertOneDocument,
  getAllDocuments,
  findOneDocument,
} from '../../../helpers/db';
import { ObjectId } from 'mongodb';
import { RumorType } from '../../../types/rumorsTypes';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { userId, title, content, likes, createdAt }: RumorType = req.body;

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
      createdAt,
    };

    let client;

    try {
      client = await connectToDatabase('lockertest');
    } catch (error) {
      res.status(500).json({ message: 'Connecting to database failed!' });
      return;
    }

    try {
      const result = await insertOneDocument(client, 'rumors', newRumor);
      console.log(result);
      res.status(201).json({ message: 'Rumor successfully has been created' });
    } catch (error) {
      res.status(500).json({ message: 'Insert data failed!' });
    }
  }
  if (req.method === 'GET') {
    let client;
    try {
      client = await connectToDatabase('lockertest');
    } catch (error) {
      res.status(500).json({ message: 'Connecting to database failed!' });
      return;
    }

    try {
      const rumorsArray = await getAllDocuments(client, 'rumors');
      const allRumors = rumorsArray.map((rumor) => {
        return rumor;
      });

      res.status(200).json({
        rumors: allRumors,
      });
    } catch (error) {
      res.status(500).json({ message: 'Getting data failed' });
    }
  }

  if (req.method === 'DELETE') {
    const { _id } = req.body;
    const rumorId = new ObjectId(_id);

    console.log(rumorId);
    if (!_id) {
      res.status(500).json({ message: 'No rumor found!' });
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
      const foundedRummor = await findOneDocument(client, 'rumors', {
        _id: rumorId,
      });
      console.log(foundedRummor);
      res.status(201).json({ message: 'Successfually deleted rumor' });
    } catch (error) {
      res.status(500).json({ message: 'Delete rumor failed!' });
    }
  }
};

export default handler;
