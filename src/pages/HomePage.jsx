import "./HomePage.css";

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
            <h2>Full Stack Developer</h2>
            <p>I turn ideas into working web apps using Django REST Framework and React.</p>
            <p>Powered by matcha lattes, curiosity, and the unconditional support of my dog, Hugo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
