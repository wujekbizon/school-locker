import Image from 'next/image';
import { cloudinaryLoader } from '../../helpers/cloudinary';

type Props = {
  title: string;
  img: string;
};
const LockerInfo = (props: Props) => {
  const { title, img } = props;

  return (
    <section>
      <div>
        <h1>{title}</h1>
        <div>
          <Image
            src={img}
            alt={title}
            width={150}
            height={150}
            loader={cloudinaryLoader}
          />
        </div>
      </div>
    </section>
  );
};
export default LockerInfo;
