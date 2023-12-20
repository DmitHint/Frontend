let notificationCounter = 0;
let intervalId;

function createNotification() {
    const notificationList = document.querySelector('.notification-list');
    const newNotification = document.createElement('p');
    newNotification.classList.add('.notification-item');
    newNotification.textContent = "Уведомление " + notificationCounter;
    notificationList.appendChild(newNotification);
    notificationCounter++;
    updateCounter();
    newNotification.addEventListener('click', () => {
        notificationList.removeChild(newNotification);
        notificationCounter--;
    });
}

function updateCounter() {
    const counter = document.querySelector('.notification-counter');
    counter.textContent = notificationCounter;
}

intervalId = setInterval(createNotification, 3000);


function ShowNotification(options) {
    setTimeout(function () {
        const notification = document.getElementById('notification');
        notification.textContent = options.content;
        notification.classList.add('notification');
        notification.style.display = 'block';
    }, 2000);

    setTimeout(function () {
        notification.style.display = 'none';
        notification.textContent = '';
        notification.classList.remove('notification');
    }, 5000);
}

ShowNotification({ content: 'Рады видеть вас снова' });