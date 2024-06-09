document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            window.location.href = 'categories.html';
        });
    }

    const categoryForm = document.getElementById('categoryForm');
    if (categoryForm) {
        categoryForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const selectedCategories = document.querySelectorAll('input[name="category"]:checked');
            if (selectedCategories.length !== 3) {
                alert('Please select exactly 3 categories.');
                return;
            }
            window.location.href = 'influencers.html';
        });
    }

    const influencerForm = document.getElementById('influencerForm');
    if (influencerForm) {
        influencerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const selectedInfluencers = document.querySelectorAll('input[name="influencer"]:checked');
            if (selectedInfluencers.length !== 5) {
                alert('Please select exactly 5 influencers.');
                return;
            }
            window.location.href = 'chatbot.html';
        });
    }

    const chatForm = document.getElementById('chatForm');
    if (chatForm) {
        chatForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const userMessage = document.getElementById('userMessage').value;
            const messages = document.getElementById('messages');
            const userMessageDiv = document.createElement('div');
            userMessageDiv.classList.add('message', 'user');
            userMessageDiv.textContent = userMessage;
            messages.appendChild(userMessageDiv);
            document.getElementById('userMessage').value = '';

            // Simulating bot response
            setTimeout(() => {
                const botMessageDiv = document.createElement('div');
                botMessageDiv.classList.add('message', 'bot');
                botMessageDiv.textContent = "Bot response to: " + userMessage;
                messages.appendChild(botMessageDiv);
                messages.scrollTop = messages.scrollHeight;
            }, 1000);
        });
    }
});
