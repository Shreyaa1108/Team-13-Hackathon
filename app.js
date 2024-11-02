// Simulated credentials
const validUsername = "student";
const validPassword = "password123";

// Check login status on page load
document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Log current login status for debugging
    console.log("Login status on page load:", isLoggedIn);

    // Redirect logic
    if (isLoggedIn === "true" && window.location.pathname.includes("login.html")) {
        console.log("User is logged in; redirecting to index.html...");
        window.location.href = "index.html"; // Redirect to home page if already logged in
    } else if (isLoggedIn !== "true" && window.location.pathname.includes("index.html")) {
        console.log("User not logged in; redirecting to login.html...");
        window.location.href = "login.html"; // Redirect to login page if not logged in
    }
});

// Handle login
function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("loginError");

    // Log input values for debugging
    console.log("Username entered:", username);
    console.log("Password entered:", password);

    // Check credentials
    if (username === validUsername && password === validPassword) {
        console.log("Login successful!");
        localStorage.setItem("isLoggedIn", "true"); // Set login status in localStorage
        window.location.href = "index.html"; // Redirect to home page upon successful login
    } else {
        console.log("Login failed: Invalid credentials.");
        loginError.style.display = "block"; // Show error message
    }
}

// Handle logout
function logout() {
    console.log("Logging out...");
    localStorage.removeItem("isLoggedIn"); // Remove login status from localStorage
    window.location.href = "login.html"; // Redirect to login page after logout
}


// Sample POI data array
const poiData = [
    { name: "Bike Rack A", type: "Bike Parking", location: "Near Library" },
    { name: "Water Dispenser B", type: "Water Refill", location: "Main Hall" },
    { name: "Microwave Station 1", type: "Microwave", location: "Student Center" },
    { name: "Quiet Study Zone", type: "Quiet Study", location: "Second Floor, Library" },
    // Add more POIs here
];

// Function to display POIs based on filter
function displayPOIs(filteredPOIs) {
    const poiList = document.getElementById("poi-list");
    poiList.innerHTML = ""; // Clear previous entries

    filteredPOIs.forEach(poi => {
        const poiItem = document.createElement("div");
        poiItem.className = "poi-item";
        poiItem.innerHTML = `<strong>${poi.name}</strong> - ${poi.type}<br><small>${poi.location}</small>`;
        poiList.appendChild(poiItem);
    });
}

// Filter function
function filterPOI(type) {
    if (type === 'all') {
        displayPOIs(poiData); // Show all POIs
    } else {
        const filtered = poiData.filter(poi => poi.type === type);
        displayPOIs(filtered); // Show only selected type
    }
}

// Initial load - display all POIs
window.onload = () => displayPOIs(poiData);

// Optional: Map setup
document.getElementById("map").style.display = "block"; // Display map

// Initialize map with Leaflet.js if map is required
const map = L.map('map').setView([latitude, longitude], 15); // Adjust with campus coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add POI markers to the map (Optional)
poiData.forEach(poi => {
    L.marker([latitude, longitude]) // Replace with actual POI coordinates
        .addTo(map)
        .bindPopup(`<b>${poi.name}</b><br>${poi.type}<br>${poi.location}`);
});

