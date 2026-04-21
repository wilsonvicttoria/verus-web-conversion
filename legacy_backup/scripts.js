gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { 
            x: e.clientX, 
            y: e.clientY, 
            duration: 0.6, 
            ease: "power3.out" 
        });
        gsap.set(cursorDot, { x: e.clientX, y: e.clientY });
    });

    // Hover effects for magnetic feel
    const interactiveElements = document.querySelectorAll('a, button, .s-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { 
                scale: 2.2, 
                backgroundColor: "rgba(229, 178, 0, 0.1)", 
                borderColor: "rgba(229, 178, 0, 0.5)",
                duration: 0.3 
            });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { 
                scale: 1, 
                backgroundColor: "transparent", 
                borderColor: "rgba(229, 178, 0, 1)",
                duration: 0.3 
            });
        });
    });

    // Progress Bar
    gsap.to('.scroll-progress', {
        width: '100%',
        ease: 'none',
        scrollTrigger: { 
            scrub: 0.5,
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom'
        }
    });

    // Time (Cali / Colombia)
    function updateTime() {
        const now = new Date();
        const options = { timeZone: 'America/Bogota', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const timeStr = now.toLocaleTimeString('en-US', options);
        document.getElementById('local-time').textContent = `[ ${timeStr} ]`;
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Hero Cinematic Reveal
    const heroTl = gsap.timeline();
    heroTl.from('.hero-img', { 
        scale: 1.4, 
        filter: 'brightness(0) contrast(2)',
        duration: 2.5, 
        ease: "expo.out" 
    })
    .from('.hero-motion h1', { 
        y: 150, 
        skewY: 10,
        opacity: 0, 
        duration: 1.5, 
        ease: "expo.out" 
    }, "-=1.8")
    .from('.hero-motion .animate-in', { 
        y: 30, 
        opacity: 0, 
        stagger: 0.15, 
        duration: 1, 
        ease: "power3.out" 
    }, "-=1");

    // --- HORIZONTAL SCROLL TIMELINE (THE FIX) ---
    const horizontalTrack = document.querySelector('.horizontal-track');
    const scrollContainer = document.querySelector('.horizontal-scroll-container');
    
    // Create a timeline for the horizontal section
    const hTl = gsap.timeline({
        scrollTrigger: {
            trigger: scrollContainer,
            start: "top top",
            end: () => "+=" + (window.innerHeight * 4), // 4 times the viewport height
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
        }
    });

    // Step 1: Move the track
    hTl.to(horizontalTrack, {
        x: () => -(horizontalTrack.scrollWidth - window.innerWidth),
        ease: "none",
        duration: 3 // Takes 75% of the scroll timeline
    });

    // Step 2: Add a "Wait" at the end (Dwell Time)
    hTl.to({}, { duration: 1 }); // Does nothing for 25% of the scroll, keeping the last panel fixed

    // Link internal cards to the movement of the timeline
    const cards = document.querySelectorAll('.s-card');
    cards.forEach(card => {
        gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: card,
                containerAnimation: hTl, // Links animation to the timeline
                start: "left 90%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Standard Vertical Reveals
    const revealElements = document.querySelectorAll('.phi-text h2, .phi-text p, .cta-content-motion h2');
    revealElements.forEach(el => {
        gsap.from(el, {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // CTA Glow Pulsing
    gsap.to('.cta-bg-glow', {
        scale: 1.2,
        opacity: 0.2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Logo Glitch
    const logo = document.querySelector('.main-logo');
    if(logo) {
        logo.addEventListener('mouseenter', () => {
            gsap.to(logo, { x: 2, repeat: 5, yoyo: true, duration: 0.05, ease: "none", onComplete: () => gsap.set(logo, { x: 0 }) });
        });
    }
});
