var num1 = 41;
var num2 = 10;
var suma = num1+num2;
var multiplica = num1*num2;

var titulo = document.getElementById("page-title");
if (titulo != undefined){
	var titulo_nuevo = titulo.innerText + " ("+suma+")";
	document.getElementById("page-title").innerText = titulo_nuevo;
}

// document.write("Suma: "+suma);

/*
if (suma >= 50) {
	alert("Suma: "+suma+", Mult.: "+multiplica);
} else {
	alert("La suma es menor que 50")
}
*/

// Suma: 10, Mult.: 24

/*const paragraphs = document.querySelectorAll('p.hola, h3');

paragraphs.forEach(paragraph => {
  paragraph.classList.add('coloreado');
});*/

var responsive_menu = document.getElementById("responsive-menu");
responsive_menu.addEventListener('click', function(){
	var main_menu = document.getElementById("main-menu");
	main_menu.classList.toggle('active');
});	


// slider

var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    navPosition: "bottom",
    autoplayButtonOutput: false,
    center: true,
    mouseDrag: true,
});




