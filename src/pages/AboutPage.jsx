import './AboutPage.css';

function AboutPage() {
    return (
        <div className="about-container">
            {/* Main Bio Section */}
            <section className="about-hero">
                <h1>About Me</h1>
                <p className="tagline">Full Stack Developer based in Melbourne</p>
            </section>

            {/* Background/Journey Section */}
            <section className="about-journey">
                <h2>My Journey</h2>
                <p>Your story of how you got into development...</p>
            </section>

            {/* Skills Section */}
            <section className="skills-section">
                <h2>Skills & Technologies</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>Frontend</h3>
                        <ul>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Backend</h3>
                        <ul>
                            <li>Python</li>
                            <li>Django</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Interests/Hobbies Section */}
            <section className="interests-section">
                <h2>Beyond Coding</h2>
                <p>Your interests, hobbies, or other relevant information...</p>
            </section>
        </div>
    );
}

export default AboutPage;