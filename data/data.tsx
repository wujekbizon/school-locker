import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CodeIcon from '@mui/icons-material/Code';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
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
      'This is an interactive coding environment. You can write Javascript, see it executed, and write comprehensive documentation using markdown.',
  },
  {
    product: 'Editor',
    description:
      'Lexical is an extensible JavaScript web text-editor framework with an emphasis on reliability, accessibility, and performance. ',
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
    ],
  },
];

export default sublinks;
