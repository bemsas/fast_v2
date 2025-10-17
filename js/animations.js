/**
 * VENIPAK FRONT PAGE - ANIMATIONS
 * ================================
 * 
 * This file contains animation functionality for the Venipak front page
 * All animations will be implemented to match exact Figma prototype specifications
 */

/**
 * ANIMATION UTILITIES
 * ===================
 * Utility functions for animations and transitions
 */

// Check if user prefers reduced motion
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Easing functions for custom animations
const easingFunctions = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

/**
 * SCROLL ANIMATIONS
 * =================
 * Animations triggered by scrolling - to be implemented based on Figma prototypes
 */

class ScrollAnimations {
    constructor() {
        this.elements = [];
        this.observer = null;
        this.init();
    }
    
    init() {
        if (prefersReducedMotion()) {
            return; // Skip animations if user prefers reduced motion
        }
        
        this.setupIntersectionObserver();
        this.findAnimatedElements();
    }
    
    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, options);
    }
    
    findAnimatedElements() {
        // Elements with animation classes - to be implemented based on Figma animations
        const animatedElements = document.querySelectorAll([
            '.animate-fade-in',
            '.animate-slide-up',
            '.animate-slide-left',
            '.animate-slide-right',
            '.animate-scale-up',
            '.animate-bounce-in'
        ].join(', '));
        
        animatedElements.forEach(element => {
            this.observer.observe(element);
            element.style.opacity = '0';
            element.style.transform = this.getInitialTransform(element);
        });
    }
    
    getInitialTransform(element) {
        if (element.classList.contains('animate-slide-up')) {
            return 'translateY(30px)';
        } else if (element.classList.contains('animate-slide-left')) {
            return 'translateX(-30px)';
        } else if (element.classList.contains('animate-slide-right')) {
            return 'translateX(30px)';
        } else if (element.classList.contains('animate-scale-up')) {
            return 'scale(0.9)';
        } else if (element.classList.contains('animate-bounce-in')) {
            return 'scale(0.8)';
        }
        return 'none';
    }
    
    animateElement(element) {
        const animationDuration = element.dataset.duration || '0.6s';
        const animationDelay = element.dataset.delay || '0s';
        
        element.style.transition = `all ${animationDuration} ${easingFunctions.easeOut} ${animationDelay}`;
        element.style.opacity = '1';
        element.style.transform = 'none';
        
        // Special handling for bounce animation
        if (element.classList.contains('animate-bounce-in')) {
            element.style.transition = `all ${animationDuration} ${easingFunctions.bounce} ${animationDelay}`;
        }
    }
}

/**
 * BUTTON ANIMATIONS
 * =================
 * Button hover and click animations - to be implemented in task 6
 */

class ButtonAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        if (prefersReducedMotion()) {
            return;
        }
        
        this.setupButtonAnimations();
    }
    
    setupButtonAnimations() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            // Add ripple effect on click
            button.addEventListener('click', (e) => {
                this.createRippleEffect(button, e);
            });
            
            // Add hover animations
            button.addEventListener('mouseenter', () => {
                this.animateButtonHover(button, true);
            });
            
            button.addEventListener('mouseleave', () => {
                this.animateButtonHover(button, false);
            });
        });
    }
    
    createRippleEffect(button, event) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    animateButtonHover(button, isHovering) {
        if (isHovering) {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
        }
    }
}

/**
 * NAVIGATION ANIMATIONS
 * =====================
 * Navigation menu animations - to be implemented in task 3
 */

class NavigationAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        if (prefersReducedMotion()) {
            return;
        }
        
        this.setupMobileMenuAnimation();
        this.setupNavigationHover();
    }
    
    setupMobileMenuAnimation() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navList = document.querySelector('.nav-list');
        
        if (mobileMenuToggle && navList) {
            mobileMenuToggle.addEventListener('click', () => {
                this.animateMobileMenu(navList);
            });
        }
    }
    
    animateMobileMenu(navList) {
        const isActive = navList.classList.contains('active');
        
        if (isActive) {
            // Animate menu items in
            const menuItems = navList.querySelectorAll('.nav-item');
            menuItems.forEach((item, index) => {
                item.style.animation = `slideInFromTop 0.3s ease-out ${index * 0.1}s both`;
            });
        }
    }
    
    setupNavigationHover() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-1px)';
                link.style.transition = 'transform 0.2s ease-out';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
            });
        });
    }
}

/**
 * HERO SECTION ANIMATIONS
 * ========================
 * Hero section animations - to be implemented in task 4
 */

class HeroAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        if (prefersReducedMotion()) {
            return;
        }
        
        this.animateHeroContent();
    }
    
    animateHeroContent() {
        const heroHeadline = document.querySelector('.hero-headline');
        const heroSubheadline = document.querySelector('.hero-subheadline');
        const heroCta = document.querySelector('.hero-cta');
        
        // Stagger animation for hero elements
        if (heroHeadline) {
            heroHeadline.style.animation = 'fadeInUp 0.8s ease-out 0.2s both';
        }
        
        if (heroSubheadline) {
            heroSubheadline.style.animation = 'fadeInUp 0.8s ease-out 0.4s both';
        }
        
        if (heroCta) {
            heroCta.style.animation = 'fadeInUp 0.8s ease-out 0.6s both';
        }
    }
}

/**
 * CSS ANIMATIONS
 * ==============
 * Define CSS animations dynamically
 */

function createAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideInFromTop {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        @keyframes scaleUp {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        @keyframes bounceIn {
            0% {
                opacity: 0;
                transform: scale(0.8);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        /* Respect user's motion preferences */
        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    
    document.head.appendChild(style);
}

/**
 * INITIALIZE ANIMATIONS
 * =====================
 * Initialize all animation classes when DOM is loaded
 */

document.addEventListener('DOMContentLoaded', function() {
    // Create animation styles
    createAnimationStyles();
    
    // Initialize animation classes
    new ScrollAnimations();
    new ButtonAnimations();
    new NavigationAnimations();
    new HeroAnimations();
});

// Export animation classes for external use
window.VenipakAnimations = {
    ScrollAnimations,
    ButtonAnimations,
    NavigationAnimations,
    HeroAnimations,
    prefersReducedMotion,
    easingFunctions
};