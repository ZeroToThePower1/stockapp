document.addEventListener('DOMContentLoaded', function () {

    const texts = ["CONTACT US", "REACH OUT", "GET IN TOUCH", "MESSAGE US"];
    const typingElement = document.getElementById('typing-element');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            // Deleting text
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // Typing text
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        // Check if text is fully typed
        if (!isDeleting && charIndex === currentText.length) {
            // Pause at the end
            typingSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to next text
            isDeleting = false;
            textIndex++;
            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }

        setTimeout(type, typingSpeed);
    }

    const strategyTexts = ["Strategies", "Techniques", "Secrets", "Methods"];
    const strategiesElement = document.getElementById('strategies-text');
    let strategyIndex = 0;
    let strategyCharIndex = 0;
    let isDeletingStrategy = false;
    let strategySpeed = 100;

    function typeStrategy() {
        const currentText = strategyTexts[strategyIndex];

        if (isDeletingStrategy) {
            strategiesElement.textContent = currentText.substring(0, strategyCharIndex - 1);
            strategyCharIndex--;
            strategySpeed = 50;
        } else {
            strategiesElement.textContent = currentText.substring(0, strategyCharIndex + 1);
            strategyCharIndex++;
            strategySpeed = 100;
        }

        if (!isDeletingStrategy && strategyCharIndex === currentText.length) {
            strategySpeed = 1500;
            isDeletingStrategy = true;
        } else if (isDeletingStrategy && strategyCharIndex === 0) {
            isDeletingStrategy = false;
            strategyIndex++;
            if (strategyIndex >= strategyTexts.length) {
                strategyIndex = 0;
            }
        }

        setTimeout(typeStrategy, strategySpeed);
    }


    const button = document.querySelector('.discover-btn');

    if (button) {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    }


    if (typingElement) {
        setTimeout(type, 500);
    }
    
    if (strategiesElement) {
        setTimeout(typeStrategy, 300);
    }
});