async function fetchAndRenderWatches() {
    try {
        const response = await fetch('http://localhost:3000/upload');
        const watches = await response.json();

        const watchContainer = document.getElementById('watchContainer');

        watches.forEach(watch => {
            const watchCard = document.createElement('div');
            watchCard.classList.add('watch-card');
            watchCard.innerHTML = `
                <img src="data:image/jpeg;base64,${watch.photo}" alt="Watches Photo" class="watch-image">
                <h3>${watch.title}</h3>
                <p>${watch.description}</p>
                <p>Price: $${watch.price}</p>
                <button class="buy-button" onclick="redirectToCart()">Buy</button>
            `;
            watchContainer.appendChild(watchCard);
        });

        // Add button to navigate back to home page
        const backButton = document.createElement('button');
        backButton.classList.add('back-button');
        backButton.textContent = 'Back to Home';
        backButton.onclick = () => {
            window.location.href = '/src/public/Frontend/index2.html';
        };
        
        // Apply CSS styles for positioning
        backButton.style.position = 'fixed';
        backButton.style.top = '20px';
        backButton.style.right = '20px';
        backButton.style.backgroundColor = '#007bff';
        backButton.style.color = 'white';
        backButton.style.padding = '10px 20px';
        backButton.style.borderRadius = '5px';
        backButton.style.zIndex = '999';

        // Append the button to the body
        document.body.appendChild(backButton);

    } catch (error) {
        console.error('Error fetching watch data:', error);
    }
}

function redirectToCart() {
    window.location.href = '../Cart/cart.html';
}

fetchAndRenderWatches();
