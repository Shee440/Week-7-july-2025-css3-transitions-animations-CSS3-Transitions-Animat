// Part 1: CSS3 Transitions and Animations

// Toggle pulse animation
document.getElementById('toggle-pulse').addEventListener('click', function() {
    const pulseBox = document.querySelector('.pulse-box');
    pulseBox.classList.toggle('paused');
    
    this.textContent = pulseBox.classList.contains('paused') 
        ? 'Play Pulse Animation' 
        : 'Pause Pulse Animation';
});

// Toggle bounce animation
document.getElementById('toggle-bounce').addEventListener('click', function() {
    const bounceBox = document.querySelector('.bounce-box');
    bounceBox.classList.toggle('paused');
    
    this.textContent = bounceBox.classList.contains('paused') 
        ? 'Play Bounce Animation' 
        : 'Pause Bounce Animation';
});

// Part 2: JavaScript Functions

// Global variable to demonstrate scope
let globalCounter = 0;

// Function with parameters and return value
function calculateSum(a, b) {
    // Local variables - these are only accessible within this function
    const num1 = Number(a);
    const num2 = Number(b);
    
    // Return the sum
    return num1 + num2;
}

// Function to demonstrate scope
function demonstrateScope() {
    // This variable is local to this function
    let localCounter = 0;
    
    // We can access the global variable
    globalCounter++;
    localCounter++;
    
    return {
        global: globalCounter,
        local: localCounter
    };
}

// Function to format text
function formatText(text, formatType) {
    switch(formatType) {
        case 'uppercase':
            return text.toUpperCase();
        case 'lowercase':
            return text.toLowerCase();
        case 'capitalize':
            return text.replace(/\b\w/g, char => char.toUpperCase());
        default:
            return text;
    }
}

// Set up event listeners for function examples
document.getElementById('calculate-btn').addEventListener('click', function() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    // Call our function with parameters and use the return value
    const sum = calculateSum(num1, num2);
    
    document.getElementById('sum-output').textContent = `The sum is: ${sum}`;
});

document.getElementById('scope-demo-btn').addEventListener('click', function() {
    // Call the function multiple times to demonstrate scope
    const result1 = demonstrateScope();
    const result2 = demonstrateScope();
    const result3 = demonstrateScope();
    
    document.getElementById('scope-output').innerHTML = `
        After 3 clicks:<br>
        Global counter: ${result3.global}<br>
        Local counter resets each time: ${result3.local}
    `;
});

document.getElementById('uppercase-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const formatted = formatText(text, 'uppercase');
    document.getElementById('text-output').textContent = formatted;
});

document.getElementById('lowercase-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const formatted = formatText(text, 'lowercase');
    document.getElementById('text-output').textContent = formatted;
});

document.getElementById('capitalize-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const formatted = formatText(text, 'capitalize');
    document.getElementById('text-output').textContent = formatted;
});

// Part 3: Combining CSS Animations with JavaScript

// Card flip functionality
const animatedCard = document.getElementById('js-card');
const flipCardBtn = document.getElementById('flip-card-btn');

function flipCard() {
    animatedCard.classList.toggle('flipped');
}

animatedCard.addEventListener('click', flipCard);
flipCardBtn.addEventListener('click', flipCard);

// Loader control functionality
const loader = document.getElementById('js-loader');
const startLoaderBtn = document.getElementById('start-loader');
const stopLoaderBtn = document.getElementById('stop-loader');

startLoaderBtn.addEventListener('click', function() {
    loader.classList.remove('paused');
    loader.style.display = 'flex';
});

stopLoaderBtn.addEventListener('click', function() {
    loader.classList.add('paused');
    
    // Hide after a short delay
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Modal functionality
const modalOverlay = document.getElementById('modal-overlay');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modal = document.getElementById('js-modal');

function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Utility function to add CSS animation classes dynamically
function animateElement(element, animationClass, duration = 1000) {
    element.classList.add(animationClass);
    
    // Remove the class after animation completes
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, duration);
}

// Example usage of the utility function
document.querySelectorAll('.animation-box h3').forEach(title => {
    title.addEventListener('mouseover', () => {
        animateElement(title, 'pulse', 500);
    });
});