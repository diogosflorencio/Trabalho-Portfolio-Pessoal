/* esse código ficou extremamente simples e repetitivo. foi a primeira coisa que veio a mente, logo melhorarei*/
/*exibindo conteudo sobre mim*/
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




