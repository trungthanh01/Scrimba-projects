import { menuArray } from "./data.js";

let orderArray = [];

// --- 2. RENDER FUNCTIONS ---
function getMenuHtml(){
    let menuHtml = ``;
    menuArray.forEach(function(item){
        menuHtml += `
            <div class="menu-item">
                <div class="item-emoji">${item.emoji}</div>
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p class="item-ingredients">${item.ingredients.join(', ')}</p>
                    <p class="item-price">$${item.price}</p>
                </div>
                <button class="add-btn" data-add="${item.id}">+</button>
            </div>
        `;
    });
    return menuHtml;
    
}


function getOrderHtml(){
    let orderHtml = ``;
    let totalPrice = 0;
    
    orderArray.forEach(function(item){
        orderHtml += `
            <div class="order-item">
                <p class="order-item-name">${item.name}</p>
                <button class="remove-btn" data-remove="${item.orderId}">remove</button>
                <p class="order-item-price">$${item.price}</p>
            </div>
        `;
        totalPrice += item.price;
    });
    
    document.getElementById('total-price').textContent = `$${totalPrice}`;
    return orderHtml;
}

function renderOrder(){
    if (orderArray.length > 0) {
        document.getElementById('order-section').classList.remove('hidden');
        document.getElementById('order-items-container').innerHTML = getOrderHtml();
    } else {
        document.getElementById('order-section').classList.add('hidden');
    }
}

function renderMenu(){
    document.getElementById('menu').innerHTML = getMenuHtml();
}

// 3.handler function
function handleAddClick(itemId){
    const targetItemObj = menuArray.filter(function(item){
        return item.id == itemId
    })[0];
    const orderItem = {...targetItemObj, orderId: crypto.randomUUID()}
        orderArray.push(orderItem)
        renderOrder();
}   
function handleRemoveClick(orderItemId){
    const targetIndex = orderArray.findIndex(item => item.orderId === orderItemId)
    if (targetIndex > -1){
        orderArray.splice(targetIndex, 1)
    }
    renderOrder();
}
function handleCompleteOrderClick() {
    document.getElementById('payment-modal').classList.remove('hidden');    
}
function handlePayClick(e){
    e.preventDefault()
    const paymentForm = document.getElementById('payment-form')
    const paymentFormData = new FormData(paymentForm)
    const customerName = paymentFormData.get('fullName')

    document.getElementById('payment-modal').classList.add('hidden')
    document.getElementById('order-section').classList.add('hidden')

    const confirmationMessageEl = document.getElementById('confirmation-message')
    confirmationMessageEl.innerHTML=`Thanks, ${customerName}! Your order is on its way!`
    confirmationMessageEl.classList.remove('hidden')

    orderArray = []
    paymentForm.reset()
}

// --- 4. EVENT LISTENERS ---
document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        handleAddClick(e.target.dataset.add)
    }
    else if(e.target.dataset.remove){
        handleRemoveClick(e.target.dataset.remove)
    }
    else if(e.target.id === 'complete-order-btn'){
        handleCompleteOrderClick()
    }
})

document.getElementById('payment-form').addEventListener('submit', function(e){
    handlePayClick(e)
})






renderMenu()