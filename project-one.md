---
layout: project
title: Kourou Space Coop
image: /assets/images/project-one.png
itchio_link: https://atsue.itch.io/kourou-space-coop
---

<div class="project-container">
    <div class="project-header">
        <h1>{{ page.title }}</h1>
        <a href="{{ page.itchio_link }}" class="itchio-button" target="_blank">
            <img src="https://static.itch.io/images/badge-color.svg" alt="itch.io">
            Play on itch.io
        </a>
    </div>

    <div class="project-content">
        <div class="project-image">
            <img src="{{ page.image }}" alt="{{ page.title }}">
        </div>

        <div class="project-description">
            <h2>About the Project</h2>
            <p>Kourou Space Coop is a cooperative VR game where two players work together to complete missions inspired by Ariane 5 rocket launches. As a Game Programmer, I focused on implementing the core gameplay mechanics and networking systems for this unique cooperative experience.</p>
            <ul>
                <li>Implemented networked multiplayer functionality for two VR players</li>
                <li>Developed zero-gravity physics system for the robot player</li>
                <li>Created interactive control systems for the ground control player</li>
                <li>Designed and implemented the communication system between players</li>
            </ul>

            <h2>Development Process</h2>
            <p>This project was developed as a collaborative effort with a team of artists, designers, and programmers. The biggest challenge was creating a seamless cooperative experience between two VR players, each with their own unique gameplay mechanics and perspective.</p>
            <p>Key achievements include implementing a robust networking system for VR multiplayer and creating intuitive controls for both the ground control and robot players that work well in a VR environment.</p>

            <h2>Technical Details</h2>
            <p>The project was built using:</p>
            <ul>
                <li>Unity Game Engine</li>
                <li>C# for core gameplay and networking</li>
                <li>Oculus Quest SDK for VR implementation</li>
                <li>Server-based networked multiplayer system</li>
                <li>Custom physics system for zero-gravity mechanics</li>
                <li>Blender for 3D asset creation</li>
            </ul>

            <h2>Game Features</h2>
            <ul>
                <li>Cooperative Gameplay
                    <ul>
                        <li>Two distinct player roles: Ground Control and Robot</li>
                        <li>Real-time communication between players</li>
                        <li>Mission-based objectives requiring coordination</li>
                    </ul>
                </li>
                <li>VR Implementation
                    <ul>
                        <li>Full VR support for both players</li>
                        <li>Intuitive motion controls</li>
                        <li>Immersive zero-gravity environment</li>
                    </ul>
                </li>
                <li>Technical Systems
                    <ul>
                        <li>Server-based multiplayer networking</li>
                        <li>Custom physics for space environment</li>
                        <li>Interactive control systems</li>
                    </ul>
                </li>
            </ul>

            <h2>Credits</h2>
            <ul>
                <li>Game Artists: Flora DENIS, Morgan HUYNH-PEREZ, Enzo DE CORTE, Melvin LITIERE</li>
                <li>Game Designers: Eliass GODSON, Nicolas COULLIAIS</li>
                <li>Game Programmers: Nicolas KOHLER, Lucas GUICHARD</li>
            </ul>
        </div>
    </div>
</div>

<style>
    .project-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }

    .project-header h1 {
        font-size: 2.5rem;
        color: var(--text-color);
    }

    .itchio-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: #fa5c5c;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: 600;
        transition: transform 0.2s;
    }

    .itchio-button:hover {
        transform: translateY(-2px);
    }

    .itchio-button img {
        height: 24px;
        width: auto;
    }

    .project-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    .project-image {
        width: 100%;
    }

    .project-image img {
        width: 100%;
        height: auto;
        border-radius: 1rem;
        box-shadow: 0 4px 6px var(--shadow-color);
    }

    .project-description {
        line-height: 1.6;
    }

    .project-description h2 {
        margin: 1.5rem 0 1rem;
        color: var(--text-color);
    }

    .project-description p {
        color: var(--text-secondary);
    }

    .project-description ul {
        margin: 1rem 0;
        padding-left: 1.5rem;
        color: var(--text-secondary);
    }

    .project-description li {
        margin-bottom: 0.5rem;
    }

    .project-description ul ul {
        margin: 0.5rem 0;
    }

    @media (max-width: 768px) {
        .project-content {
            grid-template-columns: 1fr;
        }

        .project-header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }
    }
</style> 