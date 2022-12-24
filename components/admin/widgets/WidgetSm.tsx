import './WidgetSm.scss';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Image from 'next/image';

const usersData = [
  {
    _id: 1,
    username: 'GregWolf',
    img: 'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif',
  },
  {
    _id: 2,
    username: 'GregWolf',
    img: 'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif',
  },
  {
    _id: 3,
    username: 'GregWolf',
    img: 'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif',
  },
  {
    _id: 4,
    username: 'GregWolf',
    img: 'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif',
  },
];

const WidgetSm = () => {
  const [users, setUsers] = useState(usersData);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const res = await userRequest.get('users/?new=true');
  //       setUsers(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUsers();
  // }, []);

  return (
    <div className="widgetSm">
      <h3 className="title">New Join Members</h3>
      <ul className="list">
        {users
          .filter((user) => user.username !== 'admin')
          .map((user) => (
            <li className="listItem" key={user._id}>
              <Image
                src={
                  user.img ||
                  'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
                }
                alt="user image"
                className="img"
                width={40}
                height={40}
              />
              <div className="user">
                <span className="userName">{user.username}</span>
                <span className="userTitle">Software Engineer</span>
              </div>
              <Link className="link" href={`/user/${user._id}`}>
                <button className="button">
                  <VisibilityOutlinedIcon className="icon" />
                  Display
                </button>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default WidgetSm;
