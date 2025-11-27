// Retrieve counter
let count = Number(localStorage.getItem("reviewCount")) || 0;

// Increase by 1 each visit
count++;

// Save it
localStorage.setItem("reviewCount", count);

// Display it
document.getElementById("reviewCount").textContent = count;