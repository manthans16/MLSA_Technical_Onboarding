const textArray = ["I Am Manthan Sharma", " Data Science Enthusiast "];
const typingSpeed = 150;
const erasingSpeed = 150;

const typingTextElement = document.getElementById("typing-text");

function typeText(index) {
    const text = textArray[index];
    let currentIndex = 0;

    function typeCharacter() {
        if (currentIndex < text.length) {
            typingTextElement.textContent += text[currentIndex];
            currentIndex++;
            setTimeout(typeCharacter, typingSpeed);
        } else {
            setTimeout(eraseText, typingSpeed * 2);
        }
    }

    function eraseText() {
        const textLength = typingTextElement.textContent.length;
        if (textLength > 0) {
            const displayedText = text.substring(0, textLength - 1);
            typingTextElement.textContent = displayedText;
            setTimeout(eraseText, erasingSpeed);
        } else {
            const nextIndex = (index + 1) % textArray.length;
            setTimeout(() => typeText(nextIndex), erasingSpeed);
        }
    }

    // Start typing animation
    typeCharacter();
}

// Start the typing animation when the page loads
window.addEventListener("load", () => {
    setTimeout(typeText, 0, 0); // Start typing immediately
});
