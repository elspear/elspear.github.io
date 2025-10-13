// Handle contact modal interactions
document.addEventListener('click', function(e) {
    // If it's a contact link
    if (e.target.matches('a[href="#"][aria-label="Contact me"], a[aria-label="Contact me"]')) {
        e.preventDefault();
        const modal = document.getElementById('contactModal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
});

// Close modal when clicking close button or outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('contactModal');
    if (!modal) return;

    if (e.target.matches('.close-button') || e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('contactModal');
        if (modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
});