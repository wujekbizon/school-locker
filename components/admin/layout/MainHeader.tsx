import './MainHeader.scss';
import Link from 'next/link';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Image from 'next/image';
import { useContext } from 'react';
import { LightModeContext } from '../../../context/lightModeContext';

const MainHeader = () => {
  const { dispatch } = useContext(LightModeContext);

  return (
    <header className="topbar">
      <nav className="topWrapper">
        <div className="topLeft">
          <div className="logoContainer">
            <Link href="/admin">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={140}
                height={25}
              />
            </Link>
          </div>
          <span className="textLeft">ADMIN PANEL</span>
        </div>
        {/* {!admin && ( */}
        {/* <span className="viewMode">View Mode Only For Show Purpose</span> */}
        {/* )} */}
        <div className="topRight">
          <div className="topIconContainer">
            <LanguageIcon />
            English
          </div>
          <div className="topIconContainer">
            <Badge
              badgeContent={1}
              sx={{
                '& .MuiBadge-badge': {
                  color: 'white',
                  backgroundColor: '#010409',
                },
              }}
            >
              <NotificationsNoneIcon />
            </Badge>
          </div>
          <div className="topIconContainer">
            <DarkModeOutlinedIcon
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>

          <Image
            className="topAvatar"
            src={
              // user.img ||
              'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
            }
            width={50}
            height={50}
            alt="avatar"
          />
        </div>
      </nav>
    </header>
  );
};
export default MainHeader;
