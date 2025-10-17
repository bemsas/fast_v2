/**
 * VENIPAK FRONT PAGE - MAIN JAVASCRIPT
 * ====================================
 * 
 * This file contains the main JavaScript functionality for the Venipak front page
 * All interactions will be implemented to match exact Figma prototype specifications
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Venipak front page loaded');
    
    // Initialize all components
    initializeNavigation();
    initializeInteractiveElements();
    initializeAccessibility();
});

/**
 * NAVIGATION FUNCTIONALITY
 * ========================
 * Navigation interactions will be implemented in task 3
 */
function initializeNavigation() {
    // Mobile menu toggle functionality - to be implemented in task 3
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', function() {
            // Toggle mobile menu visibility
            navList.classList.toggle('active');
            
            // Update aria-expanded attribute for accessibility
            const isExpanded = navList.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navList && navList.classList.contains('active')) {
            if (!event.target.closest('.navigation')) {
                navList.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navList && navList.classList.contains('active')) {
            navList.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.focus();
            }
        }
    });
}

/**
 * INTERACTIVE ELEMENTS
 * ====================
 * Button and form interactions will be implemented in task 6
 */
function initializeInteractiveElements() {
    // Button interactions - to be implemented in task 6
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Add click event listeners for buttons
        button.addEventListener('click', function(event) {
            // Button click functionality will be implemented based on Figma prototypes
            console.log('Button clicked:', button.textContent);
        });
        
        // Add keyboard support for buttons
        button.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                button.click();
            }
        });
    });
    
    // Form interactions - to be implemented if forms are present in Figma
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            // Form submission handling will be implemented based on requirements
            console.log('Form submitted');
        });
    });
}

/**
 * ACCESSIBILITY ENHANCEMENTS
 * ===========================
 * Accessibility features for keyboard navigation and screen readers
 */
function initializeAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--color-primary);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    // Show skip link on focus
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
        this.classList.remove('sr-only');
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
        this.classList.add('sr-only');
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID if not present
    const mainContent = document.querySelector('.main-content');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
    
    // Enhance focus management for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    
    interactiveElements.forEach(element => {
        // Ensure all interactive elements are keyboard accessible
        if (!element.hasAttribute('tabindex') && element.tagName !== 'INPUT' && element.tagName !== 'TEXTAREA' && element.tagName !== 'SELECT') {
            element.setAttribute('tabindex', '0');
        }
    });
}

/**
 * SMOOTH SCROLLING
 * ================
 * Smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                event.preventDefault();
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update focus for accessibility
                targetElement.focus();
            }
        });
    });
}

/**
 * RESPONSIVE UTILITIES
 * ====================
 * Utilities for responsive behavior
 */
function getBreakpoint() {
    const width = window.innerWidth;
    
    if (width < 768) {
        return 'mobile';
    } else if (width < 1024) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}

// Handle window resize events
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        const currentBreakpoint = getBreakpoint();
        console.log('Current breakpoint:', currentBreakpoint);
        
        // Handle breakpoint-specific functionality
        handleBreakpointChange(currentBreakpoint);
    }, 250);
});

function handleBreakpointChange(breakpoint) {
    // Breakpoint-specific functionality will be implemented based on Figma specifications
    const navList = document.querySelector('.nav-list');
    
    if (breakpoint !== 'mobile' && navList) {
        // Close mobile menu on larger screens
        navList.classList.remove('active');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileMenuToggle) {
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    }
}

/**
 * PERFORMANCE OPTIMIZATIONS
 * ==========================
 * Performance enhancements for better user experience
 */

// Lazy loading for images - to be implemented in task 8
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Initialize smooth scrolling
initializeSmoothScrolling();

// Export functions for use in other modules
window.VenipakFrontPage = {
    getBreakpoint,
    initializeLazyLoading,
    handleBreakpointChange
};