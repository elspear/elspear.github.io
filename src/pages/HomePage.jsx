import './HomePage.css';

function HomePage() {
    return (
        <div className='home-container'>
            
            {/* Hero section */}
            <section className='hero'>
                <h1>Emma Spear</h1>
                <h2>Aspiring developer</h2>
            </section>

            {/* Introduction section */}
            <section className='intro'>
                <p>Welcome to my portfolio!</p>
            </section>
        </div>
    );
}

export default HomePage;