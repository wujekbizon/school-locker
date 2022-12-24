import './Login.scss';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
  };
  return (
    <form className="loginAdmin" onSubmit={onSubmitHandler}>
      <div className="loginAdminTitle">
        <h1 className="title">Administrator Login Page</h1>
      </div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="on"
      />
      <button>Login</button>
    </form>
  );
};
export default Login;
