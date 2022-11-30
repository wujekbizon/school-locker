import { NextApiResponse, NextApiRequest } from 'next';
import { hashPassword } from '../../../helpers/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    console.log(name);
    console.log(email);
    console.log(hashedPassword);
  }
};

export default handler;
