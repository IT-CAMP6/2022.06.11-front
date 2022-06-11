window.onload = start;

function start() {
	alert("Witam na stronie !!!");
}

function jakasFunkcja(liczba) {
	var tablica = new Array(35);
	
	tablica[0] = 'siema';
	
	if(tablica[0] == 'siema') {
		alert(tablica[0]);
		
		alert(liczba);
		
		var i = 0;
		while(i < 35) {
			console.log(tablica[i]);
			i++;
		}
	}
	
	var odpowiedz = sniezek(callback);
}

function sniezek() {
	//wysylanie do serwera
}

function callback(odpowiedz) {
	console.log(odpowiedz);
}

function zmienHTML() {
	//var htmlElement = '<div>To jest coś wygenerowanego przez JS</div>';
	
	//document.body.innerHTML = htmlElement;
	
	var elemDiv = document.createElement('div');
	elemDiv.innerHTML = "Cos tam !!!";
	document.body.appendChild(elemDiv);
	
	var input = document.getElementById("login");
}