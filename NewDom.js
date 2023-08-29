
var pizzaList=document.querySelector('.pizza');
console.log(pizzaList.textContent)
//pizzaList.textContent=${pizzaList.textContent } ;

pizzaList.insertAdjacentText("beforeend",'🍕')

var pic=document.querySelector('.nice');
pic.classList.add('vicky');
pic.classList.remove('vicky');
console.log(pic.classList)
