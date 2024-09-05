// header section about menu button 
let isMenuActive = false;

function toggleMenu() {
    console.log('Menu button clicked'); // For debugging
    const menu = document.getElementById('nav-menu');
    isMenuActive = !isMenuActive;
    if (isMenuActive) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
}
function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') { // Allow Enter and Space key to trigger
        toggleMenu();
    }
}

// Hide the nav menu on scroll
window.addEventListener('scroll', function() {
    if (isMenuActive) {
        document.getElementById('nav-menu').classList.remove('active');
        isMenuActive = false; // Reset the menu state
    }
});

// Button to open Projects
function openProjectPage(){
    window.location.href ='Project.html';
}
document.getElementById('project_button').addEventListener('click', openProjectPage);

// This is to download a Resume 
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready');
});

document.addEventListener('DOMContentLoaded', function() {
    const typingEffect = document.getElementById('typing-effect');
    const text = 'Hello, I am Tejal Apraj,\n a creative web developer.';
    let index = 0;
    const typingSpeed = 100; // Speed of typing

    function type() {
        if (index < text.length) {
            // Replace '\n' with a line break HTML entity
            typingEffect.innerHTML = text.substring(0, index).replace(/\n/g, '<br>');
            index++;
            setTimeout(type, typingSpeed);
        } else {
            typingEffect.classList.add('typing-done'); // Remove cursor after typing is done
        }
    }

    type(); // Start typing effect
});


// To open google form
function openForm(){
    document.getElementById('formContainer').style.display = 'flex';

}
// To close google form
function closeForm(){
    document.getElementById('formContainer').style.display = 'none';
}
