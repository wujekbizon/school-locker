import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CodeIcon from '@mui/icons-material/Code';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import Products from '../components/layout/Products';

export const links = [
  { title: 'Products' },
  { title: 'Rumors' },
  { title: 'Metaverse' },
  { title: 'Tools' },
];

export type Pages = {
  page: string;
  element?: JSX.Element;
  links: {
    label: string;
    icon: JSX.Element;
    url: string;
  }[];
};

export type Items = {
  product: string;
  description: string;
};

export const items = [
  {
    product: 'School Locker',
    description:
      'New multimedia platform, where user can create and fully customize a digital locker.',
  },
  {
    product: 'Wolfpad',
    description:
      'This is an interactive coding environment. You can write Javascript, see it executed, and write documentation.',
  },
  {
    product: 'Jarvis Chatbot',
    description: 'Advanced GPT3 Model AI Chatbot. Welcome into to the future. ',
  },
];

const sublinks: Pages[] = [
  {
    page: 'Products',
    element: <Products items={items} />,
    links: [
      {
        label: 'all lockers',
        icon: <LockIcon />,
        url: '/lockers',
      },
      {
        label: 'new and existing lockers',
        icon: <LockOpenIcon />,
        url: '/populate',
      },
      {
        label: 'all lockers',
        icon: <LockIcon />,
        url: '/lockers',
      },
      {
        label: 'new and existing lockers',
        icon: <LockOpenIcon />,
        url: '/populate',
      },
    ],
  },
  {
    page: 'Rumors',
    links: [
      {
        label: 'newest rumor',
        icon: <StickyNote2Icon />,
        url: '/rumors/newest',
      },
      {
        label: 'add rumor',
        icon: <PostAddIcon />,
        url: '/rumors/add',
      },
    ],
  },
  {
    page: 'Metaverse',
    links: [
      {
        label: 'Wolfpad',
        icon: <CodeIcon />,
        url: '/wolfpad',
      },
      {
        label: 'Cloud Solution',
        icon: <CloudSyncIcon />,
        url: '/cloud',
      },
      {
        label: 'Currency Bitcoin',
        icon: <CurrencyBitcoinIcon />,
        url: '/exchange',
      },
    ],
  },
  {
    page: 'Tools',
    links: [
      {
        label: 'Admin Panel',
        icon: <AdminPanelSettingsIcon />,
        url: '/admin',
      },
      {
        label: 'Calendar',
        icon: <CalendarMonthRoundedIcon />,
        url: '/calendar',
      },
    ],
  },
];

export default sublinks;
