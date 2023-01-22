import { signOut } from 'next-auth/react';
import { useGlobalContext } from '../../context/globalContext';

const LockerSettings = () => {
  const { menuActive } = useGlobalContext();

  const signoutHandler = () => {
    signOut();
  };

  return (
    <>
      {' '}
      {menuActive === '4' && (
        <section>
          <div>
            <h2>Locker settings</h2>
            <h3>Settings Modal</h3>
            <p>Icon will be here</p>
            <button onClick={signoutHandler}>Sign out</button>
          </div>
        </section>
      )}
    </>
  );
};
export default LockerSettings;
