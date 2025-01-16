// Get the product card element
const productCard = document.querySelector(".product-card");

// Get the container for product cards
const productGrid = document.querySelector(".product-grid");

// Number of times to duplicate the card
const duplicates = 9; // Change this to the desired number of duplicates

// Duplicate the card and append to the grid
for (let i = 0; i < duplicates; i++) {
  const clonedCard = productCard.cloneNode(true); // Deep clone the card
  productGrid.appendChild(clonedCard); // Add the cloned card to the grid
}
