document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const modal = document.getElementById('contactModal');
    const contactLinks = document.querySelectorAll('a[href*="contact"]');
    const closeButton = document.querySelector('.close-button');

    // Open modal when contact link is clicked
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close modal when X is clicked
    closeButton.addEventListener('click', function() {
        closeModal();
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
});