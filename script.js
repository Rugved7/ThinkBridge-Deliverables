// Theme Toggle Functionality
const toggleBtn = document.getElementById("toggle-theme");

// Load saved theme (using sessionStorage instead of localStorage)
let currentTheme = "light-theme";
document.body.classList.add(currentTheme);

toggleBtn.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light-theme");
  currentTheme = isLight ? "dark-theme" : "light-theme";

  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(currentTheme);
});

// Typewriter Effect for Name
const element = document.getElementById("typewritter-name");
const words = ["Rugved", "Agasti"];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 120;
const delayBetweenWords = 500; 
const delayBetweenCycles = 1000

function typeWriter() {
    if (charIndex < words[wordIndex].length) {
        element.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        wordIndex++;

        if (wordIndex < words.length) {
            element.innerHTML += " "; 
            charIndex = 0;
            setTimeout(typeWriter, delayBetweenWords);
        } else {
            setTimeout(() => {
                element.innerHTML = "";
                wordIndex = 0;
                charIndex = 0;
                typeWriter();
            }, delayBetweenCycles);
        }
    }
}
window.onload = typeWriter;

// Form Submission Handler
const form = document.getElementById("userForm");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            firstName: document.getElementById("fname").value,
            lastName: document.getElementById("lname").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            timestamp: new Date().toLocaleString()
        };
        
        // Log to console
        console.log("=== Form Submission ===");
        console.log("First Name:", formData.firstName);
        console.log("Last Name:", formData.lastName);
        console.log("Email:", formData.email);
        console.log("Message:", formData.message);
        console.log("Submitted at:", formData.timestamp);
        console.log("Full Data Object:", formData);
        console.log("======================");
        
        // Show alert message
        alert(`Thank you ${formData.firstName} ${formData.lastName}!\n\nYour message has been received. I'll get back to you at ${formData.email} soon.`);
        // Reset form
        form.reset();
    });
}