var interval;

$(document).ready(function() {
    //Open the modal choice restaurant
    $('#myModal').show();
    //Close the modal open restaurant when you click on the burger king img
    $('#closeModal').on('click', function()
    {
    $('#myModal').hide();
    $('#headerDebut').css('opacity','1');
    $('#appSection').css('opacity','1');
    $('#claritySection').css('opacity','1');
    $('#appH1').css('opacity','1');
    $('#featuresSection').css('opacity','1');
    $('#footer').css('opacity','1');
    $('#logoTOP').css('opacity','1');
    });

    interval = setInterval(function(){plusDivs(1)}, 5000);
});
// Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";
    clearInterval(interval);
    interval = setInterval(function(){plusDivs(1)}, 5000);
}

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

function afficherImage(id){
    if(id == "carteBK")
    {
        $("#imgToInsert").attr("src","./images/carteBK.jpg");
        $("#myModalImg").css("display", "block");
    } else if (id == 'livraison') {
        $("#imgToInsert").attr("src","./images/livraison.jpg");
        $("#myModalImg").css("display", "block");
    } else if (id == 'fidelite') {
        $("#imgToInsert").attr("src","./images/fidelite.jpg");
        $("#myModalImg").css("display", "block");
    } else if (id == 'satisfaction') {
        $("#imgToInsert").attr("src","./images/satisfaction.jpg");
        $("#myModalImg").css("display", "block");
    }
    $('.close').on('click', function(){
        $("#myModalImg").css("display", "none");
    })
};