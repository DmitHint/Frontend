let notificationCounter = 0;
let intervalId;
function createNotification() {
    const notificationList = document.querySelector('.notification-list');
    const newNotification = document.createElement('p');
    newNotification.classList.add('.notification-item');
    newNotification.textContent = `Уведомление ${notificationCounter + 1}`;
    notificationList.appendChild(newNotification);
    notificationCounter++;
    updateCounter();
    newNotification.addEventListener('click', () => {
        clearInterval(intervalId);
        setTimeout(() => {
            intervalId = setInterval(createNotification, 3000);
        }, 10000);
    });
}

function updateCounter() {
    const counter = document.querySelector('.notification-counter');
    counter.textContent = notificationCounter;
}

intervalId = setInterval(createNotification, 3000);


function createList() {
    const list = document.getElementById('list');

    while (true) {
        let listItemContent = prompt('Давай, вводи сюда чево-нить (❍ᴥ❍ʋ)');

        if (!listItemContent && list.childNodes.length === 0) {
            let noItemsMessage = document.createElement('li');
            noItemsMessage.textContent = "Ты почему ничево не ввёл (ಥ﹏ಥ)";
            list.appendChild(noItemsMessage);
            break;
        } else if (!listItemContent) {
            break;
        }

        let listItem = document.createElement('li');
        listItem.textContent = listItemContent;
        list.appendChild(listItem);

        if (list.childNodes.length === 1 && list.firstChild.textContent === "Ты почему ничево не ввёл((((") {
            list.removeChild(list.firstChild);
        }
    }
}

createList();

function ShowNotification(options) {
    const notification = document.getElementById('notification');
    notification.textContent = options.content;
    notification.classList.add('notification');
    notification.style.display = 'block';

    setTimeout(function () {
        notification.style.display = 'none';
        notification.textContent = '';
        notification.classList.remove('notification');
    }, 2500);
}

setTimeout(function () {
    ShowNotification({ content: 'О чудо, это же УВЕДОМЛЕНИЕ!!!' });
}, 1500);

