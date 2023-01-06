// var modal = document.getElementsByClassName("modal");

// var modalImage = document.getElementById("myImg1");

// var image = document.getElementsByClassName("myImages");

// var captionText = document.getElementById("caption")

// image.onclick = function() {
//    modal.style.display = "block";
// modalImage.src = this.src;
// captionText.innerHTML = this.alt;
// }


// var span = document.getElementsByClassName ("close") [0];

// span.onclick = function() {
//     modal.style.display = "none";
// }

var modal = document.getElementById("myModal");

var images = document.querySelectorAll(".myImages");

var modalImg = document.getElementById("img1");

var captionText = document.getElementById("caption");

// for (var i = 0; i < images.length; i++) {
//     var img = images[i];


// img.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// }


images.forEach(function(image){
    image.addEventListener("click", function (){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    })
}) ;

var span = document.getElementsByClassName("close")[0];

span.addEventListener("click", function(){
    modal.style.display = "none";
} )