const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  searchInput.addEventListener('input', function() {
    const searchText = this.value.trim().toLowerCase();

    // Clear previous search results
    searchResults.innerHTML = '';

    if (searchText.length === 0) {
      return;
    }

    // Simulated data for demonstration
    const data = [
      "Burger", "MO:Mo", "Ramen Noodles", "Pizza", "KFC", "Biryani",
      "Sandwich", "Keema Noodles", "Fry Rice", "Salad", "Chicken Wings"
    ];
    const filteredResults = data.filter(item => {
      return item.toLowerCase().includes(searchText);
    });

    if (filteredResults.length === 0) {
      searchResults.innerHTML = '<p>No results found</p>';
    } else {
      const ul = document.createElement('ul');
      filteredResults.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      searchResults.appendChild(ul);
    }
  });
