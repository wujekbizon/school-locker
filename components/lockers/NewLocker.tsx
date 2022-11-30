import React, { useState } from 'react';

import Image from 'next/image';

const NewLocker = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const onSumbitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // optional handle validation on client side
    if (
      !name ||
      name.trim() === '' ||
      !email ||
      !email.includes('@') ||
      email.trim() === '' ||
      !password ||
      password.trim().length < 8
    ) {
      console.log('Invalid Inputs');
      return;
    }

    // handle form submit
    if (isLogin) {
    } else {
      try {
        const response = await fetch('api/auth/signup', {
          method: 'POST',
          body: JSON.stringify({
            name,
            email,
            password,
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
          throw new Error('Something went wrong!');
        }
      }
    }
  };

  return (
    <section>
      <div>
        <h1>{isLogin ? 'Open Your Locker' : 'Create a New Locker'}</h1>
        {isLogin ? (
          <p>Open exisitng locker</p>
        ) : (
          <p>Create and customize your locker</p>
        )}
        <Image
          src="/images/l2.png"
          alt="customize locker"
          width={600}
          height={450}
          style={{ width: '60%', height: 'auto' }}
          priority
        />
      </div>
      <form onSubmit={onSumbitHandler}>
        {!isLogin && (
          <div>
            {' '}
            <label htmlFor="name">Student Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div>
          <label htmlFor="email">Student Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Student Password</label>
          <input
            type="password"
            id="password"
            autoComplete="on"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button>{isLogin ? 'Open Locker' : 'Create Locker'}</button>
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Create a new locker' : 'Login to exisitng locker'}
          </button>
        </div>
      </form>
    </section>
  );
};
export default NewLocker;
