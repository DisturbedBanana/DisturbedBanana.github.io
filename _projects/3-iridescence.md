---
layout: project
title: Iridescence
image: /assets/images/iridescence/iridescence.png
itchio_link: https://zukkinioni.itch.io/iridescence
excerpt: "A mesmerizing puzzle game where players manipulate light and color to solve increasingly complex challenges. Play Iridescence on itch.io !"
---

<div class="project-container">
    <!-- Animated background elements -->
    <div class="project-bg-patterns">
        <div class="geometric-pattern"></div>
        <div class="particle-field"></div>
    </div>

    <div class="project-header">
        <h1>{{ page.title }}</h1>
    </div>
    
    <div class="project-content">
        <div class="project-image-container">
            <div class="project-image">
                <img src="{{ page.image }}" alt="{{ page.title }}">
            </div>
            <a href="{{ page.itchio_link }}" class="itchio-button" target="_blank">
                <div class="itchio-icon">
                    <i class="fab fa-itch-io"></i>
                </div>
                <span>Play {{ page.title }} on itch.io !</span>
            </a>
            <!-- Note: No "My Contribution" section on this page, so this button won't scroll. -->
            <div class="scroll-indicator">
                <div class="scroll-text">My Contributions</div>
                <div class="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16L6 10L7.41 8.59L12 13.17L16.59 8.59L18 10L12 16Z" fill="currentColor"/>
                    </svg>
                </div>
            </div>
        </div>
        
        <div class="project-description">
            <h2>About the Project</h2>
            <p><strong>Platform:</strong> Android<br>
            <strong>Genre:</strong> Puzzle<br>
            <strong>Description:</strong> Use light reflection and color additivity to solve puzzles! Help Undine, Dwarfy and Goaty, 3 colored friends to restore the holy light. Redirect the crystal's beam and recolor it, find the right angles, the perfect color mix, and revive every light of the forest.<br>
            <strong>Download:</strong> <a href="https://zukkinioni.itch.io/iridescence" target="_blank" class="download-link">itch.io</a></p>
            
            <h2>Team</h2>
            <ul>
                <li>Game Arts: Matteo BOIZET, Inès ROUSSIES, Angela TRAN</li>
                <li>Game Designers: Enzo DEHO NEVES, Raphaël FIGUESTIER, Rayan KHAINE, Matéo LE BRETON</li>
                <li>Game Programmers: Maxime CORBY, Lucas GUICHARD, Romain MOUSTY</li>
            </ul>
        </div>
    </div>
</div>

<style>
    /* Project Page - Completely Redesigned */
    .project-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 3rem 2rem;
        position: relative;
        min-height: 80vh;
        overflow: hidden;
    }

    /* Animated Background Patterns */
    .project-bg-patterns {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        overflow: hidden;
    }

    /* Geometric Pattern */
    .geometric-pattern {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(231, 76, 60, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(231, 76, 60, 0.03) 1px, transparent 1px);
        background-size: 45px 45px;
        animation: pattern-move-project 35s linear infinite;
    }

    /* Particle Field */
    .particle-field {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(circle at 25% 25%, rgba(231, 76, 60, 0.08) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(243, 156, 18, 0.08) 1px, transparent 1px);
        background-size: 90px 90px, 130px 130px;
        animation: particle-drift-project 28s ease-in-out infinite;
    }

    /* Project Header */
    .project-header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 3rem;
        position: relative;
        z-index: 2;
        text-align: center;
    }

    .project-header h1 {
        font-size: 3.5rem;
        background: linear-gradient(45deg, var(--text-color), #e74c3c, var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-project 4s ease-in-out infinite;
        text-shadow: 0 0 30px rgba(231, 76, 60, 0.3);
    }

    /* Itch.io Button */
    .itchio-button {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        background: rgba(250, 92, 92, 0.9);
        backdrop-filter: blur(15px);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 15px;
        text-decoration: none;
        font-weight: 700;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 
            0 8px 25px rgba(250, 92, 92, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        position: relative;
        overflow: hidden;
        margin-top: 2.5rem;
    }

    .itchio-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.6s;
    }

    .itchio-button:hover::before {
        left: 100%;
    }

    .itchio-button:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 
            0 15px 40px rgba(250, 92, 92, 0.4),
            0 0 30px rgba(250, 92, 92, 0.3);
    }

    .itchio-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
        flex-shrink: 0;
    }

    .itchio-button:hover .itchio-icon {
        transform: rotate(360deg) scale(1.1);
    }

    .itchio-icon i {
        font-size: 24px;
    }

    /* Project Content */
    .project-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        position: relative;
        z-index: 2;
    }

    /* Project Image */
    .project-image-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .project-image {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        padding: 1.5rem;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        position: relative;
        overflow: hidden;
    }

    .project-image::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f, #2ecc71, #3498db, #9b59b6);
        background-size: 200% 100%;
        animation: rainbow-flow-project 4s linear infinite;
    }

    .project-image img {
        width: 100%;
        height: auto;
        border-radius: 15px;
        transition: transform 0.3s ease;
    }

    .project-image:hover img {
        transform: scale(1.02);
    }

    /* Project Description */
    .project-description {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        padding: 2.5rem;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        position: relative;
        overflow: hidden;
        line-height: 1.7;
    }

    .project-description::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f, #2ecc71, #3498db, #9b59b6);
        background-size: 200% 100%;
        animation: rainbow-flow-project 4s linear infinite;
    }

    .project-description h2 {
        margin: 2rem 0 1.5rem;
        color: var(--text-color);
        font-size: 1.8rem;
        position: relative;
    }

    .project-description h2:first-child {
        margin-top: 0;
    }

    .project-description p {
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
    }

    .download-link {
        color: #e74c3c;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        position: relative;
    }

    .download-link::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #e74c3c, #f39c12);
        transition: width 0.3s ease;
    }

    .download-link:hover::after {
        width: 100%;
    }

    .download-link:hover {
        color: #f39c12;
        text-shadow: 0 0 10px rgba(231, 76, 60, 0.3);
    }

    /* Rainbow itch.io text styling */
    .download-link {
        background: linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f, #2ecc71, #3498db, #9b59b6, #e74c3c);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: rainbow-flow-project 3s linear infinite;
        font-weight: 600;
    }

    .download-link:hover {
        text-decoration: underline;
        text-shadow: none;
    }

    .project-description ul {
        margin: 1.5rem 0;
        padding-left: 1.5rem;
        color: var(--text-secondary);
    }

    .project-description li {
        margin-bottom: 0.75rem;
        position: relative;
    }

    .project-description li::before {
        content: '▸';
        color: #e74c3c;
        font-weight: bold;
        position: absolute;
        left: -1.2rem;
        animation: list-pulse 2s ease-in-out infinite;
    }

    .project-description ul ul {
        margin: 0.75rem 0;
    }

    /* Animations */
    @keyframes float-project {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-25px) rotate(180deg); }
        100% { transform: translateY(0px) rotate(360deg); }
    }

    @keyframes pattern-move-project {
        0% { transform: translate(0, 0); }
        100% { transform: translate(45px, 45px); }
    }

    @keyframes particle-drift-project {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-20px, -20px); }
    }

    @keyframes text-shimmer-project {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }

    @keyframes rainbow-flow-project {
        0% { background-position: 0% 0%; }
        100% { background-position: 200% 0%; }
    }

    @keyframes list-pulse {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 1; }
    }

    /* Scroll Indicator */
    .scroll-indicator {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .scroll-indicator:hover {
        transform: translateY(5px);
    }

    .scroll-text {
        color: var(--text-secondary);
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.25rem;
    }

    .scroll-arrow {
        color: var(--text-secondary);
        animation: bounce-arrow 2s ease-in-out infinite;
    }

    .scroll-indicator:hover .scroll-arrow {
        color: #e74c3c;
    }

    @keyframes bounce-arrow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .project-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .project-header {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
        }

        .project-header h1 {
            font-size: 2.5rem;
        }

        .project-description {
            padding: 2rem;
        }
    }
</style>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        const contributionSection = document.querySelector('.my-contribution-section');
        
        if (scrollIndicator && contributionSection) {
            scrollIndicator.addEventListener('click', function() {
                contributionSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    });
</script> 