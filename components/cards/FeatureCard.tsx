import './FeatureCard.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

type FeatureCardProps = {
  id: string;
  url: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
};

const FeatureCard = ({
  id,
  url,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}: FeatureCardProps) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={
        active === id
          ? 'feature-active feature_card-container'
          : 'feature_card-container'
      }
      onClick={() => handleClick(id)}
    >
      <img src={imgUrl} alt={title} className="feature_card-image" />
      {active !== id ? (
        <h3 className="feature_card-title gradient_preview">{title}</h3>
      ) : (
        <div className="active_title-container">
          <div className="active_image-container glassmorphism">
            <img
              src="/images/headset.svg"
              alt="headset"
              className="explore-image"
            />
          </div>
          <Link href={url}>
            <p className="active-content">Explore Feature</p>
          </Link>
          <h2 className="active-title">{title}</h2>
        </div>
      )}
    </motion.div>
  );
};
export default FeatureCard;
