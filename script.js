window.onload = function () {
  var x = document.getElementById("vimeo1");
  var y = x.contentDocument;

  var text = y.querySelector("body > script").innerText;

  var inicio = text.indexOf('"progressive"', 0);
  var objeto = text.substring(inicio, text.length);

  var fim = objeto.indexOf('"cdn"', 0);
  objeto = objeto.substring(0, fim);

  var url = '"url":';

  inicio = objeto.indexOf(url, 0);
  objeto = objeto.substring(inicio + url.length, objeto.length - 1);
  var arr = [];
  arr = JSON.parse(localStorage.getItem("url")) || [];
  objeto = objeto.replace(/\"|\\/g, "");
  arr.push(objeto.toString());
  const linkUrl = JSON.stringify(arr, null, 2);
  localStorage.setItem("url", linkUrl);
  if (objeto && linkUrl) {
    alert("ItemCopiado");
  }
};
