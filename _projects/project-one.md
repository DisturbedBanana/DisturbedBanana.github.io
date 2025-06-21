---
layout: project
title: Project One
image: /assets/images/project-one.png
itchio_link: https://atsue.itch.io/kourou-space-coop
excerpt: "A cooperative VR game inspired by Ariane 5 rocket launches. Play Project One on itch.io !"
---

<div class="project-container">
    <div class="project-header">
        <h1>{{ page.title }}</h1>
        <a href="{{ page.itchio_link }}" class="itchio-button" target="_blank">
            <img src="https://static.itch.io/images/badge-color.svg" alt="itch.io">
            Play {{ page.title }} on itch.io !
        </a>
    </div>

    <div class="project-content">
        <div class="project-image">
            <img src="{{ page.image }}" alt="{{ page.title }}">
        </div>

        <div class="project-description">
            <h2>About the Project</h2>
            <p>This is a detailed description of your project. You can include information about:</p>
            <ul>
                <li>The game's concept and mechanics</li>
                <li>Your role in development</li>
                <li>Technologies and tools used</li>
                <li>Key features and achievements</li>
            </ul>

            <h2>Development Process</h2>
            <p>Share insights about how the project was developed, challenges faced, and lessons learned.</p>

            <h2>Technical Details</h2>
            <p>Include information about:</p>
            <ul>
                <li>Game engine used</li>
                <li>Programming languages</li>
                <li>Notable technical implementations</li>
                <li>Performance considerations</li>
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