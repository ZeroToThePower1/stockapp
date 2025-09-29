document.addEventListener('DOMContentLoaded', function () {
    const texts = ["ACTIVE", "PATIENT", "INFORMED", "PREPARED"];
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

    // Start the typing animation
    setTimeout(type, 1000);

    // Button hover effect enhancement
    const button = document.querySelector('.discover-btn');

    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const strategyTexts = ["Strategies", "Techniques", "Secrets", "Methods"];
    const strategiesElement = document.getElementById('strategies-text');
    let strategyIndex = 0;
    let charIndex = 0;
    let isDeletingStrategy = false;
    let strategySpeed = 100;

    function typeStrategy() {
        const currentText = strategyTexts[strategyIndex];

        if (isDeletingStrategy) {
            strategiesElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            strategySpeed = 50;
        } else {
            strategiesElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            strategySpeed = 100;
        }

        if (!isDeletingStrategy && charIndex === currentText.length) {
            strategySpeed = 1500;
            isDeletingStrategy = true;
        } else if (isDeletingStrategy && charIndex === 0) {
            isDeletingStrategy = false;
            strategyIndex++;
            if (strategyIndex >= strategyTexts.length) {
                strategyIndex = 0;
            }
        }

        setTimeout(typeStrategy, strategySpeed);
    }

    // Start the typing animation
    setTimeout(typeStrategy, 500);

    // Video play functionality
    const playBtn = document.querySelector('.play-btn');
    const video = document.querySelector('.video2 video');

    playBtn.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
});

