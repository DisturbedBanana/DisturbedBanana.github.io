---
layout: project
title: Sweet Melody
image: /assets/images/sweet-melody.png
itchio_link: https://anatole13.itch.io/sweet-melody
excerpt: "Survive your first night in a haunted orphanage. Play Sweet Melody on itch.io !"
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
        <div class="project-description">
            <h2>About the Project</h2>
            <p><strong>Genre:</strong> Interactive Fiction, Horror, Thriller, VR<br>
            <strong>Description:</strong> You're a small child trying to get through your first night in a strange orphanage. Naturally anxious, your mind will play tricks on you as you grow more anxious. Music is the only thing that soothes you. Make sure to always keep the little music box with you.</p>
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