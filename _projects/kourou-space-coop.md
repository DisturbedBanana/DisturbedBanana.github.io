---
layout: project
title: Kourou Space Coop
image: /assets/images/kourou-space-coop/kourou-space-coop.png
itchio_link: https://atsue.itch.io/kourou-space-coop
excerpt: "A cooperative VR game inspired by Ariane 5 rocket launches. Play Kourou Space Coop on itch.io !"
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
            <p><strong>Platform:</strong> VR (Meta Quest 3)<br>
            <strong>Genre:</strong> Puzzle, Co-op<br>
            <strong>Description:</strong> In Kourou Space Coop, two players will have to cooperate to carry out the various emblematic missions of Ariane 5. Each player will have their own specific gameplay, one player is in the control base in Kourou while the other controls an assistance robot located inside the launcher. Together, they will have to communicate in order to carry out different tasks to successfully complete the mission.<br>
            <strong>Download:</strong> <a href="https://atsue.itch.io/kourou-space-coop" target="_blank" class="download-link">itch.io</a></p>
        </div>
    </div>

    <!-- My Contribution Section -->
    <div class="my-contribution-section">
        <div class="contribution-header">
            <h2>My Contribution</h2>
            <p class="contribution-subtitle">As a Game Programmer on the project, I leveraged Meta's official SDK to harness the full potential of the Meta Quest 3 headset, implementing core cooperative gameplay features that define the player experience.</p>
        </div>
        
        <div class="contribution-content">
            <div class="contribution-feature">
                <h3>Asymmetric VR Gameplay Features</h3>
                <p>My primary focus was on creating engaging, asymmetric puzzles that required clear communication between the two players. This involved implementing distinct mechanics and interfaces for the player in the rocket and the player in the command center.</p>
                
                <div class="feature-showcase">
                    <div class="puzzle-feature">
                        <h4>The Valves Puzzle</h4>
                        <div class="puzzle-image-container">
                            <div class="puzzle-image">
                                <h6>Launcher View</h6>
                                <img src="/assets/images/kourou-space-coop/KourouValves1.png" alt="Valves view from inside the rocket">
                            </div>
                            <div class="puzzle-image">
                                <h6>Command Center View</h6>
                                <img src="/assets/images/kourou-space-coop/KourouValves2.png" alt="Pressure gauges in the command center">
                            </div>
                        </div>
                        <p>The player inside the launcher must turn three separate valves, while the command center player monitors pressure gauges and provides instructions on when to start and stop turning to prevent a system overload.</p>
                    </div>
                    
                    <div class="puzzle-feature">
                        <h4>The Password Puzzle</h4>
                         <div class="puzzle-image-container">
                            <div class="puzzle-image">
                                <h6>Launcher View</h6>
                                <img src="/assets/images/kourou-space-coop/KourouPassword1.png" alt="Tablet with abstract symbols">
                            </div>
                            <div class="puzzle-image">
                                <h6>Command Center View</h6>
                                <img src="/assets/images/kourou-space-coop/KourouPassword2.png" alt="Hidden keyboard for password entry">
                            </div>
                        </div>
                        <p>The launcher player finds a tablet with bizarre, abstract symbols and must describe them to the command center player, who first has to find a hidden keyboard to input the correct sequence. This intentionally chaotic design leads to hilarious misunderstandings.</p>
                    </div>
                    
                    <div class="puzzle-feature">
                        <h4>The Fuses Puzzle</h4>
                        <div class="puzzle-image-container">
                            <div class="puzzle-image">
                                <h6>Launcher View</h6>
                                <img src="/assets/images/kourou-space-coop/KourouFuses1.png" alt="Fusebox with multiple slots">
                            </div>
                            <div class="puzzle-image">
                                <h6>Command Center View</h6>
                                <img src="/assets/images/kourou-space-coop/KourouFuses2.png" alt="Wall of indicator lights for fuses">
                            </div>
                        </div>
                        <p>The launcher player must place fuses into a fusebox with many possible slots. The command center player sees a corresponding wall of lights, which turn green for a correct placement and red for an incorrect one, forcing precise communication to solve the puzzle.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Team Section -->
    <div class="team-section">
        <h2>Team</h2>
        <div class="team-grid">
            <div class="team-category">
                <h3>Game Programmers</h3>
                <p>Nicolas KOHLER, Lucas GUICHARD</p>
            </div>
            <div class="team-category">
                <h3>Game Artists</h3>
                <p>Flora DENIS, Morgane HUYNH-PEREZ, Enzo DE CORTE, Melvin LITIERE</p>
            </div>
            <div class="team-category">
                <h3>Game Designers</h3>
                <p>Eliass GODSON, Nicolas COULLIAIS</p>
            </div>
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
        background: linear-gradient(45deg, #3498db, rgba(52, 152, 219, 0.3));
        border-radius: 50%;
        top: 20%;
        left: 8%;
        animation-delay: 0s;
    }

    .float-2 {
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #2ecc71, rgba(46, 204, 113, 0.3));
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        top: 75%;
        right: 12%;
        animation-delay: -6s;
    }

    .float-3 {
        width: 90px;
        height: 90px;
        background: linear-gradient(45deg, #f39c12, rgba(243, 156, 18, 0.3));
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        top: 30%;
        right: 20%;
        animation-delay: -12s;
    }

    .float-4 {
        width: 60px;
        height: 60px;
        background: linear-gradient(45deg, #1abc9c, rgba(26, 188, 156, 0.3));
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
            linear-gradient(rgba(52, 152, 219, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52, 152, 219, 0.03) 1px, transparent 1px);
        background-size: 45px 45px;
        animation: pattern-move-project 35s linear infinite;
    }

    /* Particle Field */
    .particle-field {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(circle at 25% 25%, rgba(52, 152, 219, 0.08) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(46, 204, 113, 0.08) 1px, transparent 1px);
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
        background: linear-gradient(45deg, var(--text-color), #3498db, var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-project 4s ease-in-out infinite;
        text-shadow: 0 0 30px rgba(52, 152, 219, 0.3);
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
        background: linear-gradient(90deg, #3498db, #2ecc71, #f39c12, #1abc9c, #3498db);
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
        background: linear-gradient(90deg, #3498db, #2ecc71, #f39c12, #1abc9c, #3498db);
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
        color: #3498db;
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
        background: linear-gradient(90deg, #3498db, #2980b9);
        transition: width 0.3s ease;
    }

    .download-link:hover::after {
        width: 100%;
    }

    .download-link:hover {
        color: #2980b9;
        text-shadow: 0 0 10px rgba(52, 152, 219, 0.3);
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
        color: #3498db;
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

    /* My Contribution Section Styling */
    .my-contribution-section {
        margin-top: 4rem;
        padding-top: 3rem;
        border-top: 2px solid rgba(255, 255, 255, 0.1);
        position: relative;
        z-index: 2;
    }

    .contribution-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    .contribution-header h2 {
        font-size: 2.5rem;
        background: linear-gradient(45deg, var(--text-color), #3498db, var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-project 4s ease-in-out infinite;
        text-shadow: 0 0 30px rgba(52, 152, 219, 0.3);
        margin-bottom: 1rem;
    }

    .contribution-subtitle {
        font-size: 1.2rem;
        color: var(--text-secondary);
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.6;
    }

    .contribution-content {
        max-width: 1000px;
        margin: 0 auto;
    }

    .contribution-feature {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
        padding: 2.5rem;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        position: relative;
        overflow: hidden;
    }

    .contribution-feature::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #3498db, #2ecc71, #f39c12, #1abc9c, #3498db);
        background-size: 200% 100%;
        animation: rainbow-flow-project 4s linear infinite;
    }

    .contribution-feature h3 {
        font-size: 2rem;
        color: var(--text-color);
        margin-bottom: 1.5rem;
        position: relative;
    }

    .contribution-feature p {
        color: var(--text-secondary);
        margin-bottom: 2rem;
        line-height: 1.7;
        font-size: 1.1rem;
    }

    .feature-showcase {
        margin: 3rem 0;
    }

    .puzzle-feature {
        margin-bottom: 3rem;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .puzzle-feature:last-child {
        margin-bottom: 0;
    }

    .puzzle-feature h4 {
        color: var(--text-color);
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
    
    .puzzle-feature p {
        font-size: 1rem;
        margin-top: 1.5rem;
    }

    .puzzle-image-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }
    
    .puzzle-image {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        padding: 1rem;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        text-align: center;
    }
    
    .puzzle-image h6 {
        font-size: 0.9rem;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 0.75rem;
    }

    .puzzle-image img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        transition: transform 0.3s ease;
    }

    .puzzle-image:hover img {
        transform: scale(1.02);
    }
    
    /* Team Section Styling */
    .team-section {
        margin-top: 4rem;
        padding-top: 3rem;
        border-top: 2px solid rgba(255, 255, 255, 0.1);
        position: relative;
        z-index: 2;
    }

    .team-section h2 {
        font-size: 2.5rem;
        background: linear-gradient(45deg, var(--text-color), #3498db, var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-project 4s ease-in-out infinite;
        text-shadow: 0 0 30px rgba(52, 152, 219, 0.3);
        margin-bottom: 2rem;
        text-align: center;
    }

    .team-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .team-category {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(15px);
        padding: 1.5rem;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .team-category:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .team-category h3 {
        color: var(--text-color);
        font-size: 1.1rem;
        margin-bottom: 0.75rem;
        font-weight: 600;
    }

    .team-category p {
        color: var(--text-secondary);
        line-height: 1.5;
        font-size: 0.95rem;
    }

    /* Responsive Design for new sections */
    @media (max-width: 1024px) {
        .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }
    }

    @media (max-width: 768px) {
        .my-contribution-section, .team-section {
            margin-top: 3rem;
            padding-top: 2rem;
        }

        .contribution-header h2, .team-section h2 {
            font-size: 2rem;
        }

        .contribution-subtitle {
            font-size: 1.1rem;
        }

        .contribution-feature {
            padding: 2rem;
        }

        .contribution-feature h3 {
            font-size: 1.8rem;
        }
        
        .puzzle-image-container {
            grid-template-columns: 1fr;
        }

        .team-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .team-category {
            padding: 1rem;
        }
    }
</style> 