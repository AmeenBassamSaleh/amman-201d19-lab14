/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('carts')) || [];
  cart = new Cart(cartItems); // obj في cart لحتى يرجع opj
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();

}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  // let tbody = table.querySelector('tbody');
  // tbody.textContent(' ');

  const table = document.getElementById('cart');
  let tr = table.getElementsByTagName('tr'); // اوتماتيكلي بفهم انه في صفوف و tr
  let tableRow = tr.length

  for (let i = tr.length - 1; i > 0; i--) {
    table.removeChild(tr[i]);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
// function showCart() {

// TODO: Find the table body

// TODO: Iterate over the items in the cart
// TODO: Create a TR
// TODO: Create a TD for the delete link, quantity,  and the item
// TODO: Add the TR to the TBODY and each of the TD's to the TR

// let table = document.getElementById('cart');
// let tr = table.getElementsByTagName('tr'); // اوتماتيكلي بفهم انه في صفوف و tr





// for (let i = 0; i > cart.length; i++) {
//   // let tr = document.createElement('tr');
//   // table.appendChild(tr);

//   // let delData = document.createElement('td')
//   // tr.appendChild(delData);
//   // delData.textContent = 'x';

//   // let quanData = document.createElement('td');
//   // tr.appendChild(quanData);
//   // quanData.textContent = cart.items[i].quantity;

//   // let prudData = document.createElement('td');
//   // tr.appendChild(prudData);
//   // prudData.textContent = cart.items[i].product;

// }

// let table = cartContents.appendChild(document.createElement('tr'));
// table.textContent =`Quantity: ${cart.items[counter-1].quantity}  Product: ${cart.items[counter-1].product}`; // need more detals

// }

function showCart() {
  // TODO: Find the table body
  let table = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    let tr = document.createElement('tr');

    // TODO: Create a TD for the delete link, quantity,  and the item
    let deletedTd = document.createElement('td');
    deletedTd.textContent = 'X';
    deletedTd.id = i;

    let quantityTd = document.createElement('td');
    quantityTd.textContent = cart.items[i].quantity;

    let addedTd = document.createElement('td');
    addedTd.textContent = cart.items[i].product;

    // TODO: Add the TR to the TBODY and each of the TD's to the TR

    table.appendChild(tr);
    tr.appendChild(deletedTd);
    tr.appendChild(quantityTd);
    tr.appendChild(addedTd);
  }
}
// console.log(showCart());



function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

  console.log(event);

  // console.log(cart.items[2]);
  if (event.target.id) {

    let any = parseInt(event.target.id)
    cart.removeItem(any);
    // console.log(cart);

    localStorage.setItem('carts', JSON.stringify(cart));

    const table = document.getElementById('cart');
    let tr = table.getElementsByTagName('tr'); // اوتماتيكلي بفهم انه في صفوف و tr
    table.removeChild(event.path[1]);

    // for (let i = 0; i < tr.length; i++) {
      // tr[i].setAttribute('id',`${i}`)
      
    // }




    // loadCart();
    // clearCart();
    // showCart();
    // renderCart()
    // console.log(cart);
  }


  //  renderCart()
}


// This will initialize the page and draw the cart on screen
renderCart();
