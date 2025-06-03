// Get reference to the sidebar message element
const message = document.getElementById('message');

// Get current date and time
const now = new Date();

// Try to get last visit from localStorage
const lastVisit = localStorage.getItem('lastVisit');

let message1 = '';

if (lastVisit) {
    const lastVisitDate = new Date(lastVisit);
    const timeDiff = now - lastVisitDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff < 1) {
        message1 = "Back so soon! Awesome!";
    }
    else if (daysDiff = 1) {
        message1 = `You last visited ${daysDiff} day ago.`;
    }
    else if (daysDiff < 100000000) {
        message1 = `You last visited ${daysDiff} days ago.`;
    }
} else {
    message1 = "Welcome! Let us know if you have any questions.";
}

// Display the message
message.textContent = message1;

// Store the current visit date
localStorage.setItem('lastVisit', now.toISOString());