function contar() {
var inicio = document.getElementById('iinicio')
var fim = document.getElementById('ifim')
var passo = document.getElementById('ipasso')
var res = document.querySelector('div#res')

if (inicio.value >= 0 && Number(fim.value) <= inicio) {
window.alert(`Errado`)
}
}