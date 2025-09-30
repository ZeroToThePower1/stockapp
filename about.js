document.addEventListener('DOMContentLoaded', function () {
    const typingText = document.querySelector('.typing-text');
    const text = 'Story';
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    setTimeout(type, 1000);

    const timelineItems = document.querySelectorAll('.timeline-item');

    function checkTimeline() {
        const triggerBottom = window.innerHeight * 0.8;

        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkTimeline);
    checkTimeline(); 
});