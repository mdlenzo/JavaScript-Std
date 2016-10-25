// JavaScript
// Apenas um arquivo para aprendizado

// Alert
//alert('Olá mundo! <br /> Sou eu mesmo =D'); //Exemplo sem usado o  <br /> como quebra de linha.
//alert('Olá mundo! \n Sou eu novamente'); //Exemplo sendo usado o \n como quebra de linha.

// Confirm
// confirm('Olá mundo, tem certeza que é você mesmo?');

// Prompt
//prompt('Olá mundo, quem seria você?', 'Seu nome'); //Primeiro argumento é uma pergunta ou o que quiser. O segundo argumento vai de value no input

// Document Write *Abre uma nova página em branco com o conteúdo
//window.document.write('Olá mundo! Olha eu aqui novamente.'); //Primeira forma de escrever utilizando window
//document.write('Olá mundo! Olha eu aqui. Está ficando chato em kkk'); //Segunda forma, sendo essa mais simples, sem usar o window
//document.write('<p>Olá mundo ! =D</p>'); //Utilizando tags html

// Function
var executar = function(){
	var caracter = "\
	Octal: ........... \251, \256, \266 \n\
	Latin 1 Hexadecimal: .... \xA9, \xAE, \x86 \n\
	Latin 1 Unicode: ........ \u00A9, \u00AE, \u0086"
	alert(caracter);
}

// Array
//frutas = ['laranja', 'morango', 'banana', 'maçã']
//alert(frutas[0]);

// Objetos
Carro = 
{
	marca: "Ford",
	modelo: "Ká",
}

marca = Carro.marca;
modelo = Carro.modelo

function objetoCarro(){
	alert('Marca: ' + marca);
	alert('Modelo: ' + modelo);
}

// Operação de atribuição
function atribuicao(){
	x = '';
	x += 'Olá ';
	x += 'Mundo!';
	alert(x);
}

// Delete
meuObjeto = {
	x: 'Olá',
	y: 45,
	z: 90
}
// alert(meuObjeto.x);
// delete meuObjeto.x;
//alert(meuObjeto.x); //O .x deixa de existir, pois o delete 'apagou' dos registros.

// in : Destina-se a pesquisar a existência de uma determinada propriedade em um objeto
outObjeto = {
	x: 'Olá',
	y: 45,
	z: 90
}
certo = 'y' in outObjeto; // TRUE
errado = 'a' in outObjeto; // TRUE
//alert(errado);

// DECLARAÇÕES

// Function multiplicar
function multiplica(x, y){
	var result = x * y;
	alert(result);
}

// return
function cont(x, y){
	return x + y;
}
var a = cont(10, 10);
// alert(a);

// Condicionais
var sexo = 0;

if(sexo === 0){
	// alert("É uma pipika de minininica");
}else{
	// alert("É uma pipiko de minininico");
}

// SWITCH

var estadoSul = "PR";

switch (estadoSul){
	case "RS":
	// alert('Rio grande do Sul');
	break;
	case "SC":
	// alert("Santa Catarina");
	break;
	case "PR":
	// alert("Paraná");
	break;
	default:
	// alert("Não é uma sigla");
}

// ESTRUTURA PARA LOOPS

// for
var msg = "";

for (var i = 0; i < 10; i++) {
	if(i == 9){
		/* 
		Apenas para tirar a última vírgula
		que fina no final sem sentido.
		*/
		msg += i;
		break; // Precisa ter o break se não ele incluí mais um 9.
	}
	msg += i + " , ";
}
// alert(msg);

// While
var msgs = "", j = 0;

while(j <= 10){
	if (j == 9) {
		msgs += j;
		break;
	}
	msgs += j + " , ";
	j++
}
// alert(msgs);

// for/in
var Car = {
	marca: "Ford",
	modelo: "Ká",
	ano: "2004"
}
 var ms = "", k;

 for(k in Car){
 	// Busca todas as propriedades do objeto
 	ms += k + " : " + Car[k] + "\n";
 }
 // alert(ms);

 // try / catch / finally

 try{
 	var x = u;
 	var y = x +2;
 	// alert(y);
 } catch(e){
 	 // alert(e.message + "\n" + e.name + "\n" + e.toString());
 }

 // Mensagem erro personalizado
// var a = prompt("Entre um número maior que 0 e menor que 11", "");
try{
	if (a == 0) {
		throw("er1");
	}
	if (a >= 11) {
		throw("er2");
	}
	if (isNaN(parseInt(a))) {
		throw("er3");
	}
} catch(e){
	if (e == "er1") {
		// alert('O número deve ser maior que 0');
	}
	if (e == "er2") {
		// alert('O número deve ser menos que 11');
	}
	if (e == "er3") {
		// alert('Entre somente número maior que 0 e menos que 11');
	}
}

// Objetos
var livro = new Object();

livro.título = "JavaScript";
livro.autor = "Mauricio Samy Silva";
livro.paginas = 432;
livro.preco = "R$ 69,90";
livro.freteSedex = function(ceporigem, cepdestino, peso){
	var valorFrete = "";
	// script de cálculo do frete 
	return valorFrete;
}

// var resultado = livro.autor;

var pares = "", prop;
for(prop in livro){
	pares += prop + "; " + livro[prop] + "\n";
	// O primeiro item 'prop', vai me retornar todos os resultados do objeto
	// anterior ao sinal de igual, sendo assim, virá (título, autor, paginas, preco, etc...).
	// Após isso, para conseguir os valores depois do sinal, é necessário colocar o nome do objeto
	// seguido de '[]', e contendo o item 'prop'.
};
// console.log(pares);

// FUNÇÕES
function ola(){console.log('Bem vindo ao meu site.');}

function olaNovamente(){
	var nomeVisitante = prompt('Por favor digite seu nome', '');
	//A operação abaixo faz com que o nomeVisitante que se encontra entre
	//parenteses, ele verifique se é true ou false.
	//Caso seja true ele vai recuperar o que foi digitado no promp, se não
	//Será mostrado o visitante que está descrito entre aspas simples.
	nomeVisitante = (nomeVisitante) ? nomeVisitante : 'visitante';
	console.log('Bem-vindo ao meu site, ' + nomeVisitante);
}

function calculaRetangulo(b,h){
	//Vai retornar o valor que foi adicionado diretamente no onclick do HTML.
	//Sendo assim, será feito a conta dentro os números colocados, e apresentado
	//conforme foi solicitado também no HTML, através do console.log.
	return b*h;
}

function teste(urlAqui){
	window.location.href= urlAqui;
}