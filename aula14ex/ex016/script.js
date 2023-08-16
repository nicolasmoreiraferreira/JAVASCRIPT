function contar() {
  var inicio = document.getElementById("iinicio").value;
  var fim = document.getElementById("ifim").value;
  var passo = document.getElementById("ipasso").value;
  var res = document.querySelector("div#res");
  let c = Number(inicio);
  console.log("c", c);
  console.log("inicio", inicio);
  /*if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
    res.innerHTML = `Impossível contar`
  }*/
  if (Number(inicio) >= 0 && Number(fim) <= Number(inicio)) {
    window.alert(`Errado`);
  }
  console.log("inicio", inicio);
  if (inicio == "") {
    res.innerHTML = `Impossivel contar`;
    return;
  }
  res.innerHTML = `Contando: <br>`;
  if (c < Number(fim)) {
    for (c; c < Number(fim); c = c + Number(passo)) {
      console.log("c", c);
      console.log("passo", passo);
      res.innerHTML += `${c} \u{1F449}`;
    }
  } else {
    for (c; c < Number(fim); c = c - Number(passo))
      res.innerHTML += `${c} \u{1F449}`;
  }
  res.innerHTML += `\u{1F3C1}`;
}

//Pegar valor da var +

//
