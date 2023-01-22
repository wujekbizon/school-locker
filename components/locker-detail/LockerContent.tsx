import './LockerContent.scss';
import Link from 'next/link';
import { LockerDataType } from '../../types/lockersType';
import NewRumor from '../rumors/NewRumor';
import LockerFeatures from './LockerFeatures';
import { useGlobalContext } from '../../context/globalContext';
import { motion } from 'framer-motion';
import Title from '../homepage/Title';
import { staggerContainer, titleVariants } from '../../utils/motion';

const LockerContent = (props: LockerDataType) => {
  const { student, schoolName, classroom, createdAt, _id, img } = props;
  const { menuActive } = useGlobalContext();

  const date = new Date(createdAt).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      {menuActive === '0' && (
        <section className="user-locker_content">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="user-locker-container"
          >
            <div className="animated_title">
              <Title title="Student Information" />
            </div>

            <div className="user-locker_info">
              <motion.div
                variants={titleVariants('left', 10)}
                className="user-locker-left"
              >
                <h2>{student}</h2>
                <h4>
                  {schoolName} - <span>{classroom}</span>{' '}
                </h4>

                <h5>You are a member since {date}</h5>
              </motion.div>

              <div className="user-locker-right"></div>
            </div>
          </motion.div>
        </section>
      )}

      {menuActive === '1' && (
        <section>
          <LockerFeatures />
        </section>
      )}

      {menuActive === '2' && (
        <section>
          <NewRumor />
          <button>
            <Link href={`/lockers/${_id}/rumors`}>My spread rumors</Link>
          </button>
        </section>
      )}
    </>
  );
};
export default LockerContent;
