---
layout: project
title: Sweet Melody
image: /assets/images/sweet-melody/sweet-melody.png
itchio_link: https://anatole13.itch.io/sweet-melody
excerpt: "Survive your first night in a haunted orphanage. Play Sweet Melody on itch.io !"
---

<div class="project-container">
    <!-- Animated background elements -->
    <div class="project-bg-patterns">
        <div class="floating-elements">
            <div class="float-element float-1"></div>
            <div class="float-element float-2"></div>
            <div class="float-element float-3"></div>
            <div class="float-element float-4"></div>
            <div class="float-element float-5"></div>
            <div class="float-element float-6"></div>
            <div class="float-element float-7"></div>
            <div class="float-element float-8"></div>
            <div class="float-element float-9"></div>
            <div class="float-element float-10"></div>
            <div class="float-element float-11"></div>
            <div class="float-element float-12"></div>
            <div class="float-element float-13"></div>
            <div class="float-element float-14"></div>
            <div class="float-element float-15"></div>
            <div class="float-element float-16"></div>
            <div class="float-element float-17"></div>
            <div class="float-element float-18"></div>
            <div class="float-element float-19"></div>
            <div class="float-element float-20"></div>
            <div class="float-element float-21"></div>
            <div class="float-element float-22"></div>
            <div class="float-element float-23"></div>
            <div class="float-element float-24"></div>
        </div>
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
        </div>
        
        <div class="project-description">
            <h2>About the Project</h2>
            <p><strong>Platform:</strong> PC<br>
            <strong>Genre:</strong> Interactive Fiction, Horror, Thriller, VR<br>
            <strong>Description:</strong> You're a small child trying to get through your first night in a strange orphanage. Naturally anxious, your mind will play tricks on you as you grow more anxious. Music is the only thing that soothes you. Make sure to always keep the little music box with you.<br>
            <strong>Download:</strong> <a href="https://anatole13.itch.io/sweet-melody" target="_blank" class="download-link">itch.io</a></p>
            
            <h2>Team</h2>
            <ul>
                <li>Game Producer: Anatole Chapelle</li>
                <li>Game Designers: Axel Faubert, Simon Lenain, Lucas Naudin</li>
                <li>Game Programmers: Lucas Guichard, Victor Lacombe, Léopold Leclerc</li>
                <li>Game Artists: Juliette Joukowski, Mehdi Haffoudhi, Thomas George</li>
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
        background: linear-gradient(45deg, #9b59b6, rgba(155, 89, 182, 0.3));
        border-radius: 50%;
        top: 20%;
        left: 8%;
        animation-delay: 0s;
    }

    .float-2 {
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #34495e, rgba(52, 73, 94, 0.3));
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        top: 75%;
        right: 12%;
        animation-delay: -6s;
    }

    .float-3 {
        width: 90px;
        height: 90px;
        background: linear-gradient(45deg, #8e44ad, rgba(142, 68, 173, 0.3));
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        top: 30%;
        right: 20%;
        animation-delay: -12s;
    }

    .float-4 {
        width: 60px;
        height: 60px;
        background: linear-gradient(45deg, #2c3e50, rgba(44, 62, 80, 0.3));
        border-radius: 10px;
        top: 85%;
        left: 15%;
        animation-delay: -18s;
    }

    .float-5 {
        width: 55px;
        height: 55px;
        background: linear-gradient(45deg, #9b59b6, rgba(155, 89, 182, 0.3));
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        top: 10%;
        right: 18%;
        animation-delay: -24s;
    }

    .float-6 {
        width: 40px;
        height: 40px;
        background: linear-gradient(45deg, #16a085, rgba(22, 160, 133, 0.3));
        border-radius: 50%;
        top: 60%;
        left: 60%;
        animation-delay: -30s;
    }

    .float-7 {
        width: 45px;
        height: 45px;
        background: linear-gradient(45deg, #8e44ad, rgba(142, 68, 173, 0.3));
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        top: 35%;
        right: 35%;
        animation-delay: -36s;
    }

    .float-8 {
        width: 80px;
        height: 80px;
        background: linear-gradient(45deg, #27ae60, rgba(39, 174, 96, 0.3));
        border-radius: 50%;
        top: 5%;
        left: 75%;
        animation-delay: -42s;
    }

    .float-9 {
        width: 30px;
        height: 30px;
        background: linear-gradient(45deg, #d35400, rgba(211, 84, 0, 0.3));
        border-radius: 8px;
        top: 45%;
        left: 25%;
        animation-delay: -48s;
    }

    .float-10 {
        width: 65px;
        height: 65px;
        background: linear-gradient(45deg, #2980b9, rgba(41, 128, 185, 0.3));
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        top: 75%;
        right: 25%;
        animation-delay: -54s;
    }

    .float-11 {
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #c0392b, rgba(192, 57, 43, 0.3));
        border-radius: 50%;
        top: 25%;
        right: 65%;
        animation-delay: -60s;
    }

    .float-12 {
        width: 70px;
        height: 70px;
        background: linear-gradient(45deg, #f39c12, rgba(243, 156, 18, 0.3));
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        top: 55%;
        left: 45%;
        animation-delay: -66s;
    }

    .float-13 {
        width: 40px;
        height: 40px;
        background: linear-gradient(45deg, #8e44ad, rgba(142, 68, 173, 0.3));
        border-radius: 8px;
        top: 15%;
        right: 55%;
        animation-delay: -72s;
    }

    .float-14 {
        width: 85px;
        height: 85px;
        background: linear-gradient(45deg, #16a085, rgba(22, 160, 133, 0.3));
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        top: 65%;
        right: 45%;
        animation-delay: -78s;
    }

    .float-15 {
        width: 35px;
        height: 35px;
        background: linear-gradient(45deg, #e67e22, rgba(230, 126, 34, 0.3));
        border-radius: 50%;
        top: 85%;
        left: 35%;
        animation-delay: -84s;
    }

    .float-16 {
        width: 60px;
        height: 60px;
        background: linear-gradient(45deg, #3498db, rgba(52, 152, 219, 0.3));
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        top: 95%;
        right: 35%;
        animation-delay: -90s;
    }

    .float-17 {
        width: 55px;
        height: 55px;
        background: linear-gradient(45deg, #e74c3c, rgba(231, 76, 60, 0.3));
        border-radius: 50%;
        top: 5%;
        left: 55%;
        animation-delay: -96s;
    }

    .float-18 {
        width: 75px;
        height: 75px;
        background: linear-gradient(45deg, #2ecc71, rgba(46, 204, 113, 0.3));
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        top: 35%;
        left: 15%;
        animation-delay: -102s;
    }

    .float-19 {
        width: 45px;
        height: 45px;
        background: linear-gradient(45deg, #9b59b6, rgba(155, 89, 182, 0.3));
        border-radius: 8px;
        top: 75%;
        left: 65%;
        animation-delay: -108s;
    }

    .float-20 {
        width: 65px;
        height: 65px;
        background: linear-gradient(45deg, #1abc9c, rgba(26, 188, 156, 0.3));
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        top: 45%;
        right: 15%;
        animation-delay: -114s;
    }

    .float-21 {
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #f39c12, rgba(243, 156, 18, 0.3));
        border-radius: 50%;
        top: 25%;
        left: 85%;
        animation-delay: -120s;
    }

    .float-22 {
        width: 70px;
        height: 70px;
        background: linear-gradient(45deg, #34495e, rgba(52, 73, 94, 0.3));
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        top: 55%;
        right: 55%;
        animation-delay: -126s;
    }

    .float-23 {
        width: 40px;
        height: 40px;
        background: linear-gradient(45deg, #e67e22, rgba(230, 126, 34, 0.3));
        border-radius: 8px;
        top: 15%;
        left: 35%;
        animation-delay: -132s;
    }

    .float-24 {
        width: 80px;
        height: 80px;
        background: linear-gradient(45deg, #27ae60, rgba(39, 174, 96, 0.3));
        border-radius: 50%;
        top: 65%;
        left: 25%;
        animation-delay: -138s;
    }

    /* Geometric Pattern */
    .geometric-pattern {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(155, 89, 182, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(155, 89, 182, 0.03) 1px, transparent 1px);
        background-size: 45px 45px;
        animation: pattern-move-project 35s linear infinite;
    }

    /* Particle Field */
    .particle-field {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(circle at 25% 25%, rgba(155, 89, 182, 0.08) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(142, 68, 173, 0.08) 1px, transparent 1px);
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
        background: linear-gradient(45deg, var(--text-color), #9b59b6, var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-project 4s ease-in-out infinite;
        text-shadow: 0 0 30px rgba(155, 89, 182, 0.3);
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
        background: linear-gradient(90deg, #9b59b6, #8e44ad, #2c3e50, #34495e, #9b59b6);
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
        background: linear-gradient(90deg, #9b59b6, #8e44ad, #2c3e50, #34495e, #9b59b6);
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
        color: #9b59b6;
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
        background: linear-gradient(90deg, #9b59b6, #8e44ad);
        transition: width 0.3s ease;
    }

    .download-link:hover::after {
        width: 100%;
    }

    .download-link:hover {
        color: #8e44ad;
        text-shadow: 0 0 10px rgba(155, 89, 182, 0.3);
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
        color: #9b59b6;
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