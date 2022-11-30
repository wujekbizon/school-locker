import { MongoClient, ObjectId } from 'mongodb';

type FilteredDocument<T> = {
  [key: string]: T;
};

type LockerDocument = {
  email: string;
  password: string;
  student: string;
  createdAt: Date;
  title: string;
  img: string;
  school: string;
  classroom: string;
  privacy: string;
  _id: ObjectId;
};

export const connectToDatabase = async (dbName: string) => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.knuso.mongodb.net/${dbName}?retryWrites=true&w=majority`
  );
  return client;
};

export const findOneDocument = async (
  client: MongoClient,
  collection: string,
  filter: FilteredDocument<LockerDocument>
) => {
  const db = client.db();
  const result = await db.collection(collection).findOne(filter);
  return result;
};

export const insertOneDocument = async (
  client: MongoClient,
  collection: string,
  document: FilteredDocument<LockerDocument>
) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};
