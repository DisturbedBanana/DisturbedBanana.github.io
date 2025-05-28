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
    <p>I'm a passionate developer focused on creating beautiful and functional web experiences. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.</p>
  </div>
</section>

<section id="projects" class="projects-section">
  <h2>Featured Projects</h2>
  <div class="auto-scroll-container">
    <div class="auto-scroll">
      <div class="project-card">
        <h3>Project One</h3>
        <p>Description of your first project goes here.</p>
        <a href="/project-one" class="project-link">Learn More</a>
      </div>
      <div class="project-card">
        <h3>Project Two</h3>
        <p>Description of your second project goes here.</p>
        <a href="/project-two" class="project-link">Learn More</a>
      </div>
      <div class="project-card">
        <h3>Project Three</h3>
        <p>Description of your third project goes here.</p>
        <a href="/project-three" class="project-link">Learn More</a>
      </div>
      <div class="project-card">
        <h3>Project Four</h3>
        <p>Description of your fourth project goes here.</p>
        <a href="/project-four" class="project-link">Learn More</a>
      </div>
      <!-- Duplicate cards for seamless scrolling -->
      <div class="project-card">
        <h3>Project One</h3>
        <p>Description of your first project goes here.</p>
        <a href="/project-one" class="project-link">Learn More</a>
      </div>
      <div class="project-card">
        <h3>Project Two</h3>
        <p>Description of your second project goes here.</p>
        <a href="/project-two" class="project-link">Learn More</a>
      </div>
      <div class="project-card">
        <h3>Project Three</h3>
        <p>Description of your third project goes here.</p>
        <a href="/project-three" class="project-link">Learn More</a>
      </div>
      <div class="project-card">
        <h3>Project Four</h3>
        <p>Description of your fourth project goes here.</p>
        <a href="/project-four" class="project-link">Learn More</a>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    color: white;
    text-align: center;
    padding: 2rem;
  }

  .hero-content {
    max-width: 800px;
  }

  .hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .cta-button {
    padding: 0.8rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: transform 0.2s;
  }

  .cta-button:hover {
    transform: translateY(-2px);
  }

  .primary {
    background: white;
    color: #6366f1;
  }

  .secondary {
    border: 2px solid white;
    color: white;
  }

  section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .about-section {
    background: #f8fafc;
  }

  .about-content {
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Auto-scrolling projects section */
  .auto-scroll-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 2rem 0;
  }

  .auto-scroll {
    display: flex;
    gap: 2rem;
    animation: scroll 30s linear infinite;
    width: max-content;
  }

  .auto-scroll:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .project-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    transition: transform 0.2s;
    min-width: 300px;
    max-width: 300px;
  }

  .project-card:hover {
    transform: translateY(-4px);
  }

  .project-link {
    display: inline-block;
    margin-top: 1rem;
    color: #6366f1;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
  }

  .project-link:hover {
    color: #4f46e5;
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2.5rem;
    }
    
    .cta-buttons {
      flex-direction: column;
    }

    .project-card {
      min-width: 250px;
      max-width: 250px;
    }
  }
</style> 