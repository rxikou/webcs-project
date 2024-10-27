// Get elements
const mailIcon = document.getElementById('mailIcon');
const popupModal = document.getElementById('popupModal');
const closeBtn = document.querySelector('.close-btn');

// Show the popup when mail icon is clicked
mailIcon.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    popupModal.style.display = 'flex'; // Use flex to center the modal
});

// Close the popup when the 'X' button is clicked
closeBtn.addEventListener('click', () => {
    popupModal.style.display = 'none';
});

// Close the popup when user clicks outside the content area
window.addEventListener('click', (event) => {
    if (event.target === popupModal) {
        popupModal.style.display = 'none';
    }
});

// Handle the subscription form submission
const subscriptionForm = document.getElementById('subscriptionForm');
subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('email').value; // Get the email value
    alert(`Thank you for subscribing with ${email}!`); // Alert for confirmation
    popupModal.style.display = 'none'; // Close the popup after submission
});
//--------------------------------------------------------------------------------------
const shopNowBtn = document.querySelector('.shop-now-btn');

shopNowBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    const theHousesSection = document.getElementById('brands-banner');
    const yOffset = -100; // Optional: offset from the top of the section

    window.scrollTo({
        top: theHousesSection.offsetTop + yOffset,
        behavior: 'smooth' // Add smooth scrolling behavior
    });
});

//----------------------------------------------------------------------------------------
// Select hamburger button and nav menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Toggle 'active' class to slide the menu in/out
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
