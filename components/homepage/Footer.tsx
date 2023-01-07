import './Footer.scss';
import NewsmongerForm from '../newsmonger/NewsmongerForm';
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
              <li>About Us</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Join Us</li>
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
      </footer>
    </section>
  );
};
export default Footer;
