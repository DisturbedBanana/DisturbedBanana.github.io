// Simple Visitor Counter
class VisitorCounter {
    constructor() {
        this.counterElement = null;
        this.init();
    }

    init() {
        // Create counter element
        this.createCounterElement();
        
        // Update count
        this.updateCount();
        
        // Add to page
        this.addToPage();
    }

    createCounterElement() {
        this.counterElement = document.createElement('div');
        this.counterElement.id = 'visitor-counter';
        this.counterElement.innerHTML = `
            <div class="counter-container">
                <div class="counter-icon">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="counter-content">
                    <div class="counter-number" id="visit-count">0</div>
                    <div class="counter-label">Portfolio Views</div>
                </div>
            </div>
        `;
    }

    updateCount() {
        let count = localStorage.getItem('portfolioVisits') || 0;
        count = parseInt(count) + 1;
        localStorage.setItem('portfolioVisits', count);
        
        // Update display with animation
        this.animateCount(count);
    }

    animateCount(targetCount) {
        const countElement = document.getElementById('visit-count');
        const currentCount = parseInt(countElement.textContent);
        const increment = targetCount > currentCount ? 1 : -1;
        
        const animate = () => {
            if (currentCount !== targetCount) {
                countElement.textContent = currentCount + increment;
                setTimeout(animate, 50);
            }
        };
        
        animate();
    }

    addToPage() {
        // Add to the bottom of the page
        document.body.appendChild(this.counterElement);
    }
}

// Initialize counter when page loads
document.addEventListener('DOMContentLoaded', () => {
    new VisitorCounter();
}); 