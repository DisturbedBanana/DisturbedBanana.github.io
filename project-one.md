---
layout: project
title: Project One
image: /assets/images/project-one.jpg
itchio_link: https://disturbedbanana.itch.io/project-one
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
            <p>A 2D platformer game where I focused on creating intuitive gameplay mechanics and efficient development tools. The project showcases my expertise in both gameplay programming and tool development for game production.</p>
            <ul>
                <li>Designed and implemented a custom character controller with precise movement mechanics</li>
                <li>Created an in-editor level design tool for rapid prototyping and iteration</li>
                <li>Developed a visual scripting system for non-programmers to create game events</li>
                <li>Implemented a modular animation system for smooth character movement</li>
            </ul>

            <h2>Development Process</h2>
            <p>This project was developed over a 3-month period, with a strong focus on creating tools that would speed up the development process. The biggest challenge was creating an intuitive interface for the level design tool while maintaining powerful functionality.</p>
            <p>Key achievements include reducing level creation time by 70% through the custom tools and implementing a data-driven approach to gameplay mechanics that made balancing and iteration much faster.</p>

            <h2>Technical Details</h2>
            <p>The project was built using:</p>
            <ul>
                <li>Unity Game Engine (2022.3 LTS)</li>
                <li>C# for core gameplay and tools development</li>
                <li>Unity Editor Extensions for custom tool creation</li>
                <li>Scriptable Objects for data management</li>
                <li>Custom editor windows for tool interfaces</li>
                <li>Unity's new Input System for cross-platform support</li>
            </ul>

            <h2>Tools Developed</h2>
            <ul>
                <li>Level Editor Tool
                    <ul>
                        <li>Visual grid-based placement system</li>
                        <li>Prefab management and organization</li>
                        <li>Level validation and testing tools</li>
                    </ul>
                </li>
                <li>Gameplay Event System
                    <ul>
                        <li>Visual node-based event editor</li>
                        <li>Custom event types and conditions</li>
                        <li>Real-time event testing and debugging</li>
                    </ul>
                </li>
                <li>Animation State Manager
                    <ul>
                        <li>Visual state machine editor</li>
                        <li>Transition preview and testing</li>
                        <li>Animation event integration</li>
                    </ul>
                </li>
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
        color: #1f2937;
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
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    }

    .project-description {
        line-height: 1.6;
    }

    .project-description h2 {
        margin: 1.5rem 0 1rem;
        color: #1f2937;
    }

    .project-description ul {
        margin: 1rem 0;
        padding-left: 1.5rem;
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