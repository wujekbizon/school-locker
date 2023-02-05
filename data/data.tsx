import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CodeIcon from '@mui/icons-material/Code';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import HomeIcon from '@mui/icons-material/Home';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BookIcon from '@mui/icons-material/Book';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import NoteIcon from '@mui/icons-material/Note';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import SourceIcon from '@mui/icons-material/Source';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PaymentsIcon from '@mui/icons-material/Payments';
import WorkIcon from '@mui/icons-material/Work';
import ShapeLineIcon from '@mui/icons-material/ShapeLine';
import type { Pages } from '../types/index';

export const exploreFeatures = [
  {
    id: 'feature-1',
    url: '/populate',
    imgUrl: '/images/l6.png',
    title: 'Fully Customize Locker',
  },
  {
    id: 'feature-2',
    url: '/chat',
    imgUrl: '/images/blog02.png',
    title: 'Access to the Artificial Inteligence',
  },
  {
    id: 'feature-3',
    url: '',
    imgUrl: '/images/portfolio.png',
    title: 'Create Your own unique portfolio',
  },
  {
    id: 'feature-4',
    url: '/wolfpad',
    imgUrl: '/images/admin.png',
    title: 'Wolfpad an interactive coding enviroment',
  },
  {
    id: 'feature-5',
    url: '/create-career',
    imgUrl: '/images/artist3.png',
    title: 'Create your career path to success!',
  },
];

export const startingFeatures = [
  'Register a new account to populate a locker',
  "You will get a free tier locker that's ready to use",
  'Check our custom tier lockers pricing to unlock premium content',
];

export const newFeatures = [
  {
    imgUrl: '/images/vrpano.svg',
    title: 'Wolfpad 2.0',
    subtitle:
      ' Check our  latest interactive coding environment with Lexical markup editor.',
  },
  {
    imgUrl: '/images/headset.svg',
    title: 'VR Support',
    subtitle:
      'Coming soon, VR support, that will make the School Locker more realistic than ever.',
  },
];

export const lockerMenuLinks = [
  {
    title: 'Home',
  },
  {
    title: 'Portfolio',
  },
  {
    title: 'Rumors',
  },
  {
    title: 'Tools',
  },
  {
    title: 'Settings',
  },
];

export const links = [
  { title: 'Products' },
  { title: 'Tools' },
  { title: 'Metaverse' },
  { title: 'Resources' },
];

const items = [
  {
    id: 1,
    product: 'School Locker',
    description:
      'New multimedia platform, where user can create and fully customize a digital locker.',
  },
  {
    id: 2,
    product: 'Wolfpad',
    description:
      'This is an interactive coding environment. You can write Javascript, see it executed, and write documentation.',
  },
  {
    id: 3,
    product: 'Jarvis Chatbot',
    description: 'Advanced GPT3 Model AI Chatbot. Welcome into to the future. ',
  },
];

const sublinks: Pages[] = [
  {
    page: 'Products',
    items: items,
    links: [
      {
        idTag: 'one',
        label: 'lockers',
        title: 'expand all lockers',
        icon: <LockIcon />,
        url: '/lockers',
      },
      {
        idTag: 'one',
        label: 'add new',
        title: 'populate new locker',
        icon: <LockOpenIcon />,
        url: '/populate',
      },
      {
        idTag: 'one',
        label: 'rumors',
        title: 'explore newest rumors',
        icon: <StickyNote2Icon />,
        url: '/rumors/newest',
      },
      {
        label: 'add rumor',
        idTag: 'one',
        title: 'seed a rumor',
        icon: <PostAddIcon />,
        url: '/rumors/add',
      },
      {
        idTag: 'one',
        label: 'Home',
        title: 'School locker home page',
        icon: <HomeIcon />,
        url: '/',
      },
      {
        idTag: 'two',
        label: 'wolfpad',
        title: 'interactive coding enviroment',
        icon: <CodeIcon />,
        url: '/wolfpad',
      },
      {
        idTag: 'two',
        label: 'markdown editor',
        title: 'customize your own editor',
        icon: <FormatIndentIncreaseIcon />,
        url: '/editor',
      },
      {
        idTag: 'three',
        label: 'jarvis chatbot',
        title: 'artificial intelligence chatbot',
        icon: <SmartToyIcon />,
        url: '/chat',
      },
      {
        idTag: 'three',
        label: 'manufacturing AI',
        title: 'The future of manufacturing',
        icon: <PrecisionManufacturingIcon />,
        url: '/futureAI',
      },
    ],
  },
  {
    page: 'Tools',
    links: [
      {
        label: 'Admin',
        title: 'Administrator Panel',
        idTag: 'one',
        icon: <AdminPanelSettingsIcon />,
        url: '/admin',
      },
      {
        label: 'Create Portfolio',
        title: 'customize and create portfolio',
        idTag: 'one',
        icon: <FolderSharedIcon />,
        url: '/portfolio',
      },
      {
        label: 'Wolfpad',
        title: 'interactive coding enviroment',
        idTag: 'one',
        icon: <CodeIcon />,
        url: '/wolfpad',
      },
      {
        label: 'Calendar',
        title: 'schedule your next event',
        idTag: 'one',
        icon: <CalendarMonthRoundedIcon />,
        url: '/calendar',
      },
      {
        label: 'Excalidraw',
        title: 'virtual whiteboard for sketching',
        idTag: 'one',
        icon: <ShapeLineIcon />,
        url: '/excalidraw',
      },
    ],
  },
  {
    page: 'Metaverse',
    links: [
      {
        label: 'Career Seek',
        idTag: 'one',
        icon: <WorkIcon />,
        url: '/wolfpad',
      },
      {
        label: 'Cloud Solution',
        idTag: 'one',
        icon: <CloudSyncIcon />,
        url: '/cloud',
      },
      {
        label: 'Currency Bitcoin',
        idTag: 'one',
        icon: <CurrencyBitcoinIcon />,
        url: '/exchange',
      },
      {
        label: 'Wolfpad',
        idTag: 'one',
        icon: <CodeIcon />,
        url: '/wolfpad',
      },
      {
        label: 'Cloud Solution',
        idTag: 'one',
        icon: <CloudSyncIcon />,
        url: '/cloud',
      },
      {
        label: 'Currency Bitcoin',
        idTag: 'one',
        icon: <CurrencyBitcoinIcon />,
        url: '/exchange',
      },
    ],
  },
  {
    page: 'Resources',
    links: [
      {
        label: 'Contact Support',
        idTag: 'one',
        icon: <ContactSupportIcon />,
        url: '/',
      },
      {
        label: 'Video Library',
        idTag: 'one',
        icon: <VideoLibraryIcon />,
        url: '/',
      },
      {
        label: 'Blog',
        idTag: 'one',
        icon: <BookIcon />,
        url: '/',
      },
      {
        label: 'Newsroom',
        idTag: 'one',
        icon: <NewspaperIcon />,
        url: '/',
      },
      {
        label: 'Customers Stories',
        idTag: 'one',
        icon: <AutoStoriesIcon />,
        url: '/',
      },
      {
        label: 'Support Plans',
        idTag: 'one',
        icon: <NoteIcon />,
        url: '/',
      },
      {
        label: 'Documentation',
        idTag: 'one',
        icon: <SourceIcon />,
        url: '/',
      },
      {
        label: 'Customers Stories',
        idTag: 'one',
        icon: <AutoStoriesIcon />,
        url: '/',
      },
      {
        label: 'Payments',
        idTag: 'one',
        icon: <PaymentsIcon />,
        url: '/',
      },
      {
        label: 'Awards',
        idTag: 'one',
        icon: <EmojiEventsIcon />,
        url: '/',
      },
    ],
  },
];

export default sublinks;
