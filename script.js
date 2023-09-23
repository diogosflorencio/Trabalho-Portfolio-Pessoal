/*exibindo conteudo sobre mim*/
/* esse código ficou extremamente simples e repetitivo. foi a primeira coisa que veio a mente, logo melhorarei*/

function mostrarSobreMim(){
    ocultarformacao();
    ocultarOcultarPortfolio();
    ocultarOcultarContato();
    return document.getElementById('sobremim').style.display='block';
}
function mostrarFormacao(){
    ocultarSobreMim();
    ocultarOcultarPortfolio();
    ocultarOcultarContato();
    return document.getElementById('formacao').style.display='block';
}
function mostrarPortfolio(){
    ocultarSobreMim();
    ocultarformacao();
    ocultarOcultarContato();
    return document.getElementById('portfolio').style.display='block';
}
function mostrarContato(){
    ocultarSobreMim();
    ocultarformacao();
    ocultarOcultarPortfolio();
    return document.getElementById('contato').style.display='block';
}

/*ocultando conteudos*/
function ocultarSobreMim(){
    return document.getElementById('sobremim').style.display='none';
}
function ocultarformacao(){
    return document.getElementById('formacao').style.display='none';
}
function ocultarOcultarPortfolio(){
    return document.getElementById('portfolio').style.display='none';
}
function ocultarOcultarContato(){
    return document.getElementById('contato').style.display='none';
}

const canvas = document.querySelector(".conteudo-padrao");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);
ctx.fillStyle = "rgb(255, 0, 0, 2)";
ctx.fillRect(50, 50, 100, 150);





