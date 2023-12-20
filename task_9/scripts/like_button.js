var likeCount = 12;
var drawingEnabled = false;

function toggleLike() {
    var likeButton = document.getElementById('likeButton');
    var heartIcon = document.getElementById('heartIcon');

    likeButton.classList.toggle('liked');
    heartIcon.src = likeButton.classList.contains('liked') ? '../source/heart_filled.png' : '../source/heart_outline.png';

    likeCount = likeButton.classList.contains('liked') ? likeCount + 1 : likeCount - 1;
    updateLikeCount();
    drawingEnabled = !drawingEnabled;
    var hearts = document.querySelectorAll('span');
    hearts.forEach(function (heart) {
        heart.remove();
    });
}

function updateLikeCount() {
    var likeCountElement = document.getElementById('likeCount');
    likeCountElement.textContent = likeCount;
}

document.addEventListener("mousemove", function(e){
    if (drawingEnabled) {
        var body = document.querySelector('body');
        var heart = document.createElement('span');
        var x = e.offsetX;
        var y = e.offsetY;
        heart.style.left = x + "px"
        heart.style.top = y + "px"
        var size = Math.random() * 100;

        heart.style.width = 20 + size + "px";
        heart.style.height = 20 + size + "px";
        body.appendChild(heart);
    }
})