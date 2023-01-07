import './Hero.scss';
import LinesAnimation from '../animations/Lines';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="hero-title">
          <h1 className="gradient_text">School</h1>
          <div className="animation-wrapper">
            <LinesAnimation />
          </div>
          <h1 className="gradient_text">Locker</h1>
        </div>
        <div className="hero-links">
          <a href="https://www.reddit.com/" target="_blank" rel="noreferrer">
            <Image src="/images/bot.svg" alt="bot" width={30} height={30} />
          </a>
          <a href="https://discord.com/" target="_blank" rel="noreferrer">
            <Image src="/images/discord.svg" alt="bot" width={30} height={30} />
          </a>
          <a
            href="https://twitter.com/tweeter"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/images/tweet.svg" alt="bot" width={30} height={30} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Image src="/images/insta.svg" alt="bot" width={30} height={30} />
          </a>
        </div>
      </section>
    </>
  );
};
export default Hero;
