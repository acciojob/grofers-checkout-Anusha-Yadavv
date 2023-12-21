const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.price');

    // Initialize total price
    let totalPrice = 0;

    // Loop through prices and sum them up
    prices.forEach(price => {
      totalPrice += parseFloat(price.textContent);
    });

    // Create a new row for the total price
	const table = document.getElementById('itemsTable');
        const newRow = table.insertRow(-1); // -1 appends the row at the end
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);

        cell1.textContent = 'Total Price';
        cell2.textContent = 'RS ' + totalPrice.toFixed(2);
   
  
};

getSumBtn.addEventListener("click", getSum);

