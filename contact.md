---
layout: default
title: Contact
---

<div class="contact-container">
    <div class="contact-header">
        <h1>Get in Touch</h1>
        <p class="subtitle">Let's discuss your next project or opportunity</p>
    </div>

    <div class="contact-content">
        <div class="contact-info">
            <div class="social-links">
                <a href="https://github.com/disturbedbanana" class="social-link" target="_blank">
                    <i class="fab fa-github"></i>
                    <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/lucas-guichard" class="social-link" target="_blank">
                    <i class="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
                <a href="https://itch.io/profile/disturbedbanana" class="social-link" target="_blank">
                    <i class="fas fa-gamepad"></i>
                    <span>itch.io</span>
                </a>
            </div>

            <div class="email-section">
                <h2>Email</h2>
                <a href="mailto:lucas.guichard@example.com" class="email-link">
                    <i class="fas fa-envelope"></i>
                    lucas.guichard@example.com
                </a>
            </div>
        </div>

        <div class="contact-form">
            <form action="https://formspree.io/f/xpzvnqbv" method="POST">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" class="submit-button">
                    <i class="fas fa-paper-plane"></i>
                    Send Message
                </button>
            </form>
        </div>
    </div>
</div>

<style>
    .contact-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    .contact-header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .contact-header h1 {
        font-size: 3rem;
        color: #1f2937;
        margin-bottom: 1rem;
    }

    .subtitle {
        font-size: 1.2rem;
        color: #6b7280;
    }

    .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .social-links {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    .social-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
        background: white;
        border-radius: 0.5rem;
        text-decoration: none;
        color: #1f2937;
        font-weight: 500;
        transition: transform 0.2s, box-shadow 0.2s;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .social-link:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .social-link i {
        font-size: 1.5rem;
        color: #6366f1;
    }

    .email-section h2 {
        margin-bottom: 1rem;
        color: #1f2937;
    }

    .email-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: #6366f1;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s;
    }

    .email-link:hover {
        color: #4f46e5;
    }

    .contact-form {
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: #4b5563;
        font-weight: 500;
    }

    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        font-size: 1rem;
        transition: border-color 0.2s;
    }

    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #6366f1;
    }

    .submit-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        padding: 1rem;
        background: #6366f1;
        color: white;
        border: none;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s, transform 0.2s;
    }

    .submit-button:hover {
        background: #4f46e5;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .contact-header h1 {
            font-size: 2.5rem;
        }

        .social-links {
            grid-template-columns: 1fr;
        }
    }
</style> 