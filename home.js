let cart = [];//an empty arrary cart to store items added to the cart
     //function for adding items to cart
    function updateCart(productName,productPrice){
        // checking if item is already existing
        const existingItem = cart.find(item => item.name === productName);
        if(existingItem){
            existingItem.quantity+=1;//if item exists increment quantity
        //console.log(`Increase quantity of {productName} to UGX{existingItem.quantity}`);
        }
        else{
            // if doesnt exist add it to cart
            cart.push({name: productName, price: productPrice,quantity: 1});
            console.log(`Added new poduct to cart`);
        }
        // show updated cart
        console.log(cart);
    }

//Get all add to cart buttons on the page
const addToCartButtons = document.querySelectorAll('button');
// adding event listener to each button
addToCartButtons.forEach(button =>{
    button.addEventListener('click', () => {
        //getting product details (like name and price) from the button parent element
        const productElement = button.parentElement;
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = productElement.querySelector('p').textContent;
     // calling update function
     updateCart(productName,productPrice);
    });
});

// SHOW NOW BUTTON
document.getElementById('shopNow').addEventListener('click',function(){
   window.location.href = 'PRODUCT.html';// linking javascript to product page

});

// adding event listener to search button
document.addEventListener('DOMContentLoaded',() => {//waits for html document to be loaded
    const searchButton = document.querySelector('.search-bar button');// gets the element with search bar button from html
    searchButton.addEventListener('click',() =>{//when the button is clicked it runs the code inside
        const searchInput = document.querySelector('.search-bar input');
        const searchQuery = searchInput.Value;//gets what it is typed in the search button
        alert(`Searching for ${searchQuery}...`);//displays a pop menu for what is being searched
    });
});

