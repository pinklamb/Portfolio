import { products } from "./products.js";



export let cart = 
JSON.parse(localStorage.getItem('cart'));

// gives default value if no item in storage 
if (!cart){
    cart = [{ 
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    deliveryOptionsId: '1'
    },

    {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    deliveryOptionsId:'2'
    }
  ];
}

//saves cart so if refreshed it is not deleted
function savetoStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}


//add to cart 
export function addToCart(productId){
  let matchingItem;
  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });

    if (matchingItem) {
      matchingItem.quantity += 1
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
        deliveryOptionsId:'1'
      });
    }

    savetoStorage();
}

//remove from cart

export function removeCartItem(productId){
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;

  savetoStorage();
}