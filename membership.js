document.addEventListener('DOMContentLoaded', function() {
            const typingText = document.querySelector('.typing-text');
            const text = 'Membership';
            let index = 0;
            
            function type() {
                if (index < text.length) {
                    typingText.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, 150);
                }
            }
            
            setTimeout(type, 1000);
        });