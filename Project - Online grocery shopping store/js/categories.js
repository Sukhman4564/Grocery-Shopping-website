function createCategoryCard(category){

	const card = document.createElement('div');
	card.classList.add('box');
	const categorytImage = document.createElement('img');
	categorytImage.src = category.imgUrl;
	
	
	const h3 = document.createElement('h3');
	h3.innerHTML =  category.title;

	const para = document.createElement('p');
	para.innerHTML = category.offer ;
	
	let link = document.createElement('a');
	link.title = "my title text";
	link.classList.add('btn')
	link.setAttribute('href', "#products");
	link.setAttribute('category.id', "#");
	link.innerHTML = 'Shop now';

	card.appendChild(categorytImage);
	card.appendChild(h3);
	card.appendChild(para);

	card.appendChild(link);

	return card;

	
}