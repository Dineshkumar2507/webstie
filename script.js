// script.js

// Function to handle search input
function handleSearch() {
  let input = document.getElementById('search').value.toLowerCase();
  let cards = document.querySelectorAll('.card');

  cards.forEach(card => {
      let carName = card.querySelector('.head1').innerText.toLowerCase();
      if (carName.includes(input)) {
          card.style.display = 'block'; // Show the card
      } else {
          card.style.display = 'none'; // Hide the card if not matched
      }
  });
}

// Event listener for input change
document.getElementById('search').addEventListener('input', handleSearch);
