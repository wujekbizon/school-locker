import { RumorType } from '../../types/rumorsTypes';

const RumorItem = (props: RumorType) => {
  const { userId, content, id, likes, date, title } = props;

  const formattedDate = new Date(date).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <article>
      <div>
        <h3>{title} </h3>
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
