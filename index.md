---
layout: default
title: Welcome
---

<div class="hero">
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

<section id="projects" class="projects-section">
  <h2 class="section-title">Projects</h2>
  <div class="projects-carousel">
    <button class="carousel-button prev" aria-label="Previous project">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>
    
    <div class="carousel-container">
      <div class="carousel-track">
        {% for project in site.projects %}
          <div class="project-slide" data-index="{{ forloop.index0 }}">
            <div class="project-card">
              <div class="project-image-container">
                <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" class="project-image">
              </div>
              <div class="card-content">
                <h3>{{ project.title }}</h3>
                <p>{{ project.excerpt }}</p>
                <a href="{{ project.url | relative_url }}" class="project-link">View Details</a>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
    
    <button class="carousel-button next" aria-label="Next project">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
  </div>
  
  <div class="carousel-indicators">
    {% for project in site.projects %}
      <button class="indicator" data-index="{{ forloop.index0 }}" aria-label="Go to project {{ forloop.index }}"></button>
    {% endfor %}
  </div>
</section>

<style>
  /* Hero Section */
  .hero {
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #e74c3c, #f39c12, #f1c40f, #2ecc71, #3498db, #9b59b6);
    background-size: 400% 400%;
    animation: scroll-bg 15s ease infinite;
    color: white;
    text-align: center;
    padding: 2rem;
  }

  .hero-content { max-width: 800px; }
  .hero h1 { font-size: 3.5rem; margin-bottom: 1rem; }
  .subtitle { font-size: 1.5rem; margin-bottom: 2rem; opacity: 0.9; }
  .cta-buttons { display: flex; gap: 1rem; justify-content: center; }
  .cta-button { padding: 0.8rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: 600; transition: transform 0.2s; }
  .cta-button:hover { transform: translateY(-2px); }
  .primary { background: white; color: #6366f1; }
  .secondary { border: 2px solid white; color: white; }

  /* General Section Styling */
  section { padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; }
  .section-title { text-align: center; margin-bottom: 3rem; font-size: 2.5rem; }

  /* About Me Section */
  .about-section { background: var(--card-bg); width: 100vw; max-width: none; margin-left: calc(50% - 50vw); margin-right: calc(50% - 50vw); padding: 4rem 2rem; }
  .about-section h2 { text-align: center; }
  .about-content { max-width: 800px; margin: 0 auto; line-height: 1.6; text-align: center; }

  /* Skills Section */
  .skills-section { text-align: center; }
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

  /* Global Animations */
  @keyframes scroll-bg { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }

  /* Projects Section */
  .projects-section { text-align: center; }
  .projects-carousel { position: relative; max-width: 960px; margin: 0 auto; }
  .carousel-container { overflow: hidden; border-radius: 15px; position: relative; z-index: 1; }
  .carousel-track { display: flex; }
  .project-slide { min-width: 100%; flex-shrink: 0; padding: 0 5px; }
  .project-card { background-color: transparent; border-radius: 15px; position: relative; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); z-index: 1; height: 100%; }
  .project-card::before, .project-card::after { content: ''; position: absolute; border-radius: inherit; }
  .project-card::after { top: 0; left: 0; right: 0; bottom: 0; background: var(--card-bg); z-index: -1; }
  .project-card::before {
    top: -2px; left: -2px; right: -2px; bottom: -2px;
    background: linear-gradient(var(--bg-angle), #e74c3c, #f39c12, #f1c40f, #2ecc71, #3498db, #9b59b6, #e74c3c);
    background-size: 200% 200%;
    z-index: -2;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    animation: rainbow-bg 3s linear infinite;
  }
  .project-card:hover::before { opacity: 1; }
  .project-image-container { width: 100%; height: 300px; background-color: #000; display: flex; align-items: center; justify-content: center; border-top-left-radius: 15px; border-top-right-radius: 15px; overflow: hidden; }
  .project-card .project-image { width: 100%; height: 100%; object-fit: contain; display: block; }
  .project-card .card-content { padding: 2rem; text-align: left; }
  .project-card .card-content h3 { margin-top: 0; margin-bottom: 1rem; color: var(--text-color); font-size: 1.5rem; }
  .project-card .card-content p { color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.6; min-height: auto; }
  .project-link { display: inline-block; padding: 0.75rem 1.5rem; background: var(--accent-color); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; transition: background-color 0.3s ease; }
  .project-link:hover { background: var(--accent-hover); }
  .carousel-button { position: absolute; top: 50%; transform: translateY(-50%); z-index: 2; background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.1); color: white; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; }
  .carousel-button.prev { left: 1rem; }
  .carousel-button.next { right: 1rem; }
  .carousel-button:hover { background: var(--accent-color); transform: translateY(-50%) scale(1.1); }
  .carousel-button:disabled { opacity: 0.5; cursor: not-allowed; transform: translateY(-50%); }
  .carousel-indicators { display: flex; justify-content: center; gap: 0.5rem; margin-top: 2rem; }
  .indicator { width: 12px; height: 12px; border-radius: 50%; border: none; background: var(--border-color); cursor: pointer; transition: all 0.3s ease; }
  .indicator.active { background: var(--accent-color); transform: scale(1.2); }
  .indicator:hover { background: var(--accent-color); }

  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    .hero h1 { font-size: 2.5rem; }
    .cta-buttons { flex-direction: column; }
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