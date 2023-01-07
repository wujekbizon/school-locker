import './Footer.scss';
import NewsmongerForm from '../newsmonger/NewsmongerForm';
import Logo from '../logo/Logo';
import SocialLinks from './SocialLinks';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className="footer-container">
      <NewsmongerForm />
      <footer className="footer">
        <div className="footer-links">
          <div className="footer-list">
            <h2>Company</h2>
            <ul className="list-links">
              <li>
                <a href="#about">About Us</a>{' '}
              </li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>
                <Link href="/populate">Join Us</Link>{' '}
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h2>Legal</h2>
            <ul className="list-links">
              <li>Privacy Policy</li>
              <li>Terms of use</li>
              <li>Brand and Assets</li>
              <li>Security and Privacy</li>
            </ul>
          </div>
          <div className="footer-list">
            <h2>Products</h2>
            <ul className="list-links">
              <li>
                <Link href="/populate">Locker</Link>{' '}
              </li>
              <li>
                <Link href="/wolfpad">Wolfpad</Link>{' '}
              </li>
              <li>
                <Link href="/admin">Admin</Link>{' '}
              </li>
              <li>Editor</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-company">
            <Link href="/">
              <Logo />
            </Link>
            <p>Educational multimedia platform AI </p>
          </div>
          <div className="footer-media">
            <SocialLinks />
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Footer;
