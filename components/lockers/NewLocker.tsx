import React, { useState } from 'react';
import Image from 'next/image';
import { cloudinaryLoader } from '../../helpers/cloudinary';
import { defaultAvatarImage } from '../../helpers/cloudinary';
import { uploadImageToCloudinary } from '../../helpers/cloudinary';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const NewLocker = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [privacy, setPrivacy] = useState('public');
  const [schoolName, setSchoolName] = useState('');
  const [classroom, setClassroom] = useState('');
  const [title, setTitle] = useState('');
  const [previewImage, setPreviewImage] = useState(defaultAvatarImage);
  const [isLogin, setIsLogin] = useState(true);

  const router = useRouter();

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
      !isLogin &&
      (!name ||
        name.trim() === '' ||
        !email ||
        !email.includes('@') ||
        email.trim() === '' ||
        !password ||
        password.trim().length < 8)
    ) {
      console.log('Invalid Inputs');
      return;
    }

    let imageSrc;

    if (!isLogin) {
      const form = event.currentTarget;
      const fileInputArray = Array.from(form.elements);

      const fileInput = fileInputArray.find((input) => input.id === 'image');

      if (!fileInput) {
        console.log('no file');
        return;
      }
      imageSrc = await uploadImageToCloudinary(fileInput);
    }

    // handle form submit
    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (!result?.error) {
        router.reload();
      }
    } else {
      try {
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          body: JSON.stringify({
            student: name,
            email,
            password,
            privacy,
            schoolName,
            classroom,
            title,
            img: imageSrc,
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

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener(
        'load',
        () => {
          if (typeof reader.result === 'string') {
            setPreviewImage(reader.result);
          }
        },
        false
      );

      reader.readAsDataURL(file);
    } else {
      setPreviewImage(defaultAvatarImage);
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
          src="/v1670000632/SchoolLocker/l2_b6mo5k.png"
          alt="customize locker"
          width={600}
          height={450}
          style={{ width: '60%', height: 'auto' }}
          priority
          loader={cloudinaryLoader}
        />
      </div>
      <form onSubmit={onSumbitHandler}>
        {!isLogin && (
          <div>
            <label htmlFor="name">Student Name</label>
            <input
              type="text"
              id="name"
              name="name"
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
            name="email"
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
            name="password"
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
              name="title"
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
              name="school"
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
              name="classrom"
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
              name="file"
              onChange={onChangeHandler}
              required
            />
            <img src={previewImage} alt="image" width={100} height={100} />
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
