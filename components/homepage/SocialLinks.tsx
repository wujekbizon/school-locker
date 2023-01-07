import './SocialLinks.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const SocialLinks = () => {
  return (
    <div className="social-media">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/grzegorz-wolfinger-b88856229/"
      >
        <LinkedInIcon />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/wujekbizon">
        <GitHubIcon />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https:facebook.com/grzegorz.wolfinger"
      >
        <FacebookIcon />
      </a>
      <Link href="/contact">
        <EmailIcon />
      </Link>
    </div>
  );
};
export default SocialLinks;
