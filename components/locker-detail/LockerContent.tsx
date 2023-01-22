import './LockerContent.scss';
import Link from 'next/link';
import { LockerDataType } from '../../types/lockersType';
import NewRumor from '../rumors/NewRumor';
import LockerFeatures from './LockerFeatures';

const LockerContent = (props: LockerDataType) => {
  const { student, schoolName, classroom, createdAt, _id } = props;

  const date = new Date(createdAt).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="user-locker_content">
      <section>
        <h2>Student Information</h2>
        <div>
          <h2>{student}</h2>
          <h4>
            {schoolName} - <span>{classroom}</span>{' '}
          </h4>
        </div>
        <div>
          <h5>Your locker was created at {date}</h5>
        </div>
      </section>
      <section>
        <LockerFeatures />
      </section>

      <section>
        <NewRumor />
        <button>
          <Link href={`/lockers/${_id}/rumors`}>My spread rumors</Link>
        </button>
      </section>
    </main>
  );
};
export default LockerContent;
