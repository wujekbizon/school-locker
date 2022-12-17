import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const MainHeader = () => {
  const { data: session, status } = useSession();
  return (
    <header>
      <div>
        <Link href="/">SCHOOL LOCKER</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/rumors">Spread a rumor</Link>
          </li>
          <li>
            <Link href="/lockers">All lockers</Link>
          </li>
          <li>
            <Link href="/populate">New and existing lockers</Link>
          </li>
        </ul>
      </nav>

      {!session && status === 'unauthenticated' && (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </header>
  );
};
export default MainHeader;
