import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Protected = () => {
  const router = useRouter();
  const { status, data } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') router.replace('/populate');
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return <div>Welcome to your locker</div>;
};
export default Protected;
