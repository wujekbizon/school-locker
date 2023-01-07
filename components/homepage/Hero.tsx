import './Hero.scss';
import LinesAnimation from '../animations/Lines';

const Hero = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="hero-title">
          <h1>School</h1>
          <div className="animation-wrapper">
            <LinesAnimation />
          </div>
          <h1>Locker</h1>
        </div>
      </section>
    </>
  );
};
export default Hero;
