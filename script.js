// script.js

let listings = [];

// Load data from data.json
function loadData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            listings = data;
            updateTimestamps();
            console.log('Data loaded successfully');
        })
        .catch(error => console.error('Error loading data:', error));
}

// Add a new listing
function addListing(listing, password) {
    const correctPassword = 'your_password_here'; // Change this to your actual password check logic
    if (password === correctPassword) {
        listings.push({ ...listing, lastUpdated: new Date() });
        console.log('Listing added successfully.');
    } else {
        console.error('Incorrect password. Listing not added.');
    }
}

// Edit a listing
function editListing(index, updatedListing, password) {
    const correctPassword = 'your_password_here';
    if (password === correctPassword) {
        listings[index] = { ...updatedListing, lastUpdated: new Date() };
        console.log('Listing updated successfully.');
    } else {
        console.error('Incorrect password. Listing not updated.');
    }
}

// Delete a listing
function deleteListing(index, password) {
    const correctPassword = 'your_password_here';
    if (password === correctPassword) {
        listings.splice(index, 1);
        console.log('Listing deleted successfully.');
    } else {
        console.error('Incorrect password. Listing not deleted.');
    }
}

// Search listings by document name
function searchListings(documentName) {
    return listings.filter(listing => listing.documentName.includes(documentName));
}

// Update timestamps
function updateTimestamps() {
    listings.forEach(listing => {
        listing.lastUpdated = new Date();
    });
}

// Manage contact profile changes
function changeContactProfile(index, newProfile) {
    listings[index].contactProfile = newProfile;
    listings[index].lastUpdated = new Date();
    console.log('Contact profile updated successfully.');
}

// Initialize the loading of data
loadData();
