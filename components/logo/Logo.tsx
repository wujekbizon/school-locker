import './Logo.scss';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="logo-container">
      <h1 className="logo-title">School</h1>
      <Image
        src="/images/schoolLogo.png"
        alt="locker"
        width={60}
        height={60}
        className="school_logo"
      />
      <h1 className="logo-title">Locker</h1>
    </div>
  );
};
export default Logo;
