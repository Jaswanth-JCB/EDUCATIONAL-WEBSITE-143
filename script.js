/* ============================================
   GOOD SHEPHERD ACADEMY - PREMIUM SCRIPT
   Animated Counters | Mobile Menu | Smooth Scroll
   ============================================ */

// ----- MOBILE MENU TOGGLE -----
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    // ----- ANIMATED COUNTERS -----
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    if (counters.length > 0) {
        const animateCounters = () => {
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // ms
                const startTime = performance.now();
                const suffix = target === 95 ? '%' : '+';

                const updateCounter = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing function (ease out)
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(eased * target);
                    
                    counter.textContent = current + suffix;
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + suffix;
                    }
                };
                
                requestAnimationFrame(updateCounter);
            });
        };

        // Intersection Observer for counters
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    // ----- CONTACT FORM -----
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            
            if (name && email && subject && message) {
                // Show success message
                const originalHTML = this.innerHTML;
                this.innerHTML = `
                    <div style="text-align: center; padding: 30px 0;">
                        <div style="font-size: 4rem; margin-bottom: 16px;">✅</div>
                        <h3 style="color: #6C3CE1; font-size: 1.5rem;">Message Sent!</h3>
                        <p style="color: #666;">Thank you, ${name}! We'll get back to you within 24 hours.</p>
                        <button onclick="location.reload()" class="btn btn-primary" style="margin-top: 20px;">
                            Send Another Message
                        </button>
                    </div>
                `;
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // ----- SMOOTH SCROLL FOR ANCHOR LINKS -----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ----- PARALLAX EFFECT ON HERO -----
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        });
    }

    // ----- COURSE FILTER (on courses page) -----
    const filterBtns = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    if (filterBtns.length > 0 && courseCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                courseCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.6s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ----- NAVBAR SCROLL EFFECT -----
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(26, 26, 46, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
        } else {
            navbar.style.background = 'rgba(26, 26, 46, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
        }
        
        lastScroll = currentScroll;
    });

    console.log('🎓 Good Shepherd Academy - Premium Website Loaded!');
    console.log('💜 Built with Purple, White & Gold theme');
    console.log('✨ Glassmorphism | Animations | SEO Optimized');
});