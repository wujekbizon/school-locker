import Link from 'next/link';

const MainHeader = () => {
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
    </header>
  );
};
export default MainHeader;
