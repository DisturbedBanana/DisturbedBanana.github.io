---
layout: project
title: Blacksands
image: /assets/images/blacksands/blacksands.png
itchio_link: https://fantin-dahmani.itch.io/blacksands
excerpt: "A downloadable game - Blacksands is a puzzle game, Knowledge Vanilla and an FPS. Play Blacksands on itch.io !"
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
            <p><strong>Platform:</strong> PC<br>
            <strong>Genre:</strong> FPS, Puzzle, Knowledge Vanilla<br>
            <strong>Description:</strong> Blacksands is a puzzle game, Knowledge Vanilla and an FPS. In this game, you play as a gladiator trapped in a time loop, forced to fight again and again for the entertainment of a sadistic alien audience. You and your ally can only rely on the knowledge acquired during your previous lives to hope one day to break this endless cycle.<br>
            <strong>Download:</strong> <a href="https://fantin-dahmani.itch.io/blacksands" target="_blank" class="download-link">itch.io</a></p>
            
            <h2>Project Details</h2>
            <p><strong>Development:</strong> Fourth-year student project developed at IIM<br>
            <strong>Production Time:</strong> 12 weeks<br>
            <strong>Status:</strong> Released<br>
            <strong>File Size:</strong> 854 MB</p>
        </div>
    </div>

    <!-- My Contribution Section -->
    <div class="my-contribution-section">
        <div class="contribution-header">
            <h2>My Contribution</h2>
        </div>
        
        <div class="contribution-content">
            <div class="contribution-feature">
                <h3>Sunlight Detector System</h3>
                <p>One of my major contributions to Blacksands was the development of a sophisticated <strong>Sunlight Detector System</strong> that added dynamic lighting mechanics to the game. This system allows game designers to easily implement sunlight-responsive objects by adding just a few components to any actor.</p>
                
                <div class="feature-showcase">
                     <div class="puzzle-feature">
                        <h4>Designer-Friendly Implementation</h4>
                        <div class="puzzle-image-container">
                            <div class="puzzle-image">
                                <img src="/assets/images/blacksands/tool.png" alt="Sunlight Detector Tool Interface">
                            </div>
                        </div>
                        <p>The system is designed to be easily implementable by game designers. They can add sunlight detection to any actor by simply adding a few components, making it accessible for rapid prototyping and iteration.</p>
                    </div>

                    <div class="puzzle-feature">
                        <h4>Technical Implementation</h4>
                         <div class="puzzle-image-container">
                            <div class="puzzle-image">
                                <img src="/assets/images/blacksands/SunBlueprintEvent.png" alt="SunBlueprintEvent C++ and Blueprint Integration">
                            </div>
                        </div>
                        <p>The system is built using <strong>C++ Actor Components</strong> and <strong>C++ Components</strong> for performance and reliability, while remaining accessible to game designers through <strong>Blueprint Callable Delegates</strong>. This architecture allows designers to easily tweak and customize the sunlight detection behavior without needing to modify code, providing the perfect balance between technical robustness and design flexibility.</p>
                    </div>
                    
                    <div class="puzzle-feature">
                        <h4>Visual Effects Comparison</h4>
                        <div class="puzzle-image-container">
                            <div class="puzzle-image">
                                <h6>Door System</h6>
                                <img src="/assets/images/blacksands/door.png" alt="Door: unlit vs lit comparison">
                            </div>
                            <div class="puzzle-image">
                                <h6>Platform System</h6>
                                <img src="/assets/images/blacksands/platform.png" alt="Platform: unlit vs lit comparison">
                            </div>
                             <div class="puzzle-image">
                                <h6>Jump Pad System</h6>
                                <img src="/assets/images/blacksands/jumppad.png" alt="Jump pad: unlit vs lit comparison">
                            </div>
                        </div>
                        <p>The system provides dramatic visual feedback, with objects displaying different VFX states when unlit versus when illuminated by sunlight, creating engaging environmental storytelling.</p>
                    </div>
                </div>
            </div>

            <div class="contribution-feature">
                <h3>Weapon System</h3>
                <p>I developed a sophisticated weapon system that combines technical performance with designer accessibility, featuring hitscan mechanics and extensive customization options.</p>
                
                <div class="feature-showcase">
                    <div class="puzzle-feature">
                        <h4>Weapon Overview</h4>
                        <div class="puzzle-image-container">
                            <div class="puzzle-image">
                               <img src="/assets/images/blacksands/WeaponOverview.png" alt="Weapon System Overview">
                            </div>
                        </div>
                        <p>The weapon was designed as a <strong>hitscan weapon</strong>, utilizing <strong>line traces</strong> instead of actual projectiles to register hits. This approach provides instant feedback and precise hit detection. The team is currently considering reworking the weapon to use projectiles for enhanced gameplay mechanics.</p>
                    </div>
                    
                    <div class="puzzle-feature">
                        <h4>Blueprint Integration</h4>
                         <div class="puzzle-image-container">
                            <div class="puzzle-image">
                                <img src="/assets/images/blacksands/WeaponBlueprintEvents.png" alt="Weapon Blueprint Events">
                            </div>
                        </div>
                        <p>Following the same architectural pattern, the weapon system is built in <strong>C++</strong> but implements several <strong>Blueprint Events</strong>. I also created the blueprint part of the weapon, allowing game designers to tweak weapon behavior, add feedback, and enabling sound designers to implement sounds after specific events like reload or weapon pickup.</p>
                    </div>

                    <div class="puzzle-feature">
                        <h4>Designer-Friendly Variables</h4>
                         <div class="puzzle-image-container">
                            <div class="puzzle-image">
                                <img src="/assets/images/blacksands/WeaponGameplayVars.png" alt="Weapon Gameplay Variables">
                            </div>
                        </div>
                        <p>The system showcases <strong>variables editable per instance</strong> of the weapon, allowing game designers to easily tweak weapon behavior without touching code. This provides maximum flexibility for balancing and iteration during development.</p>
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
                <h3>Lead Game Programmer</h3>
                <p>Lucas Guichard</p>
            </div>
            <div class="team-category">
                <h3>Game Programmers</h3>
                <p>Chloé Mathias, Alexis Le Bourhis, Yanis Rojano-Rajonson</p>
            </div>
            <div class="team-category">
                <h3>Game Artists</h3>
                <p>Flora Denis, Galadriel Lavasier, Ivan Bon</p>
            </div>
            <div class="team-category">
                <h3>Game Designers</h3>
                <p>Tristant Bauchet, Antoine Pinson, Eliass Godson, Simon Lenain</p>
            </div>
            <div class="team-category">
                <h3>Production and Marketing</h3>
                <p>Fantin Dahmani, Hugo Reymondet</p>
            </div>
            <div class="team-category">
                <h3>Sound Designers</h3>
                <p>Dan Ravot, Benjamin Macé</p>
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
        overflow: hidden;
    }

    /* Geometric Pattern */
    .geometric-pattern {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(243, 156, 18, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(243, 156, 18, 0.07) 1px, transparent 1px);
        background-size: 45px 45px;
        animation: pattern-move-project 35s linear infinite;
    }

    /* Particle Field */
    .particle-field {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(circle at 25% 25%, rgba(230, 126, 34, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(211, 84, 0, 0.1) 1px, transparent 1px);
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
        background: linear-gradient(45deg, var(--text-color), #f39c12, var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-project 4s ease-in-out infinite;
        text-shadow: 0 0 30px rgba(243, 156, 18, 0.4);
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
        background: linear-gradient(90deg, #d35400, #e67e22, #f39c12, #d35400, #e67e22, #f39c12);
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
        background: linear-gradient(90deg, #d35400, #e67e22, #f39c12, #d35400, #e67e22, #f39c12);
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
        color: #f39c12;
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
        background: linear-gradient(90deg, #d35400, #f39c12);
        transition: width 0.3s ease;
    }

    .download-link:hover::after {
        width: 100%;
    }

    .download-link:hover {
        color: #e67e22;
        text-shadow: 0 0 10px rgba(243, 156, 18, 0.5);
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
        color: #f39c12;
        font-weight: bold;
        position: absolute;
        left: -1.2rem;
        animation: list-pulse 2s ease-in-out infinite;
    }

    /* Contribution Section */
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
        background: linear-gradient(45deg, var(--text-color), #f39c12, var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-project 4s ease-in-out infinite;
        text-shadow: 0 0 30px rgba(243, 156, 18, 0.4);
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
        margin-bottom: 3rem;
    }

    .contribution-feature::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #d35400, #e67e22, #f39c12, #d35400, #e67e22, #f39c12);
        background-size: 200% 100%;
        animation: rainbow-flow-project 4s linear infinite;
    }

    .contribution-feature h3 {
        font-size: 2rem;
        color: var(--text-color);
        margin-bottom: 1.5rem;
    }

    .contribution-feature p {
        color: var(--text-secondary);
        margin-bottom: 2rem;
        line-height: 1.7;
        font-size: 1.1rem;
    }

    /* Puzzle Feature Styling */
    .feature-showcase {
        margin-top: 2rem;
    }

    .puzzle-feature {
        background: rgba(0,0,0,0.1);
        padding: 2rem;
        border-radius: 15px;
        margin-bottom: 2.5rem;
        border: 1px solid rgba(255,255,255,0.1);
    }
    
    .puzzle-feature:last-child {
        margin-bottom: 0;
    }

    .puzzle-feature h4 {
        font-size: 1.5rem;
        color: var(--text-color);
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .puzzle-image-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .puzzle-image {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
    }
    
    .puzzle-image h6 {
        font-size: 1rem;
        color: var(--text-secondary);
        margin-bottom: 0.75rem;
    }

    .puzzle-image img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    .puzzle-feature > p {
        font-size: 1.1rem;
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
        color: var(--text-secondary);
    }

    /* Team Section */
    .team-section {
        margin-top: 4rem;
        padding-top: 3rem;
        border-top: 2px solid rgba(255, 255, 255, 0.1);
        position: relative;
        z-index: 2;
    }

    .team-section h2 {
        font-size: 2.5rem;
        background: linear-gradient(45deg, var(--text-color), #f39c12, var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-project 4s ease-in-out infinite;
        text-shadow: 0 0 30px rgba(243, 156, 18, 0.4);
        margin-bottom: 2rem;
        text-align: center;
    }

    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

    /* Animations */
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
        color: #f39c12;
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

        .project-header h1 {
            font-size: 2.5rem;
        }

        .project-description, .contribution-feature {
            padding: 2rem;
        }
        
        .contribution-header h2, .team-section h2 {
            font-size: 2rem;
        }
        
        .contribution-feature h3 {
            font-size: 1.8rem;
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