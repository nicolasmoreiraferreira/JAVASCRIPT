function contar() {
var inicio = document.getElementById('iinicio').value
var fim = document.getElementById('ifim').value
var passo = document.getElementById('ipasso').value
var res = document.querySelector('div#res')
let c = Number(inicio)
console.log('c', c)
console.log('inicio', inicio)
if (Number(inicio) >= 0 && Number(fim) <= Number(inicio)) {
  window.alert(`Errado`)
  }
  console.log('inicio', inicio)
  if (inicio == '') {
  res.innerHTML = `Impossivel contar`
  return
}
  res.innerHTML = `Contando: <br>`
  
 for(c ; c < Number(fim) ; c= c+Number(passo))  {
  console.log('c', c)
  console.log('passo', passo)
  res.innerHTML += `${c} `
}
}

//Pegar valor da var +

//
