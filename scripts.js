// Add event listeners to buttons and forms
document.addEventListener("DOMContentLoaded", function() {
    // Login form submission
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        // Validate login credentials and redirect to categories page
        window.location.href = "categories.html";
    });

    // Categories selection submission
    document.querySelector("ul").addEventListener("click", function(event) {
        if (event.target.type === "checkbox") {
            // Validate category selection and redirect to influencers page
            window.location.href = "influencers.html";
        }
    });

    // Influencers selection submission
    document.querySelector("ul").addEventListener("click", function(event) {
        if (event.target.type === "checkbox") {
            // Validate influencer selection and redirect to chatbot page
            window.location.href = "chatbot.html";
        }
    });

    // Chatbot input submission
    document.querySelector(".chatbot-input button").addEventListener("click", function(event) {
        event.preventDefault();
        // Send message to chatbot and display response
        // TO DO: Implement chatbot logic here
    });
});
