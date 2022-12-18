import { useState } from 'react';

const NewRumor = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(text, title);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="text">Rumor</label>
      <textarea
        id="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button type="submit">Add rumor</button>
    </form>
  );
};
export default NewRumor;
