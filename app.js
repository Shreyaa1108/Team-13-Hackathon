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
