import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2> LOREM IPSUM </h2>
          <h1>Web Development</h1>
          <div className="buttons">
            <button>Get Started</button>
            <button>Learn More</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>

      <div className="slidingTextContainer">Developer Programmer</div>

      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
