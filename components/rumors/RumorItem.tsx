import { RumorType } from '../../types/rumorsTypes';

const RumorItem = (props: RumorType) => {
  const { userId, content, _id, likes, createdAt, title } = props;

  const formattedDate = new Date(createdAt).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <article>
      <div>
        <h3>{title} </h3>
        <span>Rumor ID: {_id}</span>
        <h4>createdBy:{userId}</h4>
        <p>{formattedDate}</p>
      </div>
      <div>{content}</div>
      <div>LIKES: {likes}</div>
      <button>Delete Rumor</button>
    </article>
  );
};
export default RumorItem;
