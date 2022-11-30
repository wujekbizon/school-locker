import React, { use, useState } from 'react';

import Image from 'next/image';

const NewLocker = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [privacy, setPrivacy] = useState('public');
  const [schoolName, setSchoolName] = useState('');
  const [classroom, setClassroom] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const resetFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setSchoolName('');
    setClassroom('');
    setTitle('');
  };

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
            privacy,
            schoolName,
            classroom,
            title,
            image,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        resetFields();
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
            <label htmlFor="name">Student Name</label>
            <input
              type="text"
              id="name"
              placeholder="field required"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            placeholder="field required"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Locker Password</label>
          <input
            type="password"
            id="password"
            autoComplete="on"
            required
            placeholder="field required"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {!isLogin && (
          <div>
            <label htmlFor="privacy">Security</label>
            <select
              name="privacy"
              id="privacy"
              onChange={(e) => setPrivacy(e.target.value)}
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        )}
        {!isLogin && (
          <div>
            <label htmlFor="title">Locker title</label>
            <input
              type="text"
              id="title"
              placeholder="field optional"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        )}
        {!isLogin && (
          <div>
            <label htmlFor="school">School Name</label>
            <input
              type="text"
              id="school"
              placeholder="field optional"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </div>
        )}
        {!isLogin && (
          <div>
            <label htmlFor="classroom">Classroom</label>
            <input
              type="text"
              id="classroom"
              placeholder="field optional"
              value={classroom}
              onChange={(e) => setClassroom(e.target.value)}
            />
          </div>
        )}
        {!isLogin && (
          <div>
            <label htmlFor="image">Avatar Image</label>
            <input
              type="file"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        )}

        <div>
          <button>{isLogin ? 'Open Locker' : 'Create Locker'}</button>
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Create a new locker' : 'Login to exisitng locker'}
          </button>
        </div>
      </form>
      <div>
        <p>
          In order to create a new locker , you need to provide all required
          fields. All the optional fields you can always customize later.
        </p>
      </div>
    </section>
  );
};
export default NewLocker;
