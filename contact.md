---
layout: default
title: Contact
---

<div class="contact-container">
    <!-- Animated background elements -->
    <div class="contact-bg-patterns">
        <div class="floating-elements">
            <div class="float-element float-1"></div>
            <div class="float-element float-2"></div>
            <div class="float-element float-3"></div>
            <div class="float-element float-4"></div>
        </div>
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

            <div class="email-section">
                <h2>Email</h2>
                <a href="mailto:lucasguichard78@gmail.com" class="email-link">
                    <div class="email-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <span>lucasguichard78@gmail.com</span>
                </a>
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

    /* Animated Background Patterns */
    .contact-bg-patterns {
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
        animation: float-contact 20s ease-in-out infinite;
    }

    .float-1 {
        width: 60px;
        height: 60px;
        background: linear-gradient(45deg, var(--accent-color), rgba(99, 102, 241, 0.3));
        border-radius: 50%;
        top: 15%;
        left: 10%;
        animation-delay: 0s;
    }

    .float-2 {
        width: 40px;
        height: 40px;
        background: linear-gradient(45deg, #e74c3c, rgba(231, 76, 60, 0.3));
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        top: 70%;
        right: 15%;
        animation-delay: -5s;
    }

    .float-3 {
        width: 80px;
        height: 80px;
        background: linear-gradient(45deg, #2ecc71, rgba(46, 204, 113, 0.3));
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        top: 25%;
        right: 25%;
        animation-delay: -10s;
    }

    .float-4 {
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #f39c12, rgba(243, 156, 18, 0.3));
        border-radius: 8px;
        top: 80%;
        left: 20%;
        animation-delay: -15s;
    }

    /* Geometric Pattern */
    .geometric-pattern {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
        background-size: 40px 40px;
        animation: pattern-move 40s linear infinite;
    }

    /* Particle Field */
    .particle-field {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(231, 76, 60, 0.1) 1px, transparent 1px);
        background-size: 80px 80px, 120px 120px;
        animation: particle-drift-contact 30s ease-in-out infinite;
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
        animation: text-shimmer-contact 4s ease-in-out infinite;
        margin-bottom: 1rem;
        text-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
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
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    /* Social Links */
    .social-links {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .social-link {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 15px;
        text-decoration: none;
        color: var(--text-color);
        font-weight: 600;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        position: relative;
        overflow: hidden;
    }

    .social-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.6s;
    }

    .social-link:hover::before {
        left: 100%;
    }

    .social-link:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 
            0 15px 40px rgba(0, 0, 0, 0.2),
            0 0 20px rgba(99, 102, 241, 0.3);
        border-color: rgba(99, 102, 241, 0.3);
    }

    .social-icon {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
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

    /* Email Section */
    .email-section h2 {
        margin-bottom: 1.5rem;
        color: var(--text-color);
        font-size: 1.8rem;
    }

    .email-link {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 15px;
        color: var(--text-color);
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        position: relative;
        overflow: hidden;
    }

    .email-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.6s;
    }

    .email-link:hover::before {
        left: 100%;
    }

    .email-link:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 
            0 15px 40px rgba(0, 0, 0, 0.2),
            0 0 20px rgba(99, 102, 241, 0.3);
        border-color: rgba(99, 102, 241, 0.3);
    }

    .email-icon {
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #e74c3c, #c0392b);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .email-link:hover .email-icon {
        transform: rotate(360deg) scale(1.1);
        box-shadow: 0 0 20px rgba(231, 76, 60, 0.5);
    }

    .email-icon i {
        font-size: 1.5rem;
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
    @keyframes float-contact {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-15px) rotate(90deg); }
        50% { transform: translateY(-8px) rotate(180deg); }
        75% { transform: translateY(-25px) rotate(270deg); }
    }

    @keyframes pattern-move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(40px, 40px); }
    }

    @keyframes particle-drift-contact {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-15px, -15px); }
    }

    @keyframes text-shimmer-contact {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
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

        .float-element {
            display: none;
        }

        .contact-form {
            padding: 2rem;
        }
    }
</style> 