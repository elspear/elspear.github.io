import "./HomePage.css";
import image from '../assets/pic2.svg'

function HomePage() {
  return (
    <div className="home-container">
      <div className="hero-container">
        <div className="home-title">
          <div className="title-section">
            <h1>Hi, my name is</h1>
            <h1>Emma.</h1> 
          </div>
          <div className="home-text">
            <h2>Aspiring Developer</h2>
            <p>Currently studying programming in the She Codes Plus program</p>
            <p>When I'm not crying over broken code I enjoy spending time with my dog, reading, and building mechanical keyboards</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
