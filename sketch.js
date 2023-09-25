
function setup() {

createCanvas(400, 400);

}

function draw() {

background("white");

fill("black");

textSize(32);

textAlign(CENTER, CENTER);

let maximo = width;

let centro = width / 2;

let minimo = 0;

let palavra_1 = "Ricardo";

let palavra_2 = "projecto";

let qtd_1 = map(mouseX, centro, maximo, 0, palavra_1.length);

let qtd_2 = map(mouseY, minimo, maximo, 0, palavra_2.length);

let parcial_1 = palavra_1.substring(0, qtd_1);

let parcial_2 = palavra_2.substring(0, qtd_2);

text(parcial_1, 300, 100);

text(parcial_2, 300, 350);

}
