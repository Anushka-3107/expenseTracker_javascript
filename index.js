
const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

expenseForm.addEventListener('submit', function(e){
    e.preventDefault();

    const description = document.getElementById('description').value;
    console.log(description);
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    if(document && category && !isNaN(amount)){
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount}</td>`

        // to add a new child to the table
        expenseList.appendChild(newRow);


        // to reset the form
        expenseForm.reset();
    }
})