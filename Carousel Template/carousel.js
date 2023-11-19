// carousel.js

// Function to handle image click
function handleImageClick(clickedElement) {
  // Toggle class for the clicked image
  clickedElement.classList.toggle("expand");

  // Remove the "expand" class from all other images
  const allImages = document.querySelectorAll(".image");
  allImages.forEach((image) => {
    if (image !== clickedElement) {
      image.classList.remove("expand");
    }
  });
}

// Function to add event listeners to image elements
function addEventListeners() {
  const allImages = document.querySelectorAll(".image");
  allImages.forEach((image) => {
    image.addEventListener("click", function () {
      handleImageClick(this);
    });
  });
}

// Call the function to add event listeners
addEventListeners();
