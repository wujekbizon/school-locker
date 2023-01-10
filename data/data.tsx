import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CodeIcon from '@mui/icons-material/Code';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { SvgIconProps } from '@mui/material';

export const links = [
  { title: 'Products' },
  { title: 'Resources' },
  { title: 'Metaverse' },
  { title: 'Tools' },
];

export type Pages = {
  page: string;
  links: {
    label: string;
    icon: JSX.Element;
    url: string;
  }[];
};

const sublinks: Pages[] = [
  {
    page: 'products',
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
    ],
  },
  {
    page: 'rumors',
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
    page: 'Interactive Coding Environment',
    links: [
      {
        label: 'Wolfpad',
        icon: <CodeIcon />,
        url: '/wolfpad',
      },
    ],
  },
  {
    page: 'Admin',
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
