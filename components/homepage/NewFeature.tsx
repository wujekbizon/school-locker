import './NewFeature.scss';

type NewFeatureProps = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

const NewFeature = ({ imgUrl, title, subtitle }: NewFeatureProps) => (
  <div className="new-feature_container">
    <div className="new-feature_image-container">
      <img src={imgUrl} alt="icon" />
    </div>
    <h1 className="new-feature_container-title">{title}</h1>
    <p className="new-feature_container-subtitle">{subtitle}</p>
  </div>
);
export default NewFeature;
