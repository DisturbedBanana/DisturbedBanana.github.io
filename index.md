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

<section id="projects" class="projects-section">
  <h2>Featured Projects</h2>
  <div class="auto-scroll-container">
    <div class="auto-scroll">
      {%- for project in site.projects -%}
      <div class="project-card">
        <img src="{{ project.image }}" alt="{{ project.title }}" style="width:100%;border-radius:0.5rem;margin-bottom:1rem;">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-desc">{{ project.excerpt }}</p>
        <a href="{{ project.url }}" class="project-link">Learn More</a>
      </div>
      {%- endfor -%}
      {%- for project in site.projects -%}
      <div class="project-card">
        <img src="{{ project.image }}" alt="{{ project.title }}" style="width:100%;border-radius:0.5rem;margin-bottom:1rem;">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-desc">{{ project.excerpt }}</p>
        <a href="{{ project.url }}" class="project-link">Learn More</a>
      </div>
      {%- endfor -%}
    </div>
  </div>
</section>

<style>
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
    background: var(--card-bg);
    width: 100vw;
    max-width: none;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    padding-left: 0;
    padding-right: 0;
    text-align: center;
  }

  .about-section h2 {
    text-align: center;
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
    /* animation: scroll 30s linear infinite; */
    width: max-content;
    cursor: grab;
    user-select: none; /* Prevent text selection during drag */
  }

  .auto-scroll:hover {
    /* animation-play-state: paused; */
  }

  .auto-scroll.active {
    cursor: grabbing;
  }

  /* Remove the keyframes for the old animation */
  /*
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  */

  @keyframes scroll-bg {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
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
    color: #1f2937;
  }

  .project-card img {
    pointer-events: none;
  }

  [data-theme="dark"] .project-card {
    background: #2d2d2d;
    color: #fff;
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

  .project-title {
    color: #1f2937;
  }

  [data-theme="dark"] .project-title {
    color: #fff;
  }

  .project-desc {
    color: #4b5563;
  }

  [data-theme="dark"] .project-desc {
    color: #e5e7eb;
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

<script>
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.auto-scroll');
    if (!slider) return;

    let isDragging = false;
    let startX;
    let scrollStartX;
    let animationFrameId;

    let currentX = 0;
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;

    const scrollSpeed = 0.5;
    const damping = 0.95;
    const contentWidth = slider.scrollWidth / 2;

    function animate() {
        if (!isDragging) {
            if (Math.abs(velocity) > 0.1) {
                // Apply momentum and damping
                currentX += velocity;
                velocity *= damping;
            } else {
                // Apply constant scroll speed
                velocity = 0;
                currentX -= scrollSpeed;
            }

            // Infinite loop logic
            if (currentX <= -contentWidth) {
                currentX += contentWidth;
            } else if (currentX > 0) {
                currentX -= contentWidth;
            }
            slider.style.transform = `translateX(${currentX}px)`;
        }
        animationFrameId = requestAnimationFrame(animate);
    }

    function dragStart(e) {
        isDragging = true;
        slider.classList.add('active');
        velocity = 0; // Reset velocity on new drag
        startX = e.pageX || e.touches[0].pageX;
        lastX = startX;
        lastTime = Date.now();
        scrollStartX = new DOMMatrix(window.getComputedStyle(slider).transform).m41;
    }

    function dragMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        const mouseX = e.pageX || e.touches[0].pageX;
        currentX = scrollStartX + mouseX - startX;
        slider.style.transform = `translateX(${currentX}px)`;

        // Calculate velocity
        const now = Date.now();
        const deltaTime = now - lastTime;
        if (deltaTime > 0) {
            const dx = mouseX - lastX;
            velocity = (dx / deltaTime) * 16; // Scale for frame rate
        }
        lastX = mouseX;
        lastTime = now;
    }

    function dragEnd() {
        if (!isDragging) return;
        isDragging = false;
        slider.classList.remove('active');
        // The momentum will be handled by the animate function
    }

    // Event Listeners
    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('mousemove', dragMove);
    slider.addEventListener('mouseup', dragEnd);
    slider.addEventListener('mouseleave', dragEnd);

    slider.addEventListener('touchstart', dragStart, { passive: true });
    slider.addEventListener('touchmove', dragMove);
    slider.addEventListener('touchend', dragEnd);

    // Start Animation
    animate();
});
</script> 