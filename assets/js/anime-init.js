document.addEventListener('DOMContentLoaded', () => {
    // Intro timeline for hero
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero .subtitle');
    const heroButtons = document.querySelectorAll('.hero .cta-button');

    if (window.anime) {
        if (heroTitle) {
            anime({
                targets: heroTitle,
                translateY: [20, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 900
            });
        }
        if (heroSubtitle) {
            anime({
                targets: heroSubtitle,
                translateY: [16, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 900,
                delay: 150
            });
        }
        if (heroButtons && heroButtons.length) {
            anime({
                targets: heroButtons,
                translateY: [16, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 800,
                delay: anime.stagger(120, { start: 250 })
            });
        }

        // Nav links subtle entrance
        anime({
            targets: '.site-nav .nav-link',
            translateY: [-6, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 600,
            delay: anime.stagger(80, { start: 200 })
        });
    }

    // Intersection-based reveals
    const revealWithAnime = (selector, options) => {
        const elements = document.querySelectorAll(selector);
        if (!elements.length) return;
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                if (window.anime) {
                    anime(Object.assign({
                        targets: entry.target,
                        translateY: [20, 0],
                        opacity: [0, 1],
                        duration: 700,
                        easing: 'easeOutCubic'
                    }, options || {}));
                } else {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'none';
                }
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.2 });

        elements.forEach((el, idx) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(12px)';
            el.style.willChange = 'transform, opacity';
            observer.observe(el);
        });
    };

    // Projects grid cards
    revealWithAnime('.project-card', { delay: (el, i) => i * 80 });

    // Skills badges (works with existing visibility logic)
    revealWithAnime('.skills-grid .skill-badge', { delay: (el, i) => i * 40, duration: 600 });

    // Section titles
    revealWithAnime('.section-title', { duration: 650 });

    // Hero banner overhaul using anime.js examples (stagger, SVG draw, motion path)
    const hero = document.querySelector('.hero');
    if (hero && window.anime) {
        ['hero-grid', 'hero-svg', 'hero-overlay', 'hero-burst', 'hero-ribbons'].forEach(cls => {
            document.querySelectorAll('.' + cls).forEach(n => n.remove());
        });

        const overlay = document.createElement('div');
        overlay.className = 'hero-overlay';
        Object.assign(overlay.style, {
            position: 'absolute',
            inset: '0',
            background: 'radial-gradient(900px 600px at 15% 20%, rgba(255,255,255,0.18), transparent 60%),\\\n                         radial-gradient(900px 600px at 85% 30%, rgba(129,140,248,0.35), transparent 55%),\\\n                         linear-gradient(120deg, #0b0b16, #1a1430 40%, #0b0b16 80%)',
            zIndex: '1',
            pointerEvents: 'none'
        });
        hero.appendChild(overlay);

        const svgNS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(svgNS, 'svg');
        svg.classList.add('hero-svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        Object.assign(svg.style, {
            position: 'absolute',
            inset: '0',
            zIndex: '2',
            overflow: 'visible',
            pointerEvents: 'none',
            mixBlendMode: 'screen'
        });

        const defs = document.createElementNS(svgNS, 'defs');
        const grad = document.createElementNS(svgNS, 'linearGradient');
        grad.setAttribute('id', 'heroGrad');
        grad.setAttribute('x1', '0%'); grad.setAttribute('y1', '0%');
        grad.setAttribute('x2', '100%'); grad.setAttribute('y2', '0%');
        const stops = [
            ['0%', '#e74c3c'], ['20%', '#f39c12'], ['40%', '#f1c40f'],
            ['60%', '#2ecc71'], ['80%', '#3498db'], ['100%', '#9b59b6']
        ];
        stops.forEach(([offset, color]) => {
            const s = document.createElementNS(svgNS, 'stop');
            s.setAttribute('offset', offset);
            s.setAttribute('stop-color', color);
            grad.appendChild(s);
        });
        defs.appendChild(grad);
        svg.appendChild(defs);

        // Removed the big line path animation and the dot that was following it

        const grid = document.createElement('div');
        grid.className = 'hero-grid';
        Object.assign(grid.style, {
            position: 'absolute',
            inset: '0',
            display: 'grid',
            gridTemplateColumns: 'repeat(24, 1fr)',
            gridTemplateRows: 'repeat(10, 1fr)',
            gap: '10px',
            padding: '3rem',
            zIndex: '1',
            pointerEvents: 'none'
        });
        hero.appendChild(grid);

        const dotElems = [];
        for (let i = 0; i < 24 * 10; i++) {
            const el = document.createElement('span');
            const hue = (i * 15) % 360; // Spread rainbow colors across grid
            Object.assign(el.style, {
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: `radial-gradient(circle, hsl(${hue}, 80%, 70%) 0%, hsl(${hue}, 60%, 50%) 100%)`,
                boxShadow: `0 0 12px hsl(${hue}, 80%, 60%), 0 0 24px hsl(${hue}, 60%, 40%)`,
                opacity: '0.0',
                transform: 'scale(0.6)'
            });
            grid.appendChild(el);
            dotElems.push(el);
        }

        // Static grid with hover effects
        anime({
            targets: dotElems,
            opacity: [0, 0.4],
            scale: [0.6, 1],
            easing: 'easeOutQuad',
            duration: 1200,
            delay: anime.stagger(60, { grid: [24, 10], from: 'center' })
        });

        // Grid dots use cursor proximity system instead of individual hover events

        anime({
            targets: overlay,
            opacity: [0.85, 1],
            duration: 2000,
            easing: 'easeInOutSine',
            direction: 'alternate',
            loop: true
        });

        // Cursor-reactive spotlight and grid interaction
        const heroContent = hero.querySelector('.hero-content');
        let heroRect = hero.getBoundingClientRect();
        let mouseState = { x: 0, y: 0, active: false };

        const computeGridMeta = () => ({
            cols: 24,
            rows: 10,
            cellW: heroRect.width / 24,
            cellH: heroRect.height / 10
        });
        let gridMeta = computeGridMeta();

        const onMove = (e) => {
            heroRect = hero.getBoundingClientRect();
            gridMeta = computeGridMeta();
            mouseState.x = e.clientX - heroRect.left;
            mouseState.y = e.clientY - heroRect.top;
            mouseState.active = true;
        };
        hero.addEventListener('mousemove', onMove);
        hero.addEventListener('mouseenter', () => { mouseState.active = true; });
        hero.addEventListener('mouseleave', () => { mouseState.active = false; });
        window.addEventListener('resize', () => { heroRect = hero.getBoundingClientRect(); gridMeta = computeGridMeta(); });

        const radius = 180; // px influence radius
        const minScale = 0.6;
        const maxScale = 1.9;
        const baseOpacity = 0.4; // Keep other dots at normal opacity

        const rafUpdate = () => {
            if (mouseState.active) {
                // Grid dots reaction to cursor proximity
                for (let i = 0; i < dotElems.length; i++) {
                    const col = i % gridMeta.cols;
                    const row = Math.floor(i / gridMeta.cols);
                    const cx = (col + 0.5) * gridMeta.cellW;
                    const cy = (row + 0.5) * gridMeta.cellH;
                    const dx = cx - mouseState.x;
                    const dy = cy - mouseState.y;
                    const dist = Math.hypot(dx, dy);
                    
                    if (dist <= radius) {
                        // Only affect dots within influence radius
                        const influence = 1 - dist / radius;
                        const scale = 1 + (maxScale - 1) * influence; // Scale from 1 to maxScale
                        const opacity = baseOpacity + (1 - baseOpacity) * influence;
                        const translateY = (dy / radius) * 8 * influence;
                        dotElems[i].style.transform = `translateY(${translateY}px) scale(${scale})`;
                        dotElems[i].style.opacity = String(opacity);
                    } else {
                        // Keep distant dots at normal state
                        dotElems[i].style.transform = 'translateY(0px) scale(1)';
                        dotElems[i].style.opacity = String(baseOpacity);
                    }
                }
            } else {
                // Reset grid dots when cursor leaves
                for (let i = 0; i < dotElems.length; i++) {
                    dotElems[i].style.transform = 'translateY(0px) scale(1)';
                    dotElems[i].style.opacity = '0.4';
                }
            }
            requestAnimationFrame(rafUpdate);
        };
        requestAnimationFrame(rafUpdate);
    }
});

// Subtle animated effects: gentle floating particles
document.addEventListener('DOMContentLoaded', () => {
    if (!window.anime) return;
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Gentle floating particles
    const particleContainer = document.createElement('div');
    particleContainer.className = 'hero-particles';
    Object.assign(particleContainer.style, {
        position: 'absolute', inset: '0', zIndex: '1', pointerEvents: 'none', overflow: 'hidden'
    });
    hero.appendChild(particleContainer);

    const createParticle = () => {
        const particle = document.createElement('div');
        const size = 2 + Math.random() * 3;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        Object.assign(particle.style, {
            position: 'absolute', left: `${x}%`, top: `${y}%`, width: `${size}px`, height: `${size}px`,
            background: 'rgba(255,255,255,0.3)', borderRadius: '50%', transform: 'translate(-50%, -50%)'
        });
        particleContainer.appendChild(particle);

        // Gentle floating animation
        anime({
            targets: particle,
            translateY: [0, -30 - Math.random() * 20],
            translateX: [0, (Math.random() - 0.5) * 40],
            opacity: [0.3, 0.8, 0.3],
            duration: 8000 + Math.random() * 4000,
            easing: 'easeInOutSine',
            direction: 'alternate',
            loop: true,
            complete: () => particle.remove()
        });
    };

    // Create particles periodically
    const createParticles = () => {
        createParticle();
        setTimeout(createParticles, 2000 + Math.random() * 3000);
    };
    createParticles();
});

// Floating geometric shapes behind hero content
document.addEventListener('DOMContentLoaded', () => {
    if (!window.anime) return;
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create container for floating shapes
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'hero-shapes';
    Object.assign(shapesContainer.style, {
        position: 'absolute', inset: '0', zIndex: '1', overflow: 'hidden', pointerEvents: 'none'
    });
    hero.appendChild(shapesContainer);

    const createFloatingShape = (type, size, x, y, color, delay) => {
        const shape = document.createElement('div');
        shape.className = `floating-shape ${type}`;
        
        Object.assign(shape.style, {
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}px`,
            height: `${size}px`,
            background: color,
            opacity: '0.1',
            transform: 'translate(-50%, -50%)',
            borderRadius: type === 'circle' ? '50%' : type === 'triangle' ? '0' : '8px',
            filter: 'blur(1px)'
        });

        if (type === 'triangle') {
            shape.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        }

        shapesContainer.appendChild(shape);

        // Gentle floating animation that follows gradient movement
        anime({
            targets: shape,
            translateY: [0, -30 - Math.random() * 40],
            translateX: [0, (Math.random() - 0.5) * 60],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
            duration: 20000, // Match gradient duration
            easing: 'easeInOutSine',
            direction: 'alternate',
            loop: true,
            delay: delay
        });

        return shape;
    };

    // Create various floating shapes
    const shapes = [];
    const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
    const types = ['circle', 'square', 'triangle'];

    for (let i = 0; i < 8; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        const size = 20 + Math.random() * 40;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 2000;
        
        shapes.push(createFloatingShape(type, size, x, y, color, delay));
    }
});

// Animated gradient background
document.addEventListener('DOMContentLoaded', () => {
    if (!window.anime) return;
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create pronounced animated starfield background
    const starfield = document.createElement('div');
    starfield.className = 'starfield';
    Object.assign(starfield.style, {
        position: 'absolute',
        inset: '0',
        zIndex: '0',
        background: 'radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.3) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(240, 147, 251, 0.3) 0%, transparent 60%), linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #16213e 100%)',
        pointerEvents: 'none'
    });
    hero.appendChild(starfield);

    // Create bright twinkling stars
    const createStar = (size, x, y, color, delay, isBright = false) => {
        const star = document.createElement('div');
        star.className = 'star';
        const glowSize = isBright ? size * 8 : size * 4;
        Object.assign(star.style, {
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}px`,
            height: `${size}px`,
            background: color,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: isBright ? '0.8' : '0.6',
            boxShadow: `0 0 ${glowSize}px ${color}, 0 0 ${glowSize * 2}px ${color}`
        });
        starfield.appendChild(star);

        // More pronounced twinkling animation
        anime({
            targets: star,
            scale: [0.3, 2.5, 0.3],
            opacity: [0.2, 1, 0.2],
            duration: 2000 + Math.random() * 3000,
            easing: 'easeInOutSine',
            loop: true,
            delay: delay
        });

        return star;
    };

    // Create many more bright stars
    const stars = [];
    const starColors = ['#ffffff', '#667eea', '#f093fb', '#4facfe', '#10b981', '#f59e0b', '#ef4444'];
    
    // Create bright stars (larger, more prominent)
    for (let i = 0; i < 15; i++) {
        const size = 3 + Math.random() * 5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        const delay = Math.random() * 3000;
        stars.push(createStar(size, x, y, color, delay, true));
    }
    
    // Create smaller twinkling stars
    for (let i = 0; i < 40; i++) {
        const size = 1 + Math.random() * 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        const delay = Math.random() * 4000;
        stars.push(createStar(size, x, y, color, delay, false));
    }

    // More pronounced background pulsing
    anime({
        targets: starfield,
        opacity: [0.7, 1, 0.7],
        duration: 6000,
        easing: 'easeInOutSine',
        loop: true
    });

    // Add shooting stars occasionally
    const createShootingStar = () => {
        const shootingStar = document.createElement('div');
        Object.assign(shootingStar.style, {
            position: 'absolute',
            left: '0',
            top: `${Math.random() * 50}%`,
            width: '2px',
            height: '2px',
            background: '#ffffff',
            borderRadius: '50%',
            boxShadow: '0 0 10px #ffffff, 0 0 20px #ffffff',
            opacity: '0'
        });
        starfield.appendChild(shootingStar);

        anime({
            targets: shootingStar,
            translateX: ['0%', '100%'],
            translateY: ['0%', '100%'],
            opacity: [0, 1, 0],
            duration: 2000,
            easing: 'easeOutQuad',
            complete: () => shootingStar.remove()
        });
    };

    // Create shooting stars every 3-8 seconds
    const createShootingStars = () => {
        createShootingStar();
        setTimeout(createShootingStars, 3000 + Math.random() * 5000);
    };
    createShootingStars();
});

// Animated tech grid lines
document.addEventListener('DOMContentLoaded', () => {
    if (!window.anime) return;
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create animated grid lines container
    const gridLinesContainer = document.createElement('div');
    gridLinesContainer.className = 'tech-grid-lines';
    Object.assign(gridLinesContainer.style, {
        position: 'absolute',
        inset: '0',
        zIndex: '1',
        overflow: 'hidden',
        pointerEvents: 'none',
        opacity: '0.2'
    });
    hero.appendChild(gridLinesContainer);

    // Create horizontal and vertical grid lines
    const createGridLine = (type, position, length, delay) => {
        const line = document.createElement('div');
        line.className = `grid-line ${type}`;
        
        if (type === 'horizontal') {
            Object.assign(line.style, {
                position: 'absolute',
                left: '0',
                top: `${position}%`,
                width: `${length}%`,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #6366f1, transparent)',
                transform: 'translateX(-100%)'
            });
        } else {
            Object.assign(line.style, {
                position: 'absolute',
                top: '0',
                left: `${position}%`,
                height: `${length}%`,
                width: '1px',
                background: 'linear-gradient(180deg, transparent, #8b5cf6, transparent)',
                transform: 'translateY(-100%)'
            });
        }
        
        gridLinesContainer.appendChild(line);

        // Animate line appearance
        anime({
            targets: line,
            translateX: type === 'horizontal' ? ['-100%', '100%'] : [0, 0],
            translateY: type === 'vertical' ? ['-100%', '100%'] : [0, 0],
            opacity: [0, 1, 0],
            duration: 3000 + Math.random() * 2000,
            easing: 'easeInOutSine',
            delay: delay,
            loop: true
        });

        return line;
    };

    // Create multiple grid lines
    const lines = [];
    
    // Horizontal lines
    for (let i = 0; i < 8; i++) {
        const position = 10 + i * 10;
        const length = 60 + Math.random() * 40;
        const delay = Math.random() * 3000;
        lines.push(createGridLine('horizontal', position, length, delay));
    }
    
    // Vertical lines
    for (let i = 0; i < 6; i++) {
        const position = 15 + i * 15;
        const length = 40 + Math.random() * 60;
        const delay = Math.random() * 3000;
        lines.push(createGridLine('vertical', position, length, delay));
    }

    // Add scanning effect
    const scanner = document.createElement('div');
    Object.assign(scanner.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '2px',
        height: '100%',
        background: 'linear-gradient(180deg, transparent, #06b6d4, transparent)',
        opacity: '0.8',
        transform: 'translateX(-100%)'
    });
    gridLinesContainer.appendChild(scanner);

    // Animate scanner
    anime({
        targets: scanner,
        translateX: ['-100%', '100%'],
        duration: 4000,
        easing: 'easeInOutSine',
        loop: true
    });
});


