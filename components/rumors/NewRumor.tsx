import { useState } from 'react';
import { useSession } from 'next-auth/react';

const NewRumor = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { data: session } = useSession();

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    // add some validation
    if (!title || title.trim() === '' || !text || text.trim() === '') {
      console.log('Please provide all fields');
      return;
    }
    // this is a user id who wrote this rumor
    const userId = session?.user?.id;

    try {
      const response = await fetch('/api/rumors', {
        method: 'POST',
        body: JSON.stringify({
          userId,
          title,
          content: text,
          likes: 0,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setText('');
      setTitle('');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        throw new Error('Something went wrong!');
      }
    }
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
