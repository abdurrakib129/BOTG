// ============================================
// LOADING SCREEN
// ============================================
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    // Faster loading - animation completes in ~1s, hide after 1.2s total
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1200);
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
        if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ============================================
// SCROLL TO TOP BUTTON (Optimized)
// ============================================
const scrollToTopBtn = document.querySelector('.scroll-to-top');
let ticking = false;

if (scrollToTopBtn) {
    function updateScrollButton() {
        const scrollY = window.pageYOffset || window.scrollY;
        
        // Show button when scrolled down, hide when at top
        if (scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollButton);
            ticking = true;
        }
    }, { passive: true });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // Hide button immediately when clicked
        this.classList.remove('visible');
    });
}

// ============================================
// TOUR CARD INTERACTIONS
// ============================================
const tourCards = document.querySelectorAll('.tour-card');

tourCards.forEach(card => {
    const imageContainer = card.querySelector('.tour-image-container');
    const overlay = card.querySelector('.tour-overlay');
    const button = card.querySelector('.tour-button');
    
    if (imageContainer && overlay && button) {
        // Prevent overlay from covering the button
        imageContainer.addEventListener('click', function(e) {
            if (!button.contains(e.target)) {
                // Toggle overlay visibility
                const isVisible = overlay.style.opacity === '1';
                overlay.style.opacity = isVisible ? '0' : '1';
            }
        });
    }
});

// ============================================
// SCROLL ANIMATIONS (Removed for Performance)
// ============================================
// Animations removed to improve scrolling performance

// ============================================
// CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            address: document.getElementById('address').value,
            whatsapp: document.getElementById('whatsapp').value,
            tourPlace: document.getElementById('tour-place').value,
            comment: document.getElementById('comment').value
        };
        
        // Validate form
        if (!formData.name || !formData.address || !formData.whatsapp || !formData.tourPlace || !formData.comment) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Show success message
        alert('Thank you for your submission! We will contact you soon.');
        
        // Reset form
        contactForm.reset();
        
        // In the future, you can integrate Formspree.io here:
        // fetch('https://formspree.io/f/YOUR_FORM_ID', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     alert('Thank you for your submission!');
        //     contactForm.reset();
        // })
        // .catch(error => {
        //     alert('There was an error. Please try again.');
        // });
    });
}

// ============================================
// SHOW MORE FUNCTIONALITY (Tours Page)
// ============================================
const showMoreBtn = document.getElementById('show-more-btn');

if (showMoreBtn) {
    const pastToursContainer = document.getElementById('past-tours');
    let additionalToursLoaded = false;
    
    // Additional tour data (using images 7-12)
    const additionalTours = [
        {
            id: 7,
            image: 'Images/7.jpg',
            description: 'An incredible journey through diverse landscapes and cultures.',
            videoUrl: 'https://youtu.be/Rfp8q3jmTck?si=B8FEmK-KAjY8PJJe'
        },
        {
            id: 8,
            image: 'Images/8.jpg',
            description: 'Exploring the wonders of nature and adventure.',
            videoUrl: 'hhttps://youtu.be/Rfp8q3jmTck?si=B8FEmK-KAjY8PJJe'
        },
        {
            id: 9,
            image: 'Images/9.jpg',
            description: 'A trip filled with amazing experiences and beautiful memories.',
            videoUrl: 'https://youtu.be/Rfp8q3jmTck?si=B8FEmK-KAjY8PJJe'
        },
        {
            id: 10,
            image: 'Images/10.jpg',
            description: 'Discovering hidden treasures and breathtaking views.',
            videoUrl: 'https://youtu.be/Rfp8q3jmTck?si=B8FEmK-KAjY8PJJe'
        },
        {
            id: 11,
            image: 'Images/11.jpg',
            description: 'An unforgettable adventure with amazing travel companions.',
            videoUrl: 'https://youtu.be/Rfp8q3jmTck?si=B8FEmK-KAjY8PJJe'
        },
        {
            id: 12,
            image: 'Images/12.jpg',
            description: 'A journey that will stay in your heart forever.',
            videoUrl: 'https://youtu.be/Rfp8q3jmTck?si=B8FEmK-KAjY8PJJe'
        }
    ];
    
    showMoreBtn.addEventListener('click', function() {
        if (!additionalToursLoaded) {
            // Create and append additional tour cards
            additionalTours.forEach(tour => {
                const tourCard = document.createElement('div');
                tourCard.className = 'tour-card completed';
                tourCard.setAttribute('data-tour', tour.id);
                tourCard.style.opacity = '0';
                tourCard.style.transform = 'translateY(30px)';
                
                tourCard.innerHTML = `
                    <div class="tour-image-container">
                        <img src="${tour.image}" alt="Tour ${tour.id}" class="tour-image">
                        <div class="tour-overlay">
                            <p class="tour-description">${tour.description}</p>
                        </div>
                    </div>
                    <span class="tour-label completed-label">Completed</span>
                    <button class="tour-button watch-button" onclick="window.open('${tour.videoUrl}', '_blank')">Watch</button>
                `;
                
                pastToursContainer.appendChild(tourCard);
                
                // Show immediately for better performance
                tourCard.style.opacity = '1';
                tourCard.style.transform = 'translateY(0)';
            });
            
            additionalToursLoaded = true;
            showMoreBtn.textContent = 'All Tours Loaded';
            showMoreBtn.style.opacity = '0.6';
            showMoreBtn.style.cursor = 'not-allowed';
            showMoreBtn.disabled = true;
        }
    });
}

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// HEADER SCROLL EFFECT (Optimized)
// ============================================
const header = document.querySelector('.header');
let headerTicking = false;

function updateHeader() {
    if (header) {
        const currentScroll = window.pageYOffset || window.scrollY;
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }
    }
    headerTicking = false;
}

if (header) {
    window.addEventListener('scroll', function() {
        if (!headerTicking) {
            window.requestAnimationFrame(updateHeader);
            headerTicking = true;
        }
    }, { passive: true });
}

// ============================================
// WELCOME BACKGROUND IMAGE HANDLING
// ============================================
// Try to use team.png, fallback to first tour image
const welcomeBackground = document.querySelector('.welcome-background');
if (welcomeBackground) {
    // Try team.png first, if not available, use first tour image
    const img = new Image();
    img.onload = function() {
        welcomeBackground.style.backgroundImage = 'url(Images/team.png)';
    };
    img.onerror = function() {
        // Fallback to first tour image
        welcomeBackground.style.backgroundImage = 'url(Images/1.jpg)';
    };
    img.src = 'Images/team.png';
}

// ============================================
// PARALLAX EFFECT (Removed for Performance)
// ============================================
// Parallax effect removed to improve scrolling performance

// ============================================
// PREVENT DEFAULT BEHAVIOR FOR TOUR BUTTONS
// ============================================
document.querySelectorAll('.tour-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// ============================================
// RESIZE HANDLER
// ============================================
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
        }
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
});

