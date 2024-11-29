// Enlarging the image on click
function imagelrg() {
    let image = document.getElementById("myimg");
    image.style.width = image.style.width === "500px" ? "250px" : "500px"; // Toggle between original and enlarged size
}

// Onmouseover and Onmouseout events for navigation links
function mOver(element) {
    element.style.color = "lightgreen"; // Change color to light green on hover
}

function mOut(element) {
    element.style.color = "white"; // Change color back to white when not hovering
}

// Toggling the dropdown menu
function tggldropdown() {
    let dropdwncontent = document.querySelector('.dropdown-content');
    dropdwncontent.style.display = dropdwncontent.style.display === 'block' ? 'none' : 'block';
}

// Toggle Text Size
function toggleTextSize() {
    const textElements = document.querySelectorAll('body, p, h1, h2, .image-caption, .alt-text, a, button');
    textElements.forEach((element) => {
        element.classList.toggle("enlarged");
    });
}

// Toggle Color-Blind Friendly Mode
function toggleColorBlindMode() {
    document.body.classList.toggle("color-blind-mode");
}

// Notification function for real-time validation errors
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Style the notification
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#f44336';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1000';
    notification.style.fontFamily = 'Arial, sans-serif';

    // Add the notification to the body
    document.body.appendChild(notification);

    // Remove the notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Add event listeners after DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Real-time validation for Name
    document.getElementById('usrname').addEventListener('input', function () {
        const name = this.value.trim();
        if (name.length < 2) {
            showNotification('Name must be at least 2 characters.');
        }
    });

    // Real-time validation for Message
    document.getElementById('msg').addEventListener('input', function () {
        const message = this.value.trim();
        if (message.length < 10) {
            showNotification('Message must be at least 10 characters.');
        }
    });

    // Real-time validation for Email
    document.getElementById('emxl').addEventListener('input', function () {
        const email = this.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            showNotification('Please enter a valid email address.');
        }
    });

    // Real-time validation for Phone
    document.getElementById('phne').addEventListener('input', function () {
        const phone = this.value.trim();
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        if (phone && !phonePattern.test(phone)) {
            showNotification('Phone number must be in the format 123-456-7890.');
        }
    });

    // Real-time validation for Preferred Contact Date
    document.getElementById('ctcdte').addEventListener('input', function () {
        const date = new Date(this.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Ignore time for comparison
        if (date < today) {
            showNotification('Preferred contact date cannot be in the past.');
        }
    });

    // Submit Form
    document.querySelector('button[onclick="submitForm()"]').addEventListener('click', function () {
        const name = document.getElementById('usrname').value.trim();
        const message = document.getElementById('msg').value.trim();
        const email = document.getElementById('emxl').value.trim();

        if (!name || !message || !email) {
            // Display a general alert for missing mandatory fields
            alert("Please fill in all mandatory fields.");
    
            // Show individual notifications for missing fields
            if (!name) {
                showNotification("Please fill in the Name field.");
            }
            if (!message) {
                showNotification("Please fill in the Message field.");
            }
            if (!email) {
                showNotification("Please fill in the Email field.");
            }
            return;
        }

        const confirmSubmission = confirm('Are you sure you want to submit this information?');
        if (confirmSubmission) {
            alert('Thank you for your message! We will get back to you shortly.');
            document.getElementById('contactForm').reset();
        } else {
            alert('Submission cancelled. You can review your information.');
        }
    });

    // Clear Form Confirmation
    document.querySelector('button[type="reset"]').addEventListener('click', function (event) {
        const confirmClear = confirm('Are you sure you want to clear all your information?');
        if (!confirmClear) {
            event.preventDefault(); // Prevent the form from being reset
        }
    });
});
