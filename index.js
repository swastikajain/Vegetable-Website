function addToCart(productName, price, imageUrl) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push({ name: productName, price: price, image: imageUrl }); // Store the image URL as well
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Dispatch a custom event to notify the "cart.html" page about the cart update
  window.dispatchEvent(new Event("cartUpdated"));
}

document.getElementById("location").addEventListener("click", function () {
  openGoogleMaps("Dehradun, Uttarakhand");
});

function openGoogleMaps(location) {
  // Replace spaces with plus signs for the URL
  var formattedLocation = location.replace(/ /g, "+");

  // Create the Google Maps URL with the specified location
  var mapsUrl = "https://www.google.com/maps?q=" + formattedLocation;

  // Open the URL in a new tab or window
  window.open(mapsUrl);
}
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
