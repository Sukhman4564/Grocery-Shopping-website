let data = [
  {
    "id": 'p1',
    "title": 'Orange',
    'category': ["c1"],
    'price': '$4.99/- - 8.99/-',
    'imgUrl': './image/product-1.png',

  },
  {
    "id": 'p2',
    "title": 'Onion',
    'category': ["c3"],
    'price': '$4.99/- - 10.99/-',
    'imgUrl': './image/product-2.png',

  },
  {
    "id": 'p3',
    "title": 'Beef',
    'category': ["c4"],
    'price': '$4.99/- - 16.99/-',
    'imgUrl': './image/product-3.png',

  },
  {
    "id": 'p4',
    "title": 'Cabbage',
    'category': ["c3"],
    'price': '$4.99/- - 11.99/-',
    'imgUrl': './image/product-4.png',

  }
  ,
  {
    "id": 'p5',
    "title": 'Potato',
    'category': ["c3"],
    'price': '$4.99/- - 7.99/-',
    'imgUrl': './image/product-5.png',

  },
  {
    "id": 'p6',
    "title": 'Avacado',
    'category': ["c1"],
    'price': '$4.99/- - 7.99/-',
    'imgUrl': './image/product-6.png',

  },
  {
    "id": 'p7',
    "title": 'Carrot',
    'category': ["c3"],
    'price': '$4.99/- - 7.99/-',
    'imgUrl': './image/product-7.png',

  },
  {
    "id": 'p8',
    "title": 'Lemon',
    'category': ["c3"],
    'price': '$4.99/- - 7.99/-',
    'imgUrl': './image/product-8.png',

  },
  {
    "id": 'p9',
    "title": 'Chicken',
    'category': ["c4"],
    'price': '$4.99/- - 7.99/-',
    'imgUrl': './image/product-9.jpg',

  },
  {
    "id": 'p10',
    "title": 'Eggs',
    'category': ["c2"],
    'price': '$4.99/- - 7.99/-',
    'imgUrl': './image/product-10.jpg',

  },
  {
    "id": 'p11',
    "title": 'Milk',
    'category': ["c2"],
    'price': '$4.99/- - 7.99/-',
    'imgUrl': './image/product-11.jpg',

  },
  {
    "id": 'p12',
    "title": 'Butter',
    'category': ["c2"],
    'price': '$4.99/- - 7.99/-',
    'imgUrl': './image/product-12.jpg',

  },
  {
    "id": 'p13',
    "title": 'Cheese',
    'category': ["c2"],
    'price': '$4.99/- - 7.99/-',
    'imgUrl': './image/product-13.jpg',

  },
  {
    "id": 'p14',
    "title": 'Apple',
    'category': ["c1"],
    'price': '$4.99/- - 7.99/-',
    'imgUrl': './image/product-14.jpg',

  },
  {
    "id": 'p15',
    "title": 'Zuchini',
    'category': ["c3"],
    'price': '$4.99/- - 10.99/-',
    'imgUrl': './image/product-15.avif',

  },
  {
    "id": 'p16',
    "title": 'Tomato',
    'category': ["c3"],
    'price': '$4.99/- - 11.99/-',
    'imgUrl': './image/product-16.avif',

  },
  {
    "id": 'p17',
    "title": 'Pomegranate',
    'category': ["c1"],
    'price': '$4.99/- - 12.99/-',
    'imgUrl': './image/product-17.jpg',

  },
  {
    "id": 'p18',
    "title": 'Papaya',
    'category': ["c1"],
    'price': '$4.99/- - 10.99/-',
    'imgUrl': './image/product-18.jpg',

  },
  {
    "id": 'p19',
    "title": 'Guava',
    'category': ["c1"],
    'price': '$4.99/- - 7.99/-',
    'imgUrl': './image/product-19.jpg',

  },
  {
    "id": 'p20',
    "title": 'Yogurt',
    'category': ["c2"],
    'price': '$4.99/- - 13.99/-',
    'imgUrl': './image/product-20.jpg',

  }
]

let category = [
  {
    "id": 'c1',
    "title": 'Fruits',
    'offer': 'Upto 15% Off',
    'imgUrl': './image/cat-2.png',

  },
  {
    "id": 'c2',
    "title": 'Dairy',
    'offer': 'Upto 25% Off',
    'imgUrl': './image/cat-3.png',

  },
  {
    "id": 'c3',
    "title": 'Vegetables',
    'offer': 'Upto 20% Off',
    'imgUrl': './image/cat-1.png',

  },
  {
    "id": 'c4',
    "title": 'Meat',
    'offer': 'Upto 15% Off',
    'imgUrl': './image/cat-4.png',

  }

]



let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
}


window.onscroll = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}
let swiperdata = document.querySelector('#wrapper')
let box = document.querySelector('#d-category');

for (var i = 0; i < category.length; i++) {
  box.appendChild(createCategoryCard(category[i]));
}
for (var i = 0; i < data.length; i++) {
  swiperdata.appendChild(createProductCard(data[i]));
}


var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

