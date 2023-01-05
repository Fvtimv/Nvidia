var modal = document.getElementById("modal");

var modalImage = document.getElementById("myImg1");

var image = document.getElementById("myImg");

image.onclick = function() {
   modal.style.display = "block";
modalImage.src = this.src;
caption.innerHTML = this.alt;
}

var span = document.getElementsByClassName ("close") [0];

span.onclick = function() {
    modal.style.display = "none";
}