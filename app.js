// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const app = new GreetingApp();
    
    // DOM elements
    const greetingText = document.getElementById('greetingText');
    const nameInput = document.getElementById('nameInput');
    const personalizeBtn = document.getElementById('personalizeBtn');
    const randomBtn = document.getElementById('randomBtn');
    const cycleBtn = document.getElementById('cycleBtn');
    const timeDisplay = document.getElementById('timeDisplay');
    const dateDisplay = document.getElementById('dateDisplay');
    
    // Animation helper
    function animateGreeting() {
        greetingText.classList.remove('animate');
        void greetingText.offsetWidth; // Trigger reflow
        greetingText.classList.add('animate');
    }
    
    // Update time and date
    function updateTimeAndDate() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        timeDisplay.textContent = `${app.getCurrentTime()} - ${timeString}`;
        dateDisplay.textContent = app.formatDate();
    }
    
    // Initial time update
    updateTimeAndDate();
    setInterval(updateTimeAndDate, 1000);
    
    // Event listeners
    personalizeBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            const personalizedGreeting = app.getPersonalizedGreeting(name);
            greetingText.textContent = personalizedGreeting;
            animateGreeting();
            
            // Add a time-based greeting
            const timeGreeting = app.getCurrentTime();
            greetingText.textContent = `${timeGreeting}, ${name}! ${personalizedGreeting}`;
        }
    });
    
    randomBtn.addEventListener('click', () => {
        const randomGreeting = app.getRandomGreeting();
        greetingText.textContent = randomGreeting;
        animateGreeting();
    });
    
    cycleBtn.addEventListener('click', () => {
        const nextGreeting = app.getNextGreeting();
        greetingText.textContent = nextGreeting;
        animateGreeting();
    });
    
    // Enter key support
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            personalizeBtn.click();
        }
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'r':
                    e.preventDefault();
                    randomBtn.click();
                    break;
                case 'n':
                    e.preventDefault();
                    cycleBtn.click();
                    break;
                case 'p':
                    e.preventDefault();
                    nameInput.focus();
                    break;
            }
        }
    });
    
    // Add some interactive effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Save and restore name from localStorage
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        nameInput.value = savedName;
    }
    
    nameInput.addEventListener('input', () => {
        localStorage.setItem('userName', nameInput.value);
    });
    
    // Add a welcome message on first load
    if (!localStorage.getItem('hasVisited')) {
        localStorage.setItem('hasVisited', 'true');
        setTimeout(() => {
            greetingText.textContent = "Welcome! Try personalizing your greeting!";
            animateGreeting();
        }, 2000);
    }
});