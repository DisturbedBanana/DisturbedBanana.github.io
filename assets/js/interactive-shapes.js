document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('shape-container');
    if (!container) return;

    const shapes = [];
    const shapeTypes = [
        { class: 'circle', html: '' },
        { class: 'triangle', html: '' },
        { class: 'square', html: '' },
        { class: 'hexagon', html: '' },
        { class: 'star', html: '' }
    ];

    const colors = [
        { base: 'hsla(180, 100%, 80%, 1)', gradient: 'hsla(180, 100%, 50%, 0)' }, // Cyan
        { base: 'hsla(240, 100%, 80%, 1)', gradient: 'hsla(240, 100%, 50%, 0)' }, // Blue
        { base: 'hsla(280, 100%, 80%, 1)', gradient: 'hsla(280, 100%, 50%, 0)' }, // Purple
        { base: 'hsla(320, 100%, 80%, 1)', gradient: 'hsla(320, 100%, 50%, 0)' }, // Pink
        { base: 'hsla(0, 100%, 80%, 1)', gradient: 'hsla(0, 100%, 50%, 0)' }  // Red
    ];

    const numShapes = 40;
    const mouse = {
        x: null,
        y: null,
        radius: 150
    };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });
     window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });


    class Shape {
        constructor(x, y, dx, dy, size, type, color) {
            this.x = x;
            this.y = y;
            this.baseX = x;
            this.baseY = y;
            this.dx = dx;
            this.dy = dy;
            this.size = size;
            this.type = type;
            this.color = color;
            this.density = (Math.random() * 20) + 10;

            this.element = document.createElement('div');
            this.element.className = `shape ${this.type.class}`;
            this.element.style.width = `${this.size}px`;
            this.element.style.height = `${this.size}px`;
            
            const gradientColor = `radial-gradient(circle, ${this.color.base} 0%, ${this.color.gradient} 70%)`;
            this.element.style.background = gradientColor;
            this.element.style.border = `1px solid ${this.color.base.replace(/, 1\)/, ', 0.2)')}`;
            this.element.style.opacity = '0.3';

            this.element.style.position = 'absolute';
            this.element.style.left = `${this.x}px`;
            this.element.style.top = `${this.y}px`;
            this.element.style.transition = 'transform 0.1s ease-out';

            // Specific clip-paths for shapes
            if (this.type.class === 'triangle') {
                this.element.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            } else if (this.type.class === 'hexagon') {
                this.element.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
            } else if (this.type.class === 'star') {
                this.element.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
            } else if (this.type.class === 'circle') {
                this.element.style.borderRadius = '50%';
            }


            container.appendChild(this.element);
        }

        draw() {
            this.element.style.transform = `translate(${this.x - this.baseX}px, ${this.y - this.baseY}px)`;
        }

        update() {
            // Mouse repulsion
            if (mouse.x && mouse.y) {
                let dxMouse = mouse.x - this.x;
                let dyMouse = mouse.y - this.y;
                let distance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distance < mouse.radius) {
                    const forceDirectionX = dxMouse / distance;
                    const forceDirectionY = dyMouse / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = forceDirectionX * force * this.density;
                    const directionY = forceDirectionY * force * this.density;

                    this.x -= directionX;
                    this.y -= directionY;
                }
            }
             // Wall bouncing
            if (this.x + this.size > window.innerWidth || this.x < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.size > window.innerHeight || this.y < 0) {
                this.dy = -this.dy;
            }


            // Move particle
            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }

    function init() {
        shapes.length = 0;
        container.innerHTML = '';
        for (let i = 0; i < numShapes; i++) {
            let size = Math.random() * 40 + 20;
            let x = Math.random() * (window.innerWidth - size * 2) + size;
            let y = Math.random() * (window.innerHeight - size * 2) + size;
            let dx = (Math.random() - 0.5) * 0.5;
            let dy = (Math.random() - 0.5) * 0.5;
            let type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            let color = colors[Math.floor(Math.random() * colors.length)];
            shapes.push(new Shape(x, y, dx, dy, size, type, color));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        shapes.forEach(shape => {
            shape.update();
        });
    }
    
    init();
    animate();

    // Re-init on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(init, 500);
    });
}); 