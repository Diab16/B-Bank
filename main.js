var arr = [
    { name: "Abdelghany", email: "Abdelghany@email.com", money: 4500 },
    { name: "Farah", email: "Farah@email.com", money: 7000 },
    { name: "Islam", email: "Islam@email.com", money: 3400 },
    { name: "Shehab", email: "Shehab@email.com", money: 4000 },
    { name: "Hammad", email: "Hammad@email.com", money: 6300 },
    { name: "Magdy", email: "Magdy@email.com", money: 6100 },
    { name: "Mazen", email: "Mazen@email.com", money: 5600 },
    { name: "Mohab", email: "Mohab@email.com", money: 3500 },
    { name: "Hussien", email: "Hussien@email.com", money: 2500 },
    { name: "Aly", email: "Aly@email.com", money: 6000 }
]

var customerTbody = document.getElementById('customer-tbody');

function renderTable() {
    customerTbody.innerHTML = '';

    for (let index = 0; index < arr.length; index++) {
        var customer = arr[index];
        customerTbody.innerHTML += `
            <tr class="table-light">
                <td scope="row">${index + 1}</td>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>
                    <p>${customer.money}</p>
                </td>
                <td>
                    <button class="btn btn-danger" onclick="deleteCustomer(${index})">delete</button>
                </td>
            </tr>
        `;
    }
}

function sendMoney() {
    var sendMoneyForm = document.getElementById('send-money-form');
    const nameField = sendMoneyForm.querySelector("input[name='email']");
    const amountField = sendMoneyForm.querySelector("input[name='amount']");
    
    const email = nameField.value + "@email.com";
    const amount = Number(amountField.value)

    if (email && amount) {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (element.email == email) {
                element.money += amount;
                renderTable();
                break;
            }
        }
    }
}

function deleteCustomer(index) {
    arr.splice(index, 1);
    renderTable();
}

renderTable();