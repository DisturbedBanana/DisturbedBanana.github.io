---
layout: default
title: Welcome
---

<div class="hero full-bleed">
  <!-- Animated background elements -->
  <div class="hero-bg-patterns">
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
      <div class="shape shape-6"></div>
    </div>
    <div class="geometric-grid"></div>
    <div class="particle-field"></div>
    <div class="wave-overlay"></div>
  </div>
  
  <div class="hero-content">
    <h1>Lucas Guichard</h1>
    <p class="subtitle">Gameplay & Tools Developer, UX enthusiast</p>
    <div class="cta-buttons">
      <a href="#projects" class="cta-button primary">View Projects</a>
      <a href="/contact" class="cta-button secondary">Contact Me</a>
    </div>
  </div>
</div>

<section id="about" class="about-section">
  <h2>About Me</h2>
  <div class="about-content">
    <p>As a passionate Gameplay & Tools Developer and UX enthusiast, I focus on creating engaging and intuitive experiences. I specialize in building robust gameplay systems and the custom tools that empower designers to bring their visions to life, always with a sharp eye on clean code and thoughtful user-centered design.</p>
  </div>
</section>

<section id="skills" class="skills-section">
  <h2 class="section-title">My Skills</h2>
  <div class="skills-grid">
    <div class="skill-category">
      <h3>Technical Skills</h3>
      <div class="skills--sub-category">
        <h4>Languages</h4>
        <div class="skills-container">
          <span class="skill-badge core-skill">C#</span>
          <span class="skill-badge core-skill">C++</span>
        </div>
      </div>
      <div class="skills-sub-category">
        <h4>Game Engines</h4>
        <div class="skills-container">
          <span class="skill-badge core-skill">Unity</span>
          <span class="skill-badge core-skill">Unreal Engine</span>
        </div>
      </div>
      <div class="skills-sub-category">
        <h4>Tools & Platforms</h4>
        <div class="skills-container">
          <span class="skill-badge">Jira</span>
          <span class="skill-badge">Github</span>
          <span class="skill-badge">Figma</span>
        </div>
      </div>
    </div>
    <div class="skill-category">
      <h3>Soft Skills</h3>
      <div class="skills-container">
        <span class="skill-badge">Design Thinking</span>
        <span class="skill-badge">Problem Solving</span>
        <span class="skill-badge">Team Collaboration</span>
        <span class="skill-badge">Agile Methodologies</span>
        <span class="skill-badge">User-Centric Design</span>
      </div>
    </div>
  </div>
</section>

<section id="projects" class="projects-section full-bleed">
  <div class="project-grid-container">
    <h2 class="section-title">Projects</h2>
    <div class="project-grid">
      {% for project in site.projects %}
        <a href="{{ project.url | relative_url }}" class="project-card-link">
          <div class="project-card">
            <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-card-bg">
            <div class="project-card-content">
              <h3 class="project-card-title">{{ project.title }}</h3>
              <p class="project-card-excerpt">{{ project.excerpt }}</p>
            </div>
          </div>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<style>
  .main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  /* Hero Section - Completely Redesigned */
  .hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    color: white;
    text-align: center;
    padding: 2rem;
    background: 
      radial-gradient(circle at 20% 80%, rgba(231, 76, 60, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(52, 152, 219, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(155, 89, 182, 0.3) 0%, transparent 50%),
      linear-gradient(135deg, 
        #e74c3c 0%, 
        #f39c12 15%, 
        #f1c40f 30%, 
        #2ecc71 45%, 
        #3498db 60%, 
        #9b59b6 75%, 
        #e74c3c 100%);
    background-size: 400% 400%, 300% 300%, 350% 350%, 400% 400%;
    animation: 
      scroll-bg 20s ease infinite,
      pulse-glow 8s ease-in-out infinite;
  }

  /* Animated Background Patterns */
  .hero-bg-patterns {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  /* Floating Geometric Shapes */
  .floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .shape {
    position: absolute;
    opacity: 0.1;
    animation: float 15s ease-in-out infinite;
  }

  .shape-1 {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, #fff, rgba(255,255,255,0.3));
    border-radius: 50%;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  .shape-2 {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, #fff, rgba(255,255,255,0.2));
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    top: 60%;
    right: 15%;
    animation-delay: -3s;
  }

  .shape-3 {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, #fff, rgba(255,255,255,0.15));
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    top: 30%;
    right: 30%;
    animation-delay: -6s;
  }

  .shape-4 {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #fff, rgba(255,255,255,0.25));
    border-radius: 8px;
    top: 70%;
    left: 20%;
    animation-delay: -9s;
  }

  .shape-5 {
    width: 70px;
    height: 70px;
    background: linear-gradient(45deg, #fff, rgba(255,255,255,0.2));
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    top: 15%;
    left: 60%;
    animation-delay: -12s;
  }

  .shape-6 {
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, #fff, rgba(255,255,255,0.3));
    border-radius: 50%;
    top: 80%;
    right: 25%;
    animation-delay: -15s;
  }

  /* Geometric Grid Pattern */
  .geometric-grid {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: grid-move 30s linear infinite;
  }

  /* Particle Field */
  .particle-field {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 100px 100px, 150px 150px;
    animation: particle-drift 25s ease-in-out infinite;
  }

  /* Wave Overlay */
  .wave-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(45deg, 
      rgba(255,255,255,0.1) 25%, 
      transparent 25%, 
      transparent 50%, 
      rgba(255,255,255,0.1) 50%, 
      rgba(255,255,255,0.1) 75%, 
      transparent 75%);
    background-size: 60px 60px;
    animation: wave-flow 12s linear infinite;
  }

  /* Hero Content */
  .hero-content { 
    max-width: 800px; 
    position: relative;
    z-index: 2;
    backdrop-filter: blur(10px);
    background: rgba(255,255,255,0.1);
    padding: 3rem;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.2);
    box-shadow: 
      0 20px 40px rgba(0,0,0,0.3),
      inset 0 1px 0 rgba(255,255,255,0.2);
  }

  .hero h1 { 
    font-size: 4rem; 
    margin-bottom: 1rem; 
    background: linear-gradient(45deg, #fff, #f0f0f0, #fff);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: text-shimmer 3s ease-in-out infinite;
    text-shadow: 0 0 30px rgba(255,255,255,0.5);
  }

  .subtitle { 
    font-size: 1.8rem; 
    margin-bottom: 2rem; 
    opacity: 0.95;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    font-weight: 300;
  }

  .cta-buttons { 
    display: flex; 
    gap: 1.5rem; 
    justify-content: center; 
  }

  .cta-button { 
    padding: 1rem 2.5rem; 
    border-radius: 50px; 
    text-decoration: none; 
    font-weight: 600; 
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.3);
  }

  .cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  .cta-button:hover::before {
    left: 100%;
  }

  .cta-button:hover { 
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }

  .primary { 
    background: rgba(255,255,255,0.9); 
    color: #6366f1; 
  }

  .secondary { 
    background: rgba(255,255,255,0.1); 
    color: white; 
  }

  /* Animations */
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-20px) rotate(90deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
    75% { transform: translateY(-30px) rotate(270deg); }
  }

  @keyframes grid-move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }

  @keyframes particle-drift {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-20px, -20px); }
  }

  @keyframes wave-flow {
    0% { transform: translateX(0); }
    100% { transform: translateX(60px); }
  }

  @keyframes text-shimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes scroll-bg { 
    0% { background-position: 0% 50%, 0% 0%, 0% 0%, 0% 50%; } 
    50% { background-position: 100% 50%, 100% 100%, 100% 100%, 100% 50%; } 
    100% { background-position: 0% 50%, 0% 0%, 0% 0%, 0% 50%; } 
  }

  @keyframes pulse-glow {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }

  @keyframes background-shift {
    0% {
      background-position: 0% 50%, 100% 50%, 50% 100%;
    }
    25% {
      background-position: 25% 75%, 75% 25%, 75% 75%;
    }
    50% {
      background-position: 50% 0%, 0% 100%, 100% 0%;
    }
    75% {
      background-position: 75% 25%, 25% 75%, 25% 25%;
    }
    100% {
      background-position: 0% 50%, 100% 50%, 50% 100%;
    }
  }

  @keyframes subtle-dark-shift {
    0%   { background-color: #0c0a18; }
    25%  { background-color: #201a3a; }
    50%  { background-color: #2c2a48; }
    75%  { background-color: #201a3a; }
    100% { background-color: #0c0a18; }
  }

  /* General Section Styling */
  section:not(.full-bleed) { padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; }
  .section-title { text-align: center; margin-bottom: 3rem; font-size: 2.5rem; }

  /* About Me Section */
  .about-section {
    padding: 4rem 0;
    text-align: center;
  }

  .about-section h2 { text-align: center; }
  .about-content { max-width: 800px; margin: 0 auto; line-height: 1.6; text-align: center; }
  .about-content p { color: var(--text-secondary); }

  /* Skills Section */
  .skills-section {
    padding: 4rem 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .skills-section .section-title {
    margin-bottom: 2rem;
  }

  .skills-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; margin-top: 2rem; text-align: left; }
  @media (min-width: 768px) { .skills-grid { grid-template-columns: 1fr 1fr; } }
  .skill-category h3 { margin-bottom: 1.5rem; color: var(--accent-color); }
  .skills-sub-category { margin-top: 1.5rem; }
  .skills-sub-category h4 { margin-bottom: 1rem; font-size: 1.1rem; color: var(--text-color); }
  .skills-container { display: flex; flex-wrap: wrap; gap: 0.75rem; }

  /* Rebuilt Skill Badge Animation */
  @property --bg-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
  @keyframes rainbow-bg { to { --bg-angle: 360deg; } }
  .skill-badge {
    color: var(--text-secondary);
    padding: 0.5rem 1.25rem;
    border-radius: 9999px;
    font-weight: 500;
    transition: opacity 0.5s ease, transform 0.5s ease, color 0.2s ease;
    opacity: 0;
    transform: translateY(20px);
    user-select: none;
    position: relative;
    z-index: 1;
    background: transparent;
  }
  .skill-badge::before, .skill-badge::after { content: ''; position: absolute; border-radius: inherit; }
  .skill-badge::after { top: 0; left: 0; right: 0; bottom: 0; background: var(--card-bg); z-index: -1; }
  .skill-badge::before {
    top: -2px; left: -2px; right: -2px; bottom: -2px;
    background: linear-gradient(var(--bg-angle), #e74c3c, #f39c12, #f1c40f, #2ecc71, #3498db, #9b59b6, #e74c3c);
    background-size: 200% 200%;
    z-index: -2;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    animation: rainbow-bg 3s linear infinite;
  }
  .skill-badge:hover { color: var(--accent-color); }
  .skill-badge:hover::before { opacity: 1; }
  .skill-badge.core-skill { color: var(--accent-color); animation: pulse-glow 3s infinite ease-in-out; }
  .skill-badge.core-skill:hover { animation-play-state: paused; }
  .skill-badge.visible { opacity: 1; transform: translateY(0); }
  @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 5px 0px var(--accent-color); } 50% { box-shadow: 0 0 15px 5px var(--accent-color); } }

  /* Projects Section */
  .projects-section {
    padding: 4rem 0;
    background-color: #0c0a18;
    position: relative;
    overflow: hidden;
    text-align: center;
    animation: subtle-dark-shift 8s ease-in-out infinite;
  }

  .project-grid-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .projects-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      radial-gradient(circle at 15% 50%, rgba(155, 89, 182, 0.2), transparent 40%),
      radial-gradient(circle at 85% 30%, rgba(52, 152, 219, 0.15), transparent 40%),
      radial-gradient(circle at 50% 80%, rgba(231, 76, 60, 0.1), transparent 40%);
    animation: pulse-glow 10s ease-in-out infinite, background-shift 15s ease-in-out infinite;
    z-index: 1;
  }

  .projects-section .section-title {
    position: relative;
    z-index: 2;
    color: #fff;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    position: relative;
    z-index: 2;
    text-align: left;
  }

  .project-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .project-card-link:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(155, 89, 182, 0.6);
  }

  .project-card {
    aspect-ratio: 4 / 3;
    position: relative;
    display: flex;
    align-items: flex-end;
    border-radius: 15px;
    overflow: hidden;
    background: rgba(22, 18, 40, 0.5);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .project-card-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease, filter 0.4s ease;
    filter: brightness(0.7);
  }

  .project-card-link:hover .project-card-bg {
    transform: scale(1.05);
    filter: brightness(0.9);
  }

  .project-card-content {
    position: relative;
    z-index: 2;
    padding: 1.5rem;
    color: #fff;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
    transform: translateY(calc(100% - 4.5rem)); /* Adjust this value to control how much is visible */
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .project-card-title {
    margin: 0 0 0.5rem;
    font-size: 1.5rem;
    transition: transform 0.4s ease;
  }

  .project-card-excerpt {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.4;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card-link:hover .project-card-content {
    transform: translateY(0);
  }

  .project-card-link:hover .project-card-excerpt {
    opacity: 1;
    transition-delay: 0.2s;
  }

  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    .hero h1 { font-size: 2.5rem; }
    .subtitle { font-size: 1.3rem; }
    .cta-buttons { flex-direction: column; }
    .hero-content { padding: 2rem; }
    .shape { display: none; }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Staggered fade-in for skills
    const skillBadges = document.querySelectorAll('.skill-badge');
    const skillObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });
    skillBadges.forEach((badge, index) => {
      badge.style.transitionDelay = `${index * 100}ms`;
      skillObserver.observe(badge);
    });

    // Carousel functionality
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
      const slides = Array.from(carouselTrack.children);
      const prevButton = document.querySelector('.carousel-button.prev');
      const nextButton = document.querySelector('.carousel-button.next');
      const indicators = document.querySelectorAll('.indicator');
      let currentIndex = 0;
      const totalSlides = slides.length;

      if (totalSlides > 0) {
        function updateCarouselPosition() {
          const slideWidth = slides[0].getBoundingClientRect().width;
          const newTransform = -currentIndex * slideWidth;
          carouselTrack.style.transform = `translateX(${newTransform}px)`;
        }

        function updateCarouselUI() {
          indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
          });
          if(prevButton && nextButton) {
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === totalSlides - 1;
          }
        }

        function goToSlide(index) {
          carouselTrack.style.transition = 'transform 0.5s ease-in-out';
          currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
          updateCarouselPosition();
          updateCarouselUI();
        }
        
        if(prevButton && nextButton) {
            prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
            nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
        }
        
        indicators.forEach((indicator, index) => {
          indicator.addEventListener('click', () => goToSlide(index));
        });
        
        document.addEventListener('keydown', (e) => {
          const isCarouselFocused = document.activeElement.closest('.projects-carousel');
          if (isCarouselFocused) {
              if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  goToSlide(currentIndex - 1);
              } else if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  goToSlide(currentIndex + 1);
              }
          }
        });

        window.addEventListener('resize', () => {
          carouselTrack.style.transition = 'none';
          updateCarouselPosition();
        });

        // Initial setup
        updateCarouselUI();
      }
    }
  });
</script> 