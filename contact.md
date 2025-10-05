---
layout: default
title: Contact
---

<div class="contact-container">
    <!-- Animated background elements -->
    <div class="contact-bg-patterns">
        <div class="geometric-pattern"></div>
        <div class="particle-field"></div>
    </div>

    <div class="contact-header">
        <h1>Get in Touch</h1>
        <p class="subtitle">Let's discuss your next project or opportunity</p>
    </div>

    <div class="contact-content">
        <div class="contact-info">
            <div class="social-links">
                <a href="https://github.com/disturbedbanana" class="social-link" target="_blank">
                    <div class="social-icon">
                        <i class="fab fa-github"></i>
                    </div>
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/lucas-guichard-link/" class="social-link" target="_blank">
                    <div class="social-icon">
                        <i class="fab fa-linkedin"></i>
                    </div>
                    <span>LinkedIn</span>
                </a>
                <a href="https://itch.io/profile/disturbedbanana" class="social-link" target="_blank">
                    <div class="social-icon">
                        <i class="fas fa-gamepad"></i>
                    </div>
                    <span>itch.io</span>
                </a>
            </div>

            <div class="personal-info">
                <a href="mailto:lucasguichard78@gmail.com" class="info-link">
                    <i class="fas fa-envelope"></i>
                    <span>lucasguichard78@gmail.com</span>
                </a>
                <div class="info-link">
                    <i class="fas fa-phone"></i>
                    <span>06 95 04 14 90</span>
                </div>
            </div>

            <div class="cv-section">
                <h2>CV</h2>
                <div class="cv-buttons">
                    <a href="/assets/cv.pdf" class="cv-button" target="_blank">
                        <i class="fas fa-eye"></i>
                        <span>View CV</span>
                    </a>
                    <a href="/assets/cv.pdf" class="cv-button" download>
                        <i class="fas fa-download"></i>
                        <span>Download CV</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="contact-form">
            <form action="https://formspree.io/f/mzzrnywb" method="POST">
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
                    <span>Send Message</span>
                </button>
            </form>
        </div>
    </div>
</div>

<style>
    /* Contact Page - Completely Redesigned */
    .contact-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
        position: relative;
        min-height: 80vh;
        overflow: hidden;
    }

    /* Clean Geometric Background */
    .contact-bg-patterns {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        pointer-events: none;
        overflow: hidden;
    }

    /* Subtle animated background */
    .geometric-pattern {
        position: absolute;
        width: 100%;
        height: 100%;
        background: 
            radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 70% 80%, rgba(240, 147, 251, 0.12) 0%, transparent 60%),
            linear-gradient(135deg, rgba(79, 172, 254, 0.08) 0%, transparent 50%);
        animation: background-pulse 15s ease-in-out infinite;
    }

    /* Single floating shape */
    .particle-field {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .particle-field::before {
        content: '';
        position: absolute;
        width: 100px;
        height: 100px;
        border: 2px solid rgba(99, 102, 241, 0.15);
        border-radius: 50%;
        top: 30%;
        left: 15%;
        animation: gentle-float 20s ease-in-out infinite;
    }

    /* Add animated dots pattern */
    .particle-field::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(240, 147, 251, 0.08) 1px, transparent 1px);
        background-size: 120px 120px, 80px 80px;
        animation: dots-drift 25s ease-in-out infinite;
    }

    /* Contact Header */
    .contact-header {
        text-align: center;
        margin-bottom: 4rem;
        position: relative;
        z-index: 2;
    }

    .contact-header h1 {
        font-size: 3.5rem;
        background: linear-gradient(45deg, var(--text-color), var(--accent-color), var(--text-color));
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: text-shimmer-contact 6s ease-in-out infinite;
        margin-bottom: 1rem;
        text-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
        position: relative;
        display: inline-block;
    }

    .contact-header h1::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: rgba(99, 102, 241, 0.1);
        border-radius: 8px;
        z-index: -1;
        animation: subtle-glow 8s ease-in-out infinite;
    }

    .subtitle {
        font-size: 1.3rem;
        color: var(--text-secondary);
        opacity: 0.9;
    }

    /* Contact Content */
    .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        position: relative;
        z-index: 2;
    }

    /* Contact Info */
    .contact-info {
        flex: 1;
        max-width: 400px;
        margin-right: 4rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    /* Social Links */
    .social-links {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .social-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;
        color: var(--text-secondary);
        padding: 1.5rem;
        border-radius: 15px;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        box-shadow: 0 4px 12px var(--shadow-color);
        transition: all 0.3s ease;
        flex: 1;
        min-width: 100px;
    }

    .social-link:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px var(--hover-shadow);
        color: var(--accent-color);
        border-color: var(--accent-color);
    }

    .social-icon {
        font-size: 2rem;
        width: 4rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: linear-gradient(145deg, var(--bg-color), var(--card-bg));
        box-shadow: inset 0 2px 4px var(--shadow-color);
        transition: all 0.3s ease;
    }

    .social-link:hover .social-icon {
        transform: rotate(360deg) scale(1.1);
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
    }

    .social-icon i {
        font-size: 1.5rem;
        color: white;
    }

    .social-link span {
        font-weight: 600;
    }

    /* Personal Info Section */
    .personal-info {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 15px;
        padding: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .info-link {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--text-color);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
    }

    a.info-link {
        background: linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f, #2ecc71, #3498db, #9b59b6, #e74c3c);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: rainbow-flow 3s linear infinite;
        font-weight: 600;
    }

    a.info-link:hover {
        text-decoration: underline;
    }

    .info-link i {
        font-size: 1.2rem;
        color: var(--accent-color);
        width: 20px;
        text-align: center;
    }

    /* CV Section */
    .cv-section {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        padding: 1.5rem;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .cv-section h2 {
        text-align: center;
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
        color: var(--text-color);
    }

    .cv-buttons {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
    }

    .cv-button {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        color: white;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        border: 2px solid transparent;
        background: var(--accent-color);
    }

    .cv-button:hover {
        background: var(--accent-hover);
        transform: translateY(-2px);
        box-shadow: 0 6px 15px var(--hover-shadow);
    }

    .cv-button:last-child {
        background: transparent;
        border: 2px solid var(--accent-color);
        color: var(--accent-color);
    }

    .cv-button:last-child:hover {
        background: var(--accent-color);
        color: white;
    }

    /* Contact Form */
    .contact-form {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        padding: 2.5rem;
        border-radius: 20px;
        box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
        position: relative;
        overflow: hidden;
    }

    .contact-form::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #e74c3c, #f39c12, #f1c40f, #2ecc71, #3498db, #9b59b6);
        background-size: 200% 100%;
        animation: rainbow-flow 3s linear infinite;
    }

    .form-group {
        margin-bottom: 2rem;
        position: relative;
    }

    .form-group label {
        display: block;
        margin-bottom: 0.75rem;
        color: var(--text-color);
        font-weight: 600;
        font-size: 1rem;
    }

    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 1rem;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        font-size: 1rem;
        transition: all 0.3s ease;
        background: rgba(255, 255, 255, 0.05);
        color: var(--text-color);
        backdrop-filter: blur(10px);
    }

    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--accent-color);
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        transform: translateY(-2px);
    }

    /* Submit Button */
    .submit-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        width: 100%;
        padding: 1.25rem;
        background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
        color: white;
        border: none;
        border-radius: 15px;
        font-size: 1.1rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
    }

    .submit-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.6s;
    }

    .submit-button:hover::before {
        left: 100%;
    }

    .submit-button:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 
            0 15px 40px rgba(99, 102, 241, 0.4),
            0 0 30px rgba(99, 102, 241, 0.3);
    }

    .submit-button:active {
        transform: translateY(-2px) scale(0.98);
    }

    .submit-button i {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
    }

    .submit-button:hover i {
        transform: translateX(5px) rotate(15deg);
    }

    /* Animations */
    @keyframes background-pulse {
        0%, 100% { 
            opacity: 0.7;
            transform: scale(1);
        }
        50% { 
            opacity: 1;
            transform: scale(1.1);
        }
    }

    @keyframes gentle-float {
        0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.2;
        }
        25% { 
            transform: translateY(-20px) translateX(15px) scale(1.1);
            opacity: 0.4;
        }
        50% { 
            transform: translateY(-10px) translateX(-10px) scale(0.9);
            opacity: 0.3;
        }
        75% { 
            transform: translateY(-30px) translateX(5px) scale(1.05);
            opacity: 0.5;
        }
    }

    @keyframes dots-drift {
        0%, 100% { 
            transform: translate(0, 0);
            opacity: 0.3;
        }
        50% { 
            transform: translate(-20px, -15px);
            opacity: 0.6;
        }
    }

    @keyframes text-shimmer-contact {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }

    @keyframes subtle-glow {
        0%, 100% { 
            opacity: 0.1;
        }
        50% { 
            opacity: 0.3;
        }
    }

    @keyframes rainbow-flow {
        0% { background-position: 0% 0%; }
        100% { background-position: 200% 0%; }
    }

    /* Responsive Design */
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

        .contact-form {
            padding: 2rem;
        }
    }
</style> 