import { RumorType } from '../../types/rumorsTypes';

const RumorItem = (props: RumorType) => {
  const { userId, content, _id, likes, createdAt, title } = props;

  const onClickDelete: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    try {
      const response = await fetch('/api/rumors', {
        method: 'DELETE',
        body: JSON.stringify({ _id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

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
      <button type="button" onClick={onClickDelete}>
        Delete Rumor
      </button>
    </article>
  );
};
export default RumorItem;
