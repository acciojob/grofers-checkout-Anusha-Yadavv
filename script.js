const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices=document.querySelectorAll(".item .price");
	let totalPrice=0;
	prices.forEach((price)=>{
		totalPrice+=parseInt(prices.innerText);
	})
	let tableElement=document.getElementById("itemsTable");
	let newRow=tableElement.insertRow(-1);
	let cell=newRow.insertCell(0);
	cell.innerText=totalPrice;
  
};

getSumBtn.addEventListener("click", getSum);

