import './AboutPage.css';

function AboutPage() {
    return (
        <div className="about-container">
            {/* Main Bio Section */}
            <section className="about-hero">
                <h1>About Me</h1>
                <svg width="200" height="200" viewBox="0 0 300 200" className="star-svg">
                    <path 
                        fill="var(--main)" 
                        className="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70" 
                        d="M195 100c-87.305 4.275-90.725 7.695-95 95-4.275-87.305-7.695-90.725-95-95 87.305-4.275 90.725-7.695 95-95 4.275 87.305 7.695 90.725 95 95"
                    />
                </svg>
                <svg width="200" height="200" viewBox="0 0 300 200" className="star-svg-right">
                    <path 
                        fill="var(--main)" 
                        className="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70" 
                        d="M195 100c-87.305 4.275-90.725 7.695-95 95-4.275-87.305-7.695-90.725-95-95 87.305-4.275 90.725-7.695 95-95 4.275 87.305 7.695 90.725 95 95"
                    />
                </svg>
                
            </section>

            <div className='about-content-container'>
               
            {/* Background/Journey Section */}
            <section className="about-journey">
                <h2>My Journey</h2>
                <p> I’ve spent over a decade working in pharmacy as a dispensary manager responsible
                    for keeping a busy, high-pressure environment running smoothly.</p>
                <p> Over those years, I’ve learned
                    how to stay calm with complex workloads, solve problems quickly, and pay attention to the tiny
                    details that really matter.</p>
                <p> I’ve always been curious about programming, and when a coworker introduced me to She Codes, I finally
                    decided to make the jump — and it’s genuinely been one of the best decisions I’ve made.</p>
                <p>Tech gives me
                    endless opportunities to learn, create, and improve the way things work.
                    As I continue growing my skills, I’m eager to move into a software development role where I can bring
                    the strengths I’ve built in pharmacy: adaptability, precision, and the ability to troubleshoot and
                    think creatively under pressure.</p>
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
                            
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Next to Learn</h3>
                        <ul>
                            <li>TypeScript</li>
                            <li>Node.js</li>
                            <li>Next.js</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Interests/Hobbies Section */}
            <section className="interests-section">
                <h2>Beyond Coding</h2>
                <p>I'm an avid reader - at 135 out of my 200 book goal for the year.</p>
                <p>I also enjoy painting, knitting, crocheting, building miniatures, playing the clarinet and gaming (which I recently built a custom PC for).</p>
                <p>I enjoy learning about pharmacology, psychology, philosophy, and of course - coding.</p>
                <p>Apparently I'm what is referred to as a "serial hobbyist".</p>
            </section> 
            </div>

        </div>
    );
}

export default AboutPage;