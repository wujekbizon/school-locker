import { useState } from 'react';

const NewsmongerForm = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    // email validation
    if (!email || !email.includes('@') || email.trim() === '') {
      console.log('invalid email');
    }

    try {
      const response = await fetch('/api/newsmonger', {
        method: 'POST',
        body: JSON.stringify({
          email,
        }),
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

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <h2>Hey want to know a secret? Please register to our newsmonger</h2>
        <label htmlFor="email">Enter email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button>Register</button>
      </div>
    </form>
  );
};
export default NewsmongerForm;
