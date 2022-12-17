import Image from 'next/image';
import Link from 'next/link';
import { cloudinaryLoader } from '../../helpers/cloudinary';
import { LockerDataType } from '../../types/lockersType';
import { useSession } from 'next-auth/react';

const LockerItem = (props: LockerDataType) => {
  const {
    student,
    schoolName,
    classroom,
    privacy,
    img,
    createdAt,
    title,
    _id,
  } = props;

  const { status, data: session } = useSession();

  const date = new Date(createdAt).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // const lockerId = title.toLowerCase().split(' ').join('');

  return (
    <li>
      <div>
        <div>
          <h1>{title}</h1>
          <Image
            src={img}
            alt="my locker"
            width={150}
            height={150}
            loader={cloudinaryLoader}
            priority
          />
        </div>

        <div>
          {privacy === 'public' ? (
            <>
              <div>
                <h4>{schoolName}</h4>
                <p>{date}</p>
              </div>
              <div>
                <h1>{student}</h1>
                <h3>{classroom}</h3>
              </div>

              <Link href={`/lockers/${_id}`}>Open</Link>
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
