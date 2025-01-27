document.addEventListener("DOMContentLoaded", () => {
  // Get the original product card element
  const productCard = document.querySelector(".product-card");

  // Get the container for product cards
  const productGrid = document.querySelector(".product-grid");

  // Number of times to duplicate the card
  const duplicates = 8; // Change this to the desired number of duplicates

  // Duplicate the card and append to the grid
  for (let i = 0; i < duplicates; i++) {
    const clonedCard = productCard.cloneNode(true); // Deep clone the card

    // Generate unique names for the radio buttons in the length-container
    const radioButtons = clonedCard.querySelectorAll(".length-label input");
    radioButtons.forEach((radio, index) => {
      radio.name = `length-${i}`; // Assign a unique name
      radio.id = `length-${i}-${index}`; // Assign a unique id
      const label = radio.parentElement.querySelector("span.length-text");
      label.setAttribute("for", radio.id); // Link the label to the radio button
    });

    // Assign a unique ID to the quantity dropdown
    const quantitySelect = clonedCard.querySelector("#quantity");
    quantitySelect.id = `quantity-${i}`;

    // Get the cart button in the cloned card
    const cartButton = clonedCard.querySelector(".cart-button");

    // Listen for changes in the quantity dropdown
    quantitySelect.addEventListener("change", () => {
      // Check if the selected value is not the default "quantity"
      if (quantitySelect.value !== "quantity") {
        // Add the active class to the corresponding cart button
        cartButton.classList.add("active");
        cartButton.style.cursor = "pointer"; // Enable cursor for active state
      } else {
        // Remove the active class to reset the cart button's style
        cartButton.classList.remove("active");
        cartButton.style.cursor = "not-allowed"; // Reset cursor for inactive state
      }
    });

    // Generate unique names and IDs for the date radio buttons
    const dateRadioButtons = clonedCard.querySelectorAll(".date-label input");
    dateRadioButtons.forEach((radio, index) => {
      radio.name = `date-${i}`; // Assign a unique name per card
      radio.id = `date-${i}-${index}`; // Assign a unique id
      const label = radio.parentElement.querySelector(".date-text");
      label.setAttribute("for", radio.id); // Link the label to the radio button
    });

    // Append the cloned card to the product grid
    productGrid.appendChild(clonedCard);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll(".heart");

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("active"); // Toggle the active class
    });
  });
});
