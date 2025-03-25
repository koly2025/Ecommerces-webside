// JavaScript: Add to Cart Functionality

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count in navbar
function updateCartCount() {
    document.getElementById('cartCount').innerText = cart.length;
}

// Function to add product to cart
function addToCart(event) {
    let button = event.target;
    let product = {
        name: button.dataset.name,
        price: parseFloat(button.dataset.price),
        quantity: 1,
        image: button.parentElement.parentElement.querySelector('img').src,
    };
    
    let existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Add event listeners to all 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Update cart count on page load
updateCartCount();

// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });
  
  var filterBtns = $('.filter-button-group').find('button');
  function resetFilterBtns(){
    filterBtns.each(function(){
      $(this).removeClass('active-filter-btn');
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    let subscribeBtn = document.getElementById("subscribe");

    subscribeBtn.addEventListener("click", function () {
        let emailInput = document.getElementById("email");
        let email = emailInput.value.trim();

        if (email === "") {
            alert("❌ Please enter a valid email address!");
        } else if (!validateEmail(email)) {
            alert("❌ Invalid email format! Example: example@gmail.com");
        } else {
            alert("✅ Subscribe Successfully!");
            emailInput.value = ""; // Clear the input
        }
    });

    // Email validation function
    function validateEmail(email) {
        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
