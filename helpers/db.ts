import { MongoClient } from 'mongodb';
import { LockerDataType } from '../types/lockersType';
import { RumorType } from '../types/rumorsTypes';

type FilteredDocument<Document> = {
  [key: string]: Document | string | number | Date;
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
  filter: FilteredDocument<LockerDataType>
) => {
  const db = client.db();
  const result = await db.collection(collection).findOne(filter);
  return result;
};

export const insertOneDocument = async (
  client: MongoClient,
  collection: string,
  document: FilteredDocument<LockerDataType | RumorType>
) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};

export const getAllDocuments = async (
  client: MongoClient,
  collection: string
) => {
  const db = client.db();
  const lockersArray = await db.collection(collection).find().toArray();
  return lockersArray;
};
