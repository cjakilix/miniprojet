$(document).ready(function(){
    
var $slider = $('#slider'), // Ciblage bloc slider
    $img = $('#slider img'), // Ciblage des balise img du slider
    indexImg = $img.length - 1, // Définir l'index
    i = 0, // Initilise le compteur
    $currentImg = $img.eq(i); // Ciblage de l'image courante (index à 0)

/*$img.css('display', 'none'); //
$currentImg.css('display', 'block'); //*/

$img.addClass("fadeout"); // Cacher les images
$currentImg.addClass( "fadein" ); // Afficher seulement image courante



$('.next').click(function(){ 

    i++; // incrémente le compteur

    if( i <= indexImg ){
        $img.addClass("fadeout").removeClass("fadein"); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.addClass("fadein").removeClass("fadeout"); // puis on l'affiche
    }

    else{

        i = indexImg;
    }

});

$('.prev').click(function(){

    i--; // Décrémente le compteur

    if( i >= 0 ){
        $img.addClass("fadeout").removeClass("fadein");
        $currentImg = $img.eq(i);
        $currentImg.addClass("fadein").removeClass("fadeout");
    }
    else{
        i = 0;
    }

});

$('.dot1').click(function() {
    i = 0;
    $img.addClass("fadeout").removeClass("fadein");
    $currentImg = $img.eq(i);
    $currentImg.addClass("fadein").removeClass("fadeout");
    /*$('.dot1').addClass("dotshover");
    $('.dot2').removeClass("dotshover");
    $('.dot3').removeClass("dotshover");
    $('.dot4').removeClass("dotshover");*/

});

$('.dot2').click(function() {
    i = 1;
    $img.addClass("fadeout").removeClass("fadein");
    $currentImg = $img.eq(i);
    $currentImg.addClass("fadein").removeClass("fadeout");
    /*$('.dot2').addClass("dotshover");
    $('.dot1').removeClass("dotshover");
    $('.dot3').removeClass("dotshover");
    $('.dot4').removeClass("dotshover");*/
});

$('.dot3').click(function() {
    i = 2;
    $img.addClass("fadeout").removeClass("fadein");
    $currentImg = $img.eq(i);
    $currentImg.addClass("fadein").removeClass("fadeout");
    /*$('.dot3').addClass("dotshover");
    $('.dot1').removeClass("dotshover");
    $('.dot2').removeClass("dotshover");
    $('.dot4').removeClass("dotshover");*/
});

$('.dot4').click(function() {
    i = 3;
    $img.addClass("fadeout").removeClass("fadein");
    $currentImg = $img.eq(i);
    $currentImg.addClass("fadein").removeClass("fadeout");
    /*$('.dot4').addClass("dotshover");
    $('.dot1').removeClass("dotshover");
    $('.dot2').removeClass("dotshover");
    $('.dot3').removeClass("dotshover");*/
});

function slideImg(){
    setTimeout(function(){
                        
        if(i < indexImg){ // si le compteur est inférieur au dernier index
        i++; // on l'incrémente
    }
    else{ // sinon, on le remet à 0 (première image)
        i = 0;
    }

    $img.addClass("fadeout").removeClass("fadein");

    $currentImg = $img.eq(i);
    $currentImg.addClass("fadein").removeClass("fadeout");

    slideImg();

    }, 7000);
}

slideImg();

});