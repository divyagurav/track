const myForm = document.querySelector('#my-form');
const amountInput = document.getElementById('amount');
const descriptionInput = document.getElementById('description');
const categoryInput = document.getElementById('category');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    const amount = amountInput.Value;
    const description = descriptionInput.value;
    const category = categoryInput.value;
    const obj = {
        amount,
        description,
        category
    };
    localStorage.setItem(obj.description, JSON.stringify(obj));
    display(obj);
}
//myForm.addEventListener('submit', display);
function display(obj) {
    const userList = document.querySelector('#users');
    const li = document.createElement('li');

    li.appendChild(document.createTextNode('Choose Expenseamount : ' + amountInput.Value + ' ' + 'Choose description : ' + descriptionInput.value + 'Choose a category : ' + categoryInput.value));

    var deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.className = 'btn btn-danger'

    var editBtn = document.createElement('input');

    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.className = 'btn btn-success';


    deleteBtn.addEventListener('click', onclick);
    editBtn.addEventListener('click', edit);
    function onclick(e) {
        e.preventDefault();
        localStorage.removeItem(obj.description);
        userList.removeChild(li);
    }
    function edit(e) {
        e.preventDefault();
        localStorage.removeItem(obj.description);
        //userList.removeChild(li);
        document.getElementById('amount').value = obj.amount;
        document.getElementById('description').value = obj.description;
        document.getElementById('category').value = obj.category;

    }
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    userList.appendChild(li);
}