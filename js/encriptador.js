



function escribir() {
  var texto = document.querySelector(".texto").value.toLowerCase();
  
  
  return texto
}



function encriptar() {
  texto = escribir();
  patron = /^[a-z0-9\s]*$/;

  if (texto.search(patron) !== -1) {
    let remplazos = /(a|e|i|o|u)/g;
    cifrar = texto.replaceAll(remplazos, function (match) {
      if (match === 'a') return 'ai';
      if (match === 'i') return 'imes';
      if (match === 'e') return 'enter';
      if (match === 'o') return 'ober';
      if (match === 'u') return 'ufat';
      return true;
    });
    document.querySelector(".textoResultado").value = cifrar;
  } else {
    alert("no se admiten caracteres especiales");
    return false;
  }
}



function desencriptar() {
  texto = escribir();
  let remplazos = /(ai|enter|imes|ober|ufat)/g;

  cifrar = texto.replaceAll(remplazos, function (match) {
    if (match === 'ai') return 'a';
    if (match === 'imes') return 'i';
    if (match === 'enter') return 'e';
    if (match === 'ober') return 'o';
    if (match === 'ufat') return 'u';
  });
  
  document.querySelector(".textoResultado").value = cifrar;
 

}




function copiar(botonCopiar) {

  texto = document.querySelector(".textoResultado");
  texto.select();
  navigator.clipboard.writeText(texto.value)
  botonCopiar.preventDefault();

  alert("texto copiado");
}


var botonCopiar = document.querySelector(".copiar").addEventListener("click", copiar);
var botonEncriptar = document.querySelector("#encriptar").addEventListener('click', encriptar,);
var botonDesencriptar = document.querySelector("#desencriptar").addEventListener("click", desencriptar);


function ocultar() {
  document.querySelector(".texto").style.background = " url('../encriptador/image/Gadget02.jpg') no-repeat center";
  document.querySelector(".textoResultado").style.background = background = " url('../encriptador/image/lupa.jpg') no-repeat center";

}
document.querySelector(".texto").addEventListener("input", ocultar);

