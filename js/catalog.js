/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

let counter = 0;

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');

  for (let i = 0; i < Product.allProducts.length; i++) {
    const itemOpj = document.createElement('option');
    selectElement.appendChild(itemOpj);
    itemOpj.textContent = Product.allProducts[i].name

    // itemOpj.value = Product.allProducts[i].name // مهم نعرف value لحتى تبين القيم في بالobj ويعمل رندر للقيم
    // console.log(itemOpj)
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault(); // بمنع الريفرسش

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  counter++

  updateCounter();
  updateCartPreview();



}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart

  let items = document.getElementById('items').value;
  let quantitys = document.getElementById('quantity').value;

  let item = {
    product: items,
    quantity: quantitys,
  }
  cart.items.push(item);

}



// TODO: Update the cart count in the header nav with the number of items in the Cart

function updateCounter() {
  
  let itemCount =document.getElementById('itemCount');
  itemCount.textContent = `${counter} `
}


// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  
  let cartContents = document.getElementById('cartContents');;
  // console.log(cart.items)

  let cartOrder = cartContents.appendChild(document.createElement('li'));
  cartOrder.textContent =`Quantity: ${cart.items[counter-1].quantity}  Product: ${cart.items[counter-1].product}`; // need more detals
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
