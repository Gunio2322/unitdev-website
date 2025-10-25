// ==================== LOADING SCREEN ====================
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// ==================== NAVIGATION ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==================== SMOOTH SCROLLING ====================
// Smooth scrolling only for anchor links on the same page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.service-card, .product-card, .story-card, .hero-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ==================== STATS COUNTER ====================
const statsSection = document.querySelector('.stats-section');
let statsAnimated = false;

const animateStats = () => {
    if (statsAnimated) return;
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
    
    statsAnimated = true;
};

// Trigger stats animation when section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== BUTTON INTERACTIONS ====================
document.querySelectorAll('.btn-primary, .btn-learn').forEach(button => {
    // Ripple effect on click
    button.addEventListener('click', function(e) {
        if (!button.getAttribute('href') || button.getAttribute('href') === '#') {
            e.preventDefault();
            
            // Create ripple
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
            
            // Show notification
            showNotification('Funkcja w przygotowaniu. Skontaktuj się z nami: sales@unitdev.pl');
        }
    });
    
    // Magnetic effect on hover (desktop only)
    if (window.innerWidth > 768) {
        button.addEventListener('mousemove', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            button.style.transform = 'translate(0, 0)';
        });
    }
});

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #0066cc, #00a8ff);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== TYPING EFFECT FOR HERO ====================
const heroText = document.querySelector('.hero-content p');
if (heroText) {
    const originalText = heroText.textContent;
    heroText.textContent = '';
    let charIndex = 0;
    
    const typeWriter = () => {
        if (charIndex < originalText.length) {
            heroText.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        }
    };
    
    setTimeout(typeWriter, 500);
}

// ==================== MOUSE TRAIL EFFECT ====================
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

if (window.innerWidth > 768) {
    // Create cursor trail circles with glow
    for (let i = 0; i < 8; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.cssText = `
            position: fixed;
            width: ${12 - i}px;
            height: ${12 - i}px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 168, 255, ${0.8 - i * 0.1}) 0%, rgba(0, 102, 204, ${0.4 - i * 0.05}) 100%);
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.3s ease;
            box-shadow: 0 0 ${15 - i * 2}px rgba(0, 168, 255, ${0.6 - i * 0.08});
        `;
        document.body.appendChild(circle);
    }
    
    const allCircles = document.querySelectorAll('.circle');
    
    window.addEventListener('mousemove', (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
    
    function animateCircles() {
        let x = coords.x;
        let y = coords.y;
        
        allCircles.forEach((circle, index) => {
            circle.style.left = x - 6 + 'px';
            circle.style.top = y - 6 + 'px';
            circle.style.transform = `scale(${(allCircles.length - index) / allCircles.length})`;
            
            const nextCircle = allCircles[index + 1] || allCircles[0];
            x += (nextCircle.offsetLeft - x) * 0.3;
            y += (nextCircle.offsetTop - y) * 0.3;
        });
        
        requestAnimationFrame(animateCircles);
    }
    
    animateCircles();
    
    // Add cursor glow on interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .service-card, .product-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            allCircles.forEach(circle => {
                circle.style.background = 'radial-gradient(circle, rgba(51, 204, 255, 0.9) 0%, rgba(0, 168, 255, 0.5) 100%)';
                circle.style.boxShadow = '0 0 25px rgba(51, 204, 255, 1)';
            });
        });
        
        el.addEventListener('mouseleave', () => {
            allCircles.forEach((circle, i) => {
                circle.style.background = `radial-gradient(circle, rgba(0, 168, 255, ${0.8 - i * 0.1}) 0%, rgba(0, 102, 204, ${0.4 - i * 0.05}) 100%)`;
                circle.style.boxShadow = `0 0 ${15 - i * 2}px rgba(0, 168, 255, ${0.6 - i * 0.08})`;
            });
        });
    });
}

// ==================== CONSOLE MESSAGE ====================
console.log('%c🚀 UnitDev Website', 'color: #0066cc; font-size: 20px; font-weight: bold;');
console.log('%cPowered by Modern Web Technologies', 'color: #00a8ff; font-size: 14px;');
console.log('%cInterested in joining our team? Contact: careers@unitdev.pl', 'color: #333; font-size: 12px;');

// ==================== CONTACT FORM HANDLER ====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show success notification
        showNotification('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
        
        // Reset form
        contactForm.reset();
        
        // In production, send data to backend:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
    });
}

// ==================== ACTIVE NAV LINK ====================
// Highlight current page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
