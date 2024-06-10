document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const emailInput = document.querySelector("input[type='email']");
        const passwordInput = document.querySelector("input[type='password']");
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (emailValue === "") {
            alert("Please enter your email address.");
            return;
        }

        if (!emailValue.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (passwordValue === "") {
            alert("Please enter your password.");
            return;
        }

        if (passwordValue.length < 8) {
            alert("Please enter a password with at least 8 characters.");
            return;
        }

        // If all validation passes, redirect to categories page
        window.location.href = "categories.html";

        nextButton.addEventListener("click", function() {
    const selectedCategories = [];
    categories.forEach(function(category) {
        const checkbox = category.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            selectedCategories.push(category);
        }
    });

    if (selectedCategories.length < 3) {
        alert("Please select at least 3 categories.");
        return;
    }

    // Redirect to influencers page
    window.location.href = "influencers.html";
});

    document.addEventListener("DOMContentLoaded", function() {
    const influencers = document.querySelectorAll(".influencer");
    const nextButton = document.querySelector("button[type='submit']");

    influencers.forEach(function(influencer) {
        influencer.addEventListener("click", function() {
            const checkbox = influencer.querySelector("input[type='checkbox']");
            checkbox.checked =!checkbox.checked;
        });
    });

    nextButton.addEventListener("click", function() {
        const selectedInfluencers = [];
        influencers.forEach(function(influencer) {
            const checkbox = influencer.querySelector("input[type='checkbox']");
            if (checkbox.checked) {
                selectedInfluencers.push(influencer);
            }
        });

        if (selectedInfluencers.length < 3) {
            alert("Please select at least 3 influencers.");
            return;
        }

        // Redirect to chatbot page
        window.location.href = "chatbot.html";
    });
});
    });
});

