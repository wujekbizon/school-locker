import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const LockerSettings = () => {
  const router = useRouter();

  const signoutHandler = () => {
    signOut();
  };

  return (
    <section>
      <div>
        <h2>Locker settings</h2>
        <h3>Settings Modal</h3>
        <p>Icon will be here</p>
        <button onClick={signoutHandler}>Sign out</button>
      </div>
    </section>
  );
};
export default LockerSettings;
