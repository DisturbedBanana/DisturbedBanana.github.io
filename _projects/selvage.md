---
layout: project
title: Selvage
image: /assets/images/selvage/selvage.png
itchio_link: https://nuclos.itch.io/selvage
excerpt: "A psychological horror FPS with a berserk mechanic. Play Selvage on itch.io !"
---

<div class="project-container">
    <!-- Animated background elements -->
    <div class="project-bg-patterns">
        <div class="floating-elements">
            <div class="float-element float-1"></div>
            <div class="float-element float-2"></div>
            <div class="float-element float-3"></div>
            <div class="float-element float-4"></div>
        </div>
        <div class="geometric-pattern"></div>
        <div class="particle-field"></div>
    </div>

    <div class="project-header">
        <h1>{{ page.title }}</h1>
        <a href="{{ page.itchio_link }}" class="itchio-button" target="_blank">
            <div class="itchio-icon">
                <img src="https://static.itch.io/images/badge-color.svg" alt="itch.io">
            </div>
            <span>Play {{ page.title }} on itch.io !</span>
        </a>
    </div>
    
    <div class="project-content">
        <div class="project-image-container">
            <div class="project-image">
                <img src="{{ page.image }}" alt="{{ page.title }}">
            </div>
        </div>
        
        <div class="project-description">
            <h2>About the Project</h2>
            <p><strong>Platform:</strong> PC<br>
            <strong>Genre:</strong> Shooter, Action, Adventure, Platformer, Psychological Horror<br>
            <strong>Description:</strong> You're a person who just found themselves in a dark and strange location with monsters coming at you that you can fight with fire arms you find along the way. Low on HP, low ammo or low mental health? PTSD triggers, you go Berserk. You run faster and perform better, you just want to get out as fast as possible.<br>
            <strong>Download:</strong> <a href="https://nuclos.itch.io/selvage" target="_blank" class="download-link">itch.io</a></p>
            
            <h2>Team</h2>
            <ul>
                <li>GD: William Ferreira, Maxime Champroux, Alvi Frémont</li>
                <li>GA: Angela Tran, Morgane Huynh-perez, Reda Lotfi</li>
                <li>GP: Lucas Guichard, Léopold Leclerc, Clément Bostyn</li>
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
        pointer-events: none;
    }

    /* Floating Elements */
    .floating-elements {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .float-element {
        position: absolute;
        opacity: 0.08;
        animation: float-project 25s ease-in-out infinite;
    }

    .float-1 {
        width: 70px;
        height: 70px;
        background: linear-gradient(45deg, #2c3e50, rgba(44, 62, 80, 0.3));
        border-radius: 50%;
        top: 20%;
        left: 8%;
        animation-delay: 0s;
    }

    .float-2 {
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #e74c3c, rgba(231, 76, 60, 0.3));
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        top: 75%;
        right: 12%;
        animation-delay: -6s;
    }

    .float-3 {
        width: 90px;
        height: 90px;
        background: linear-gradient(45deg, #34495e, rgba(52, 73, 94, 0.3));
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        top: 30%;
        right: 20%;
        animation-delay: -12s;
    }

    .float-4 {
        width: 60px;
        height: 60px;
        background: linear-gradient(45deg, #c0392b, rgba(192, 57, 43, 0.3));
        border-radius: 10px;
        top: 85%;
        left: 15%;
        animation-delay: -18s;
    }

    /* Geometric Pattern */
    .geometric-pattern {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(44, 62, 80, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(44, 62, 80, 0.03) 1px, transparent 1px);
        background-size: 45px 45px;
        animation: pattern-move-project 35s linear infinite;
    }

    /* Particle Field */
    .particle-field {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(circle at 25% 25%, rgba(44, 62, 80, 0.08) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(231, 76, 60, 0.08) 1px, transparent 1px);
        background-size: 90px 90px, 130px 130px;
        animation: particle-drift-project 28s ease-in-out infinite;
    }

    /* Project Header */
    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;
        position: relative;
        z-index: 2;
    }

    .project-header h1 {
        font-size: 3.5rem;
        background: linear-gradient(45deg, var(--text-color), #2c3e50, var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-project 4s ease-in-out infinite;
        text-shadow: 0 0 30px rgba(44, 62, 80, 0.3);
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

    .itchio-icon img {
        height: 24px;
        width: auto;
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
        background: linear-gradient(90deg, #2c3e50, #34495e, #e74c3c, #c0392b, #2c3e50);
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
        background: linear-gradient(90deg, #2c3e50, #34495e, #e74c3c, #c0392b, #2c3e50);
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
        color: #2c3e50;
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
        background: linear-gradient(90deg, #2c3e50, #e74c3c);
        transition: width 0.3s ease;
    }

    .download-link:hover::after {
        width: 100%;
    }

    .download-link:hover {
        color: #e74c3c;
        text-shadow: 0 0 10px rgba(44, 62, 80, 0.3);
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
        color: #2c3e50;
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
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-20px) rotate(90deg); }
        50% { transform: translateY(-10px) rotate(180deg); }
        75% { transform: translateY(-30px) rotate(270deg); }
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

        .float-element {
            display: none;
        }

        .project-description {
            padding: 2rem;
        }
    }
</style> 