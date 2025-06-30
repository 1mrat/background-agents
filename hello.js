// Interactive Greeting Application
class GreetingApp {
    constructor() {
        this.greetings = [
            "Hello, World!",
            "Welcome to the future!",
            "Greetings, earthling!",
            "Hey there, awesome person!",
            "Salutations and good vibes!",
            "Howdy, partner!",
            "Bonjour, le monde!",
            "¡Hola, mundo!",
            "Ciao, mondo!",
            "こんにちは、世界！"
        ];
        this.currentGreetingIndex = 0;
        this.userName = '';
    }

    getRandomGreeting() {
        return this.greetings[Math.floor(Math.random() * this.greetings.length)];
    }

    getNextGreeting() {
        const greeting = this.greetings[this.currentGreetingIndex];
        this.currentGreetingIndex = (this.currentGreetingIndex + 1) % this.greetings.length;
        return greeting;
    }

    getPersonalizedGreeting(name) {
        const baseGreeting = this.getRandomGreeting();
        return name ? baseGreeting.replace(/World|earthling|person|partner|monde|mundo|mondo|世界/, name) : baseGreeting;
    }

    getCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        let timeGreeting = '';
        
        if (hours < 12) {
            timeGreeting = 'Good morning';
        } else if (hours < 18) {
            timeGreeting = 'Good afternoon';
        } else {
            timeGreeting = 'Good evening';
        }
        
        return timeGreeting;
    }

    formatDate() {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return new Date().toLocaleDateString(undefined, options);
    }
}

// Export for use in browser or Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GreetingApp;
} else {
    window.GreetingApp = GreetingApp;
}