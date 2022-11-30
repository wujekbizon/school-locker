import Image from 'next/image';
import Link from 'next/link';
import { LockerItemType } from '../../types/lockersType';

const LockerItem = (props: LockerItemType) => {
  const { student, school, classroom, privacy, img, createdAt, title } = props;

  const date = new Date(createdAt).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <li>
      <div>
        <div>
          <h1>{title}</h1>
          <Image src={img} alt="my locker" width={450} height={500} />
        </div>

        <div>
          {privacy === 'public' ? (
            <>
              <div>
                <h4>{school}</h4>
                <p>{date}</p>
              </div>
              <div>
                <h1>{student}</h1>
                <h3>{classroom}</h3>
              </div>
              <Link href={`/lockers/${title}`}>Open</Link>
            </>
          ) : (
            <h3>Warning! You not allowed!</h3>
          )}
        </div>
      </div>
    </li>
  );
};
export default LockerItem;
