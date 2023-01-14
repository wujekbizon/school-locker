import './NewLocker.scss';
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

  const resetInputs = () => {
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

      router.reload();

      // if (!result && !result?.error) {
      //   router.reload();
      // }
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

        resetInputs();
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
    <section className="newlocker_page">
      <form onSubmit={onSumbitHandler} className="newlocker_form">
        {!isLogin && (
          <>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Student Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </>
        )}

        <>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </>
        <>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="on"
            required
            placeholder="Locker Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </>

        {!isLogin && (
          <>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Locker Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </>
        )}
        {!isLogin && (
          <>
            <input
              type="text"
              id="school"
              name="school"
              placeholder="School Name"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </>
        )}
        {!isLogin && (
          <>
            <input
              type="text"
              id="classroom"
              name="classrom"
              placeholder="Classroom"
              value={classroom}
              onChange={(e) => setClassroom(e.target.value)}
            />
          </>
        )}
        {!isLogin && (
          <>
            <select
              name="privacy"
              id="privacy"
              onChange={(e) => setPrivacy(e.target.value)}
              placeholder="Security"
            >
              <option value="public">Public Locker</option>
              <option value="private">Private Locker</option>
            </select>
          </>
        )}
        {!isLogin && (
          <>
            <input
              type="file"
              id="image"
              name="file"
              onChange={onChangeHandler}
              required
            />
          </>
        )}

        <div>
          <button>{isLogin ? 'Open Locker' : 'Create Locker'}</button>
        </div>
      </form>
      <div className="creation_preview">
        {!isLogin && (
          <div className="newlocker_image">
            <img src={previewImage} alt="image" />
          </div>
        )}
        <div className="">
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Create a new locker' : 'Login to exisitng locker'}
          </button>
          <p>
            In order to create a new locker , you need to provide all required
            fields. All the optional fields you can always customize later.
          </p>
        </div>
      </div>
    </section>
  );
};
export default NewLocker;
