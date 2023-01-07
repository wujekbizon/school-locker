import './Footer.scss';
import NewsmongerForm from '../newsmonger/NewsmongerForm';

const Footer = () => {
  return (
    <footer className="footer">
      <NewsmongerForm />
      <div>
        <h4>new trends</h4>
        <h4>school of rock</h4>
        <h4>policy</h4>
        <h4>earth</h4>
      </div>
    </footer>
  );
};
export default Footer;
