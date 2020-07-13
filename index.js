const json = `[
  { "name": "apple white laptop",       "price": 22, "cat": "laptop",     "img":"./images/applelap1.jpg" },
  { "name": "apple black color laptop", "price": 522, "cat": "laptop",    "img":"./images/applelap2.jpg" },
  { "name": "apple laptop",             "price": 821, "cat": "laptop",    "img":"./images/applelap3.jpg" },
  { "name": "earphones black color",    "price": 22, "cat": "earphones",  "img":"./images/blackearphones.jpg" },
  { "name": "earphones",                "price": 522, "cat": "earphones", "img":"./images/earphpones.jpg" },
  { "name": "iphone 10",                "price": 821, "cat": "mobile",    "img":"./images/iphone10.png" },
  { "name": "iphone11",                 "price": 821, "cat": "mobile",    "img":"./images/iphone11.jpg" },
  { "name": "jacket for men",           "price": 821, "cat": "clothes",   "img":"./images/jacket1.jpg" },
  { "name": "black jacket ",            "price": 821, "cat": "clothes",   "img":"./images/jacket2.jpg" },
  { "name": "samsung 9",                "price": 821, "cat": "mobile",    "img":"./images/samsung9.jpg" },
  { "name": "samsung earphones",        "price": 821, "cat": "earphone",  "img":"./images/samsungearphones.webp" },
  { "name": "wireless earphones",       "price": 821, "cat": "earphone",  "img":"./images/wireless.jpg" },
  { "name": "women jackets",            "price": 821, "cat": "clothes",   "img":"./images/womenjacket.jpg" },
  { "name": "valentnies gift",          "price":521,  "cat": "gifts",      "img":"./images/gift.jpg" },
  { "name": "gift",                     "price": 821, "cat": "gifts",     "img":"./images/gift2.jpg" },
  { "name": "regular gifts",            "price": 1021,"cat": "gifts",    "img":"./images/gift 3.jpg" }

]`
let noofItems = 0;
let loginvalue = 0;
let main = document.querySelector('main')
let products = JSON.parse(json)

products.forEach(product => {
  main.innerHTML += `
  <div class="product">
      <img src='${product.img}' class="displayimage"      alt='${product.name}'>
      <h1>${product.name}</h1>
      <span>${product.cat}</span>
      <h4>$${product.price}</h4>
      <button class="cartbutton" onclick="addtocart(this)" >Add To Cart</button>
      
  </div>`


});




// home button display all content
function home() {
  products.forEach(product => {
    main.innerHTML += `
    <div class="product">
        <img src='${product.img}' class="displayimage"      alt='${product.name}'>
        <h1>${product.name}</h1>
        <span>${product.cat}</span>
        <h4>$${product.price}</h4>
        <button class="cartbutton" onclick="addtocart(this)" >Add To Cart</button>
        
    </div>`
  });
}



// filter on buttons
function filter(ele) {
  let products = document.querySelectorAll('.product');

  products.forEach(product => {
    let cat = product.querySelector('span').innerText.toUpperCase();
    if (cat.includes(ele.value.toUpperCase())) {
      product.style.display = 'inline-block'
    } else {
      product.style.display = 'none'
    }
  });
}



// search function
const searchFun = (input) => {
  let userInput = input.value;
  let products = document.querySelectorAll('.product')

  products.forEach(product => {
    let name = product.querySelector('h1').innerText;
    let cat = product.querySelector('span').innerText;
    let price = product.querySelector('h4').innerText;

    if ((name + " " + cat + "" + price).toUpperCase().includes(userInput.toUpperCase())) {
      product.style.display = 'inline-block'
    } else {
      product.style.display = 'none'
    }
  })
}

// display the items in the cart text form

const cart = () => {
  let cartform = document.querySelector(`#cartitems`)

  if (loginvalue == 0) {
    alert("log in to see your cart details");
    // cartform.style.display=`none`
    console.log(loginvalue)
    // break;   
  } else if (loginvalue == 1) {




    if (noofItems > 0) {
      alert("you have" + (noofItems) + " items in your cart");

      var proname = document.querySelector(".product")

      console.log(proname.getElementsByTagName(`h1`.value))

      cartform.innerHTML += `<input type="text"   value=${proname}/>`

      cartform.style.display = "block"

      let carttextname = document.querySelector(`#itemname`)
    } else {
      alert("you have" + (noofItems) + " items in your cart");




      cartform.style.display = "none"
    }
  }
}

// adding items in the cart

const addtocart = (ele) => {
  noofItems += 1;
  if (noofItems == 0) {
    alert("you have " + (noofItems) + " in your cart")
  } else if (noofItems > 0) {
    alert("you have " + (noofItems) + "in your cart")
  }

  let name = ele.parentElement.querySelector('h1').innerText
  let price = ele.parentElement.querySelector('h4').innerText

    console.log(name,price);
    
  document.querySelector('#cartitems').innerHTML += `
    <div class='items'>
      <h1> ${name}   </h1>
      <h2> ${price}</h2>
      <button>Remove</button>
    </div>
  
  
  `




  //  cart(ele);
}

// login form 
function enter() {
  document.getElementById("myform").style.display = "block"
}


function loginform() {
  let username = document.getElementById(`name`).value
  let password = document.getElementById(`password`).value

  if (username == "nikhil" && password == "kapoor") {
    document.getElementById("myform").style.display = "none"
    alert("you are login")
    // console.log("login success")

    var enter = document.getElementById("enter");
    console.log(enter);

    loginvalue = 1;
    cart();
  } else {
    loginvalue = 0;
    alert("you have wrong inputs")
  }
}

var myform = document.getElementById(`myform`)

function closeform() {
  document.getElementById("myform").style.display = "none"
}