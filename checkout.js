document.getElementById("add1").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
document.getElementById("add2").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
document.getElementById("add3").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add4").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add5").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add6").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add7").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add8").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add9").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add10").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add11").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add12").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add13").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add14").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add15").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add16").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add17").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add18").addEventListener("click", (e) => {
    addToCartClicked(e);
    fetch('http://localhost:4500/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    cart: [
      {
        titleItem: document.getElementById(e.srcElement.id + "-title").innerText,
        priceItem: document.getElementById(e.srcElement.id + "-price").innerText,
        imgsrc: document.getElementById(e.srcElement.id + "-image").src,
        total: document.getElementById('totalPrice').innerText
      }
    ]
  })
});
  });
  document.getElementById("add19").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add20").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add21").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
document.getElementById("add22").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
document.getElementById("add23").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add24").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add25").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add26").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add27").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add28").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add29").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add30").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add31").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add32").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add33").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add34").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add35").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add36").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add37").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add38").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add39").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add40").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add41").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add42").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add43").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add44").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add45").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add46").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add47").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add48").addEventListener("click", (e) => {
    addToCartClicked(e);
  });

  document.getElementById("add49").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add50").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add51").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add52").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add53").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add54").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add55").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add56").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add57").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add58").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add59").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add60").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add61").addEventListener("click", (e) => {
    addToCartClicked(e);

  });
  document.getElementById("add62").addEventListener("click", (e) => {
    addToCartClicked(e);
  });
  document.getElementById("add63").addEventListener("click", (e) => {
    addToCartClicked(e);
  });

  if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
  
  function ready() {
    var removeCartItemButtons = document.getElementsByClassName("btn-danger");
    for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i];
      button.addEventListener("click", removeCartItem);
    }
  
    var quantityInputs = document.getElementsByClassName("cart-quantity-input");
    for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
    }
  
    var addToCartButtons = document.getElementsByClassName("shop-item-button");
    for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i];
      button.addEventListener("click", addToCartClicked);
    }
  
    document
      .getElementsByClassName("btn-purchase")[0]
      .addEventListener("click", purchaseClicked);
  }
  
  function purchaseClicked() {
    var cartItems = document.getElementsByClassName("cart-items")[0];
    while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
  }
  
  function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  }
  
  function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateCartTotal();
  }
  
  function addToCartClicked(event) {  
    console.log(event.srcElement.id);
    var button = event.target;
    var title = document.getElementById(event.srcElement.id + "-title").innerText;
    var price = document.getElementById(event.srcElement.id + "-price").innerText;
    var imageSrc = document.getElementById(event.srcElement.id + "-image").src;
    console.log(title);
    console.log(price);
    console.log(imageSrc);
    addItemToCart(title, price, imageSrc);
    updateCartTotal(title, price, imageSrc);
  }
  
  function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
        alert("This item is already added to the cart");
        return;
      }
    }
    var cartRowContents = `
          <div class="cart-item cart-column">
              <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
              <span class="cart-item-title">${title}</span>
          </div>
          <span class="cart-price cart-column">${price}</span>
          <div class="cart-quantity cart-column">
              <input class="cart-quantity-input" id="quantityInp" type="number" value="1">
              <button class="btn btn-danger" type="button">REMOVE</button>
          </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow
      .getElementsByClassName("btn-danger")[0]
      .addEventListener("click", removeCartItem);
    cartRow
      .getElementsByClassName("cart-quantity-input")[0]
      .addEventListener("change", quantityChanged);
  
  }
  
  function updateCartTotal(title, price, imageSrc) {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i];
      var priceElement = cartRow.getElementsByClassName("cart-price")[0];
      var quantityElement = cartRow.getElementsByClassName(
        "cart-quantity-input"
      )[0];
      var price = parseFloat(priceElement.innerText.replace("£", ""));
      var quantity = quantityElement.value;
      total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("cart-total-price")[0].innerText =
      "£" + total;
      console.log(localStorage.getItem("email"))
  }
