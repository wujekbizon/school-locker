import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import './MainHeader.scss';

const MainHeader = () => {
  const { data: session, status } = useSession();
  // temp isAdmin flag
  const isAdmin = false;

  return (
    <header className="header-wrapper">
      <div>
        <Link href="/">SCHOOL LOCKER</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/rumors">Rumors</Link>
          </li>
          <li>
            <Link href="/lockers">All lockers</Link>
          </li>
          <li>
            <Link href="/populate">New and existing lockers</Link>
          </li>
          <li>
            <Link href="/wolfpad">Wolfpad - Let&apos;s Code!</Link>
          </li>
          <li>
            <Link href="/admin">Admin panel</Link>
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
