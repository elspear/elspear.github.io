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
                <p> I have spent more than a decade working in pharmacy as a dispensary manager, responsible for keeping a fast-paced, highly regulated environment running smoothly.</p>
                <p> Those years taught me how to stay calm under pressure, navigate complex systems, and pay attention to the details that genuinely matter.</p>
                <p> I’d always been curious about programming, and when a coworker introduced me to She Codes, I finally decided to make the jump. It turned out to be one of the best decisions I’ve ever made.
</p>
                <p>Through She Codes Plus, I’ve stepped into full stack development — building real applications with Python, Django REST Framework, React,
                     HTML, and CSS. I love the combination of logic, creativity, and problem-solving that tech gives me. Connecting backend and frontend systems 
                     feels especially rewarding; understanding both sides helps me write cleaner, more efficient, more thoughtful code.</p>

                <p>As I continue growing, I’m excited to move into a software development role where I can bring everything I’ve learned from both worlds: precision, adaptability, systems thinking, and a genuine passion for creating tools that make life a little easier for the people using them.</p>
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
                            <li>Django REST Framework</li>
                            
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Currently Learning</h3>
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
                <p>Outside of coding, I’m a lifelong reader — currently 150 books into my 200-book goal for the year.
I also love painting, knitting, crocheting, building miniatures, gaming, and occasionally picking up my clarinet. I even built my own custom PC, which was its own little adventure.</p>
                
                <p>I’m endlessly curious, with interests that jump between pharmacology, psychology, philosophy, and — unsurprisingly — more coding.</p>
                <p>At this point, I've accepted that I'm a proud <em>serial hobbyist</em>.</p>
            </section> 
            </div>

        </div>
    );
}

export default AboutPage;