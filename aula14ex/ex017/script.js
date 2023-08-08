function tabuada() {
let numero = Number(document.getElementById('inum').value)
let res = Number(document.getElementById('res').value)
let ress = Number(document.getElementById('ires').value)
console.log('numero', numero)
console.group('ress', ress)
switch (numero) {
case 0:
  res.innerHTML = numero * ress
  break
}


}

//Entender como multiplicar a let numero