

function createProductCard(product){
	const card = document.createElement('div');
	card.classList.add('swiper-slide');
	card.classList.add('box');
	const productImage = document.createElement('img');
	productImage.src = product.imgUrl;
	
	
	const productTitle = document.createElement('h3');
	productTitle.innerHTML =  product.title;


	const productPrice = document.createElement('div');
	productPrice.classList.add('price')
	productPrice.innerHTML = product.price;

	let link = document.createElement('a');
	link.title = "my title text";
	link.classList.add('btn')
	link.setAttribute('href', "#");
	link.innerHTML = 'Add to cart';
     
	card.appendChild(productImage);
	card.appendChild(productTitle);
	card.appendChild(productPrice);
	card.appendChild(link);

	return card;
}