document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart!');
    });
});

    
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    // Add a click event listener to the hamburger menu
    hamburger.addEventListener('click', () => {
        // Toggle the "active" class on the menu to show/hide it
        menu.classList.toggle('active');
    });


