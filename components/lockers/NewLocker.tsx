import React, { useState } from 'react';

import Image from 'next/image';

const NewLocker = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section>
      <div>
        <h1>Create a New Locker</h1>
        <p>Create and customize your locker.</p>
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
        <label htmlFor="name">Student Name</label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Student Email</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Student Password</label>
        <input
          type="password"
          id="password"
          autoComplete="on"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Populate Locker</button>
      </form>
    </section>
  );
};
export default NewLocker;
