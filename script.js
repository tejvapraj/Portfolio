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
