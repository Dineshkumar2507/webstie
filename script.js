function handleSearch() {
    let input = document.getElementById('search').value.toLowerCase();
    let cards = document.querySelectorAll('.textbar .card');
  
    cards.forEach(card => {
        let carName = '';
        if (card.querySelector('.Mercedes')) {
            carName = card.querySelector('.Mercedes').innerText.toLowerCase();
        } 
        else if (card.querySelector('.Lamborghini')) {
            carName = card.querySelector('.Lamborghini').innerText.toLowerCase();
        } 
        else if (card.querySelector('.Ford')) {
            carName = card.querySelector('.Ford').innerText.toLowerCase();
        } 
        else if (card.querySelector('.Rolls-Royce')) {
            carName = card.querySelector('.Rolls-Royce').innerText.toLowerCase();
        } 
        if (card.querySelector('.BMW')) {
            carName = card.querySelector('.BMW').innerText.toLowerCase();
        } 
        else if (card.querySelector('.Bentley')) {
            carName = card.querySelector('.Bentley').innerText.toLowerCase();
        } 
        else if (card.querySelector('.Audi')) {
            carName = card.querySelector('.Audi').innerText.toLowerCase();
        } 
        else if (card.querySelector('.Ram')) {
            carName = card.querySelector('.Ram').innerText.toLowerCase();
        }
  
        if (carName.includes(input)) {
            card.style.display = 'flex'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card if not matched
        }
    });
  }
  
  document.getElementById('search').addEventListener('input', handleSearch);
  