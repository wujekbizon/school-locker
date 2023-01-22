import './LockerInfo.scss';
import Image from 'next/image';
import { cloudinaryLoader } from '../../helpers/cloudinary';

type Props = {
  title: string;
  img: string;
};
const LockerInfo = (props: Props) => {
  const { title, img } = props;

  return (
    <section className="locker-info">
      <div className="locker-title">
        <h1>{title}</h1>
      </div>

      <div className="locker-image_container">
        <Image
          src={img}
          alt={title}
          width={350}
          height={350}
          loader={cloudinaryLoader}
          priority
          className="locker-image"
        />
      </div>
    </section>
  );
};
export default LockerInfo;
