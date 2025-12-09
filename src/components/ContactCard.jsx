import CloseIcon from '../assets/close-btn-pink.svg';
import './ContactCard.css';

function ContactCard({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="contact-overlay" onClick={onClose}>
            <div className="contact-card" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <img 
                        src={CloseIcon} 
                        alt='close' 
                        className="close-icon"
                    />
                </button>
                <div className='content-container'>
                    <div className="contact-header">
                    <h3>Let's Connect</h3>
                </div>
                <div className="contact-options">
                    <a href="mailto:hello@emmmaspear.dev" target='_blank' className="contact-option">
                        <i className="far fa-envelope"></i>
                        <span>hello@emmmaspear.dev</span>
                    </a>
                    <a href="https://www.linkedin.com/in/emma-spear-3b9378315/" target='_blank' className="contact-option">
                        <i className="fab fa-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/elspear" target='_blank' className="contact-option">
                        <i className="fab fa-github"></i>
                        <span>GitHub</span>
                    </a>
                </div>
                </div>
                
            </div>
        </div>
    );
}

export default ContactCard;