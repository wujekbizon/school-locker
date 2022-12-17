import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Protected = () => {
  const router = useRouter();
  const { status, data } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  useEffect(() => {
    if (status === 'unauthenticated') router.replace('/populate');

    if (status === 'authenticated') {
      console.log(data);
    }
  }, [status]);

  return <div>Welcome to your locker</div>;
};
export default Protected;
