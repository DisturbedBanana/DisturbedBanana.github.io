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
            <div class="float-element float-25"></div>
            <div class="float-element float-26"></div>
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

            <!-- Scroll Indicator -->
            <div class="scroll-indicator">
                <div class="scroll-text">My Contributions</div>
                <div class="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
            <p class="contribution-subtitle">As Lead Game Programmer, I was responsible for overseeing the technical implementation of core gameplay systems, mentoring other programmers, and developing key features that enhanced the player experience.</p>
        </div>
        
        <div class="contribution-content">
            <div class="contribution-feature">
                <h3>Sunlight Detector System</h3>
                <p>One of my major contributions to Blacksands was the development of a sophisticated <strong>Sunlight Detector System</strong> that added dynamic lighting mechanics to the game. This system allows game designers to easily implement sunlight-responsive objects by adding just a few components to any actor.</p>
                
                <div class="feature-showcase">
                    <div class="feature-tool">
                        <h4>Designer-Friendly Implementation</h4>
                        <div class="feature-image">
                            <img src="/assets/images/blacksands/tool.png" alt="Sunlight Detector Tool Interface">
                        </div>
                        <p>The system is designed to be easily implementable by game designers. They can add sunlight detection to any actor by simply adding a few components, making it accessible for rapid prototyping and iteration.</p>
                    </div>
                    
                    <div class="feature-technical">
                        <h4>Technical Implementation</h4>
                        <div class="technical-image">
                            <img src="/assets/images/blacksands/SunBlueprintEvent.png" alt="SunBlueprintEvent C++ and Blueprint Integration">
                        </div>
                        <p>The system is built using <strong>C++ Actor Components</strong> and <strong>C++ Components</strong> for performance and reliability, while remaining accessible to game designers through <strong>Blueprint Callable Delegates</strong>. This architecture allows designers to easily tweak and customize the sunlight detection behavior without needing to modify code, providing the perfect balance between technical robustness and design flexibility.</p>
                    </div>
                    
                    <div class="feature-comparison">
                        <h4>Visual Effects Comparison</h4>
                        <div class="comparison-examples">
                            <div class="comparison-example">
                                <h5>Door System</h5>
                                <div class="comparison-image">
                                    <img src="/assets/images/blacksands/door.png" alt="Door: unlit vs lit comparison">
                                </div>
                                <p>Doors respond to sunlight exposure, changing their visual state and behavior.</p>
                            </div>
                            
                            <div class="comparison-example">
                                <h5>Platform System</h5>
                                <div class="comparison-image">
                                    <img src="/assets/images/blacksands/platform.png" alt="Platform: unlit vs lit comparison">
                                </div>
                                <p>Platforms activate and become interactive when illuminated by sunlight.</p>
                            </div>
                            
                            <div class="comparison-example">
                                <h5>Jump Pad System</h5>
                                <div class="comparison-image">
                                    <img src="/assets/images/blacksands/jumppad.png" alt="Jump pad: unlit vs lit comparison">
                                </div>
                                <p>Jump pads become functional and display active VFX when exposed to sunlight.</p>
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
                    <div class="weapon-overview">
                        <h4>Weapon Overview</h4>
                        <div class="weapon-image">
                            <img src="/assets/images/blacksands/WeaponOverview.png" alt="Weapon System Overview">
                        </div>
                        <p>The weapon was designed as a <strong>hitscan weapon</strong>, utilizing <strong>line traces</strong> instead of actual projectiles to register hits. This approach provides instant feedback and precise hit detection. The team is currently considering reworking the weapon to use projectiles for enhanced gameplay mechanics.</p>
                    </div>
                    
                    <div class="weapon-blueprint">
                        <h4>Blueprint Integration</h4>
                        <div class="weapon-image">
                            <img src="/assets/images/blacksands/WeaponBlueprintEvents.png" alt="Weapon Blueprint Events">
                        </div>
                        <p>Following the same architectural pattern, the weapon system is built in <strong>C++</strong> but implements several <strong>Blueprint Events</strong>. I also created the blueprint part of the weapon, allowing game designers to tweak weapon behavior, add feedback, and enabling sound designers to implement sounds after specific events like reload or weapon pickup.</p>
                    </div>
                    
                    <div class="weapon-variables">
                        <h4>Designer-Friendly Variables</h4>
                        <div class="weapon-image">
                            <img src="/assets/images/blacksands/WeaponGameplayVars.png" alt="Weapon Gameplay Variables">
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

<script>
    // Smooth scroll to My Contribution section when clicking the scroll indicator
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
        background: linear-gradient(45deg, #34495e, rgba(52, 73, 94, 0.3));
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        top: 75%;
        right: 12%;
        animation-delay: -6s;
    }

    .float-3 {
        width: 90px;
        height: 90px;
        background: linear-gradient(45deg, #1a252f, rgba(26, 37, 47, 0.3));
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
        background: linear-gradient(45deg, #e67e22, rgba(230, 126, 34, 0.3));
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        top: 10%;
        right: 18%;
        animation-delay: -9s;
    }

    .float-6 {
        width: 40px;
        height: 40px;
        background: linear-gradient(45deg, #16a085, rgba(22, 160, 133, 0.3));
        border-radius: 50%;
        top: 60%;
        left: 60%;
        animation-delay: -13s;
    }

    .float-7 {
        width: 45px;
        height: 45px;
        background: linear-gradient(45deg, #8e44ad, rgba(142, 68, 173, 0.3));
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        top: 35%;
        right: 35%;
        animation-delay: -16s;
    }

    .float-8 {
        width: 80px;
        height: 80px;
        background: linear-gradient(45deg, #27ae60, rgba(39, 174, 96, 0.3));
        border-radius: 50%;
        top: 5%;
        left: 75%;
        animation-delay: -19s;
    }

    .float-9 {
        width: 30px;
        height: 30px;
        background: linear-gradient(45deg, #d35400, rgba(211, 84, 0, 0.3));
        border-radius: 8px;
        top: 45%;
        left: 25%;
        animation-delay: -22s;
    }

    .float-10 {
        width: 65px;
        height: 65px;
        background: linear-gradient(45deg, #2980b9, rgba(41, 128, 185, 0.3));
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        top: 75%;
        right: 25%;
        animation-delay: -25s;
    }

    .float-11 {
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #c0392b, rgba(192, 57, 43, 0.3));
        border-radius: 50%;
        top: 25%;
        right: 65%;
        animation-delay: -28s;
    }

    .float-12 {
        width: 70px;
        height: 70px;
        background: linear-gradient(45deg, #f39c12, rgba(243, 156, 18, 0.3));
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        top: 55%;
        left: 45%;
        animation-delay: -31s;
    }

    .float-13 {
        width: 40px;
        height: 40px;
        background: linear-gradient(45deg, #8e44ad, rgba(142, 68, 173, 0.3));
        border-radius: 8px;
        top: 15%;
        right: 55%;
        animation-delay: -34s;
    }

    .float-14 {
        width: 85px;
        height: 85px;
        background: linear-gradient(45deg, #16a085, rgba(22, 160, 133, 0.3));
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        top: 65%;
        right: 45%;
        animation-delay: -37s;
    }

    .float-15 {
        width: 35px;
        height: 35px;
        background: linear-gradient(45deg, #e67e22, rgba(230, 126, 34, 0.3));
        border-radius: 50%;
        top: 85%;
        left: 35%;
        animation-delay: -40s;
    }

    .float-16 {
        width: 60px;
        height: 60px;
        background: linear-gradient(45deg, #3498db, rgba(52, 152, 219, 0.3));
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        top: 95%;
        right: 35%;
        animation-delay: -43s;
    }

    .float-17 {
        width: 55px;
        height: 55px;
        background: linear-gradient(45deg, #e74c3c, rgba(231, 76, 60, 0.3));
        border-radius: 50%;
        top: 5%;
        left: 55%;
        animation-delay: -46s;
    }

    .float-18 {
        width: 75px;
        height: 75px;
        background: linear-gradient(45deg, #2ecc71, rgba(46, 204, 113, 0.3));
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        top: 35%;
        left: 15%;
        animation-delay: -49s;
    }

    .float-19 {
        width: 45px;
        height: 45px;
        background: linear-gradient(45deg, #9b59b6, rgba(155, 89, 182, 0.3));
        border-radius: 8px;
        top: 75%;
        left: 65%;
        animation-delay: -52s;
    }

    .float-20 {
        width: 65px;
        height: 65px;
        background: linear-gradient(45deg, #1abc9c, rgba(26, 188, 156, 0.3));
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        top: 45%;
        right: 15%;
        animation-delay: -55s;
    }

    .float-21 {
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #f39c12, rgba(243, 156, 18, 0.3));
        border-radius: 50%;
        top: 25%;
        left: 85%;
        animation-delay: -58s;
    }

    .float-22 {
        width: 70px;
        height: 70px;
        background: linear-gradient(45deg, #34495e, rgba(52, 73, 94, 0.3));
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        top: 55%;
        right: 55%;
        animation-delay: -61s;
    }

    .float-23 {
        width: 40px;
        height: 40px;
        background: linear-gradient(45deg, #e67e22, rgba(230, 126, 34, 0.3));
        border-radius: 8px;
        top: 15%;
        left: 35%;
        animation-delay: -64s;
    }

    .float-24 {
        width: 80px;
        height: 80px;
        background: linear-gradient(45deg, #27ae60, rgba(39, 174, 96, 0.3));
        border-radius: 50%;
        top: 65%;
        left: 25%;
        animation-delay: -67s;
    }

    .float-25 {
        width: 55px;
        height: 55px;
        background: linear-gradient(45deg, #8e44ad, rgba(142, 68, 173, 0.3));
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        top: 85%;
        right: 25%;
        animation-delay: -70s;
    }

    .float-26 {
        width: 60px;
        height: 60px;
        background: linear-gradient(45deg, #16a085, rgba(22, 160, 133, 0.3));
        border-radius: 50%;
        top: 95%;
        left: 45%;
        animation-delay: -73s;
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
            radial-gradient(circle at 75% 75%, rgba(52, 73, 94, 0.08) 1px, transparent 1px);
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
        background: linear-gradient(45deg, var(--text-color), #2c3e50, var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-project 4s ease-in-out infinite;
        text-shadow: 0 0 30px rgba(44, 62, 80, 0.3);
    }

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

    /* Scroll Indicator */
    .scroll-indicator {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 2;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 2.5rem;
    }

    .scroll-indicator:hover {
        transform: translateY(5px);
    }

    .scroll-text {
        color: var(--text-secondary);
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        text-align: center;
        background: linear-gradient(45deg, var(--text-secondary), #2c3e50, var(--text-secondary));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-project 3s ease-in-out infinite;
    }

    .scroll-arrow {
        color: var(--text-secondary);
        animation: bounce-arrow 2s ease-in-out infinite;
        transition: color 0.3s ease;
    }

    .scroll-indicator:hover .scroll-arrow {
        color: #2c3e50;
    }

    .scroll-arrow svg {
        width: 24px;
        height: 24px;
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
        background: linear-gradient(90deg, #2c3e50, #34495e, #1a252f, #2c3e50, #34495e, #1a252f);
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
        background: linear-gradient(90deg, #2c3e50, #34495e, #1a252f, #2c3e50, #34495e, #1a252f);
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
        background: linear-gradient(90deg, #2c3e50, #34495e);
        transition: width 0.3s ease;
    }

    .download-link:hover::after {
        width: 100%;
    }

    .download-link:hover {
        color: #34495e;
        text-shadow: 0 0 10px rgba(44, 62, 80, 0.3);
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
        color: #2c3e50;
        font-weight: bold;
        position: absolute;
        left: -1.2rem;
        animation: list-pulse 2s ease-in-out infinite;
    }

    .project-description ul ul {
        margin: 0.75rem 0;
    }

    /* Feature Showcase Styling */
    .feature-showcase {
        margin: 3rem 0;
    }

    .feature-showcase h3 {
        color: var(--text-color);
        font-size: 1.5rem;
        margin: 2rem 0 1rem;
        position: relative;
    }

    .feature-showcase h3:first-child {
        margin-top: 0;
    }

    .feature-showcase h4 {
        color: var(--text-color);
        font-size: 1.2rem;
        margin: 1rem 0 0.75rem;
        text-align: center;
    }

    .feature-tool {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        padding: 1.5rem;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 2rem;
    }

    .feature-image {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        padding: 1rem;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin: 1rem 0;
        text-align: center;
    }

    .feature-image img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        transition: transform 0.3s ease;
    }

    .feature-image:hover img {
        transform: scale(1.02);
    }

    .feature-technical {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        padding: 1.5rem;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 2rem;
    }

    .technical-image {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        padding: 1rem;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin: 1rem 0;
        text-align: center;
    }

    .technical-image img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        transition: transform 0.3s ease;
    }

    .technical-image:hover img {
        transform: scale(1.02);
    }

    /* Weapon Feature Styling */
    .weapon-overview,
    .weapon-blueprint,
    .weapon-variables {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        padding: 1.5rem;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 2rem;
    }

    .weapon-overview:last-child,
    .weapon-blueprint:last-child,
    .weapon-variables:last-child {
        margin-bottom: 0;
    }

    .weapon-overview h4,
    .weapon-blueprint h4,
    .weapon-variables h4 {
        color: var(--text-color);
        font-size: 1.3rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }

    .weapon-image {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        padding: 1rem;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin: 1rem 0;
        text-align: center;
    }

    .weapon-image img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        transition: transform 0.3s ease;
    }

    .weapon-image:hover img {
        transform: scale(1.02);
    }

    .weapon-overview p,
    .weapon-blueprint p,
    .weapon-variables p {
        color: var(--text-secondary);
        line-height: 1.6;
        margin-top: 1rem;
    }

    .comparison-examples {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin: 2rem 0;
    }

    .comparison-example {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        padding: 1.5rem;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .comparison-example:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    .comparison-example h5 {
        color: var(--text-color);
        font-size: 1.1rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }

    .comparison-example p {
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.5;
        margin-top: 1rem;
    }

    .comparison-image {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        padding: 1rem;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin: 1rem 0;
    }

    .comparison-image img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        transition: transform 0.3s ease;
    }

    .comparison-image:hover img {
        transform: scale(1.05);
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

    @keyframes bounce-arrow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
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
        background: linear-gradient(45deg, var(--text-color), #2c3e50, var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-project 4s ease-in-out infinite;
        text-shadow: 0 0 30px rgba(44, 62, 80, 0.3);
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
        background: linear-gradient(90deg, #2c3e50, #34495e, #1a252f, #2c3e50, #34495e, #1a252f);
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

    .contribution-feature + .contribution-feature {
        margin-top: 3rem;
    }

    /* Responsive Design for My Contribution Section */
    @media (max-width: 768px) {
        .my-contribution-section {
            margin-top: 3rem;
            padding-top: 2rem;
        }

        .contribution-header h2 {
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
        background: linear-gradient(45deg, var(--text-color), #2c3e50, var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-project 4s ease-in-out infinite;
        text-shadow: 0 0 30px rgba(44, 62, 80, 0.3);
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

    /* Responsive Design for Team Section */
    @media (max-width: 1024px) {
        .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }
    }

    @media (max-width: 768px) {
        .team-section {
            margin-top: 3rem;
            padding-top: 2rem;
        }

        .team-section h2 {
            font-size: 2rem;
        }

        .team-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .team-category {
            padding: 1rem;
        }
    }

    /* Responsive Design for Feature Showcase */
    @media (max-width: 1024px) {
        .comparison-examples {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }
    }

    @media (max-width: 768px) {
        .comparison-examples {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .feature-tool,
        .comparison-example {
            padding: 1rem;
        }

        .feature-image,
        .comparison-image {
            padding: 0.75rem;
        }
    }
</style> 