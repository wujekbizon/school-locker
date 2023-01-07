import './Title.scss';

const Title = ({ title }: { title: string }) => {
  return (
    <div className="title-wrapper">
      <div className="divider" />
      <h2>{title}</h2>
    </div>
  );
};
export default Title;
