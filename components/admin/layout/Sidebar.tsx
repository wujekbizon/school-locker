import './Sidebar.scss';
import { useState } from 'react';
import Link from 'next/link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useContext } from 'react';
import { LightModeContext } from '../../context/lightModeContext';

const Sidebar = () => {
  const [active, setActive] = useState('1');
  const { dispatch } = useContext(LightModeContext);

  const handleToggleActive = (event: React.MouseEvent<HTMLLIElement>) => {
    setActive(event.currentTarget.id);
  };

  return (
    <>
      {/* {isOpen && <LogoutModal />} */}
      <aside className="sidebar">
        <div className="wrapper">
          <div className="menu">
            <h3 className="title">Main</h3>
            <ul className="list">
              <Link href="/admin" className="link">
                <li
                  className={active === '1' ? 'active item' : 'item'}
                  id={'1'}
                  onClick={handleToggleActive}
                >
                  <DashboardIcon className="sidebarIcon" />
                  Dashboard
                </li>
              </Link>
            </ul>
          </div>
          <div className="menu">
            <h3 className="title">Lockers</h3>
            <ul className="list">
              <Link href="/lockers">
                <li
                  className={active === '2' ? 'active item' : 'item'}
                  id={'2'}
                  onClick={handleToggleActive}
                >
                  <TimelineOutlinedIcon className="sidebarIcon" />
                  Lockers
                </li>
              </Link>
              <Link href="/rumors">
                <li
                  className={active === '3' ? 'active item' : 'item'}
                  id={'3'}
                  onClick={handleToggleActive}
                >
                  <AttachMoneyOutlinedIcon className="sidebarIcon" />
                  Rumors
                </li>
              </Link>
              <li
                className={active === '4' ? 'active item' : 'item'}
                id={'4'}
                onClick={handleToggleActive}
              >
                <BarChartIcon className="sidebarIcon" />
                Stats
              </li>
            </ul>
          </div>
          <div className="menu">
            <h3 className="title">List</h3>
            <ul className="list">
              <Link href="/admin/users" className="link">
                <li
                  className={active === '5' ? 'active item' : 'item'}
                  id={'5'}
                  onClick={handleToggleActive}
                >
                  <GroupIcon className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link href="/admin/products" className="link">
                <li
                  className={active === '6' ? 'active item' : 'item'}
                  id={'6'}
                  onClick={handleToggleActive}
                >
                  <StoreMallDirectoryIcon className="sidebarIcon" />
                  Products
                </li>
              </Link>
              <li
                className={active === '7' ? 'active item' : 'item'}
                id={'7'}
                onClick={handleToggleActive}
              >
                <CreditCardOutlinedIcon className="sidebarIcon" />
                Orders
              </li>
              <li
                className={active === '8' ? 'active item' : 'item'}
                id={'8'}
                onClick={handleToggleActive}
              >
                <LocalShippingIcon className="sidebarIcon" />
                Delivery
              </li>
            </ul>
          </div>
          <div className="menu">
            <h3 className="title">Notifications</h3>
            <ul className="list">
              <li
                className={active === '9' ? 'active item' : 'item'}
                id={'9'}
                onClick={handleToggleActive}
              >
                <MailOutlinedIcon className="sidebarIcon" />
                Mail
              </li>
              <li
                className={active === '10' ? 'active item' : 'item'}
                id={'10'}
                onClick={handleToggleActive}
              >
                <DynamicFeedOutlinedIcon className="sidebarIcon" />
                Feedback
              </li>
              <li
                className={active === '11' ? 'active item' : 'item'}
                id={'11'}
                onClick={handleToggleActive}
              >
                <ChatBubbleOutlinedIcon className="sidebarIcon" />
                Messages
              </li>
            </ul>
          </div>
          {/* <div className="menu">
            <h3 className="title">Staff</h3>
            <ul className="list">
              <li
                className={active === '12' ? 'active item' : 'item'}
                id={'12'}
                onClick={handleToggleActive}
              >
                <WorkOutlineOutlinedIcon className="sidebarIcon" />
                Manage
              </li>
              <li
                className={active === '13' ? 'active item' : 'item'}
                id={'13'}
                onClick={handleToggleActive}
              >
                <ReportIcon className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div> */}
          <div className="menu">
            <h3 className="title">Service</h3>
            <ul className="list">
              <li
                className={active === '14' ? 'active item' : 'item'}
                id={'14'}
                onClick={handleToggleActive}
              >
                <SettingsSystemDaydreamOutlinedIcon className="sidebarIcon" />
                System Health
              </li>
              <li
                className={active === '15' ? 'active item' : 'item'}
                id={'15'}
                onClick={handleToggleActive}
              >
                <PsychologyOutlinedIcon className="sidebarIcon" />
                Logs
              </li>
              <li
                className={active === '16' ? 'active item' : 'item'}
                id={'16'}
                onClick={handleToggleActive}
              >
                <SettingsIcon className="sidebarIcon" />
                Settings
              </li>
            </ul>
          </div>
          <div className="menu">
            <h3 className="title">User</h3>
            <ul className="list">
              <li
                className={active === '17' ? 'active item' : 'item'}
                id={'17'}
                onClick={handleToggleActive}
              >
                <AccountCircleOutlinedIcon className="sidebarIcon" />
                Profile
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span className="bottomTitle">Color:</span>
          <div
            className="colorOption"
            onClick={() => dispatch({ type: 'LIGHT' })}
          ></div>
          <div
            className="colorOption"
            onClick={() => dispatch({ type: 'DARK' })}
          ></div>
          <div
            className="logout"
            // onClick={() => dispatch(openModal())}
          >
            <ExitToAppOutlinedIcon className="sidebarIcon" />
            Logout
          </div>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
