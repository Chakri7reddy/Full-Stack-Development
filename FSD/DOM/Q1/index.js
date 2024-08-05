// Initialize empty arrays to hold product data
let products = [];

// Function to render the charts
function renderCharts() {
    const priceChart = document.getElementById('priceChart');
    const ratingChart = document.getElementById('ratingChart');

    // Clear existing charts
    priceChart.innerHTML = '<h2>Price Chart</h2>';
    ratingChart.innerHTML = '<h2>Rating Chart</h2>';

    // Sort products by price
    products.slice().sort((a, b) => b.price - a.price).forEach(product => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.width = `${product.price * 10}px`;
        bar.style.backgroundColor = 'blue';
        bar.textContent = `${product.name}: $${product.price}`;
        priceChart.appendChild(bar);
    });

    // Sort products by rating
    products.slice().sort((a, b) => b.rating - a.rating).forEach(product => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.width = `${product.rating * 40}px`;
        bar.style.backgroundColor = 'green';
        bar.textContent = `${product.name}: ${product.rating} stars`;
        ratingChart.appendChild(bar);
    });
}

// Function to add a new product
function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const rating = parseFloat(document.getElementById('productRating').value);

    if (name && !isNaN(price) && !isNaN(rating)) {
        products.push({ name, price, rating });
        renderCharts();
    } else {
        alert('Please enter valid product details.');
    }

    // Clear input fields
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productRating').value = '';
}

// Event listeners
document.getElementById('addProduct').addEventListener('click', addProduct);
document.getElementById('sortByPrice').addEventListener('click', () => {
    products.sort((a, b) => b.price - a.price);
    renderCharts();
});
document.getElementById('sortByRating').addEventListener('click', () => {
    products.sort((a, b) => b.rating - a.rating);
    renderCharts();
});
