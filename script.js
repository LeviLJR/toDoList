let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
  addCloseButton(myNodelist[i]);
}

let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function addElemento() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("tarefa").value.toUpperCase();
  
  let hoje = new Date();
  let dia = String(hoje.getDate()).padStart(2, '0');
  let mes = String(hoje.getMonth() + 1).padStart(2, '0');
  let ano = hoje.getFullYear();
  let dataFormatada = `${dia}/${mes}/${ano}`;

  let t = document.createTextNode(`${dataFormatada} - ${inputValue}`);
  li.appendChild(t);

  if (inputValue === "") {
    alert("Você precisa descrever a tarefa");
  } else {
    document.getElementById("itemLista").appendChild(li);
  }
  document.getElementById("tarefa").value = "";

  addCloseButton(li);
}

function addCloseButton(li) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };

  let editSpan = document.createElement("SPAN");
  let editTxt = document.createTextNode("\u270E"); // Símbolo de lápis
  editSpan.className = "edit";
  editSpan.appendChild(editTxt);
  li.appendChild(editSpan);

  editSpan.onclick = function() {
    let div = this.parentElement;
    let oldText = div.firstChild.textContent;
    let input = document.createElement("input");
    input.type = "text";
    input.value = oldText.substring(13); // Remove a data do texto
    div.replaceChild(input, div.firstChild);

    input.onblur = function() {
      let novoTexto = `${oldText.substring(0, 13)}${input.value}`; // Mantém a data
      div.replaceChild(document.createTextNode(novoTexto), input);
    }
  }
}

function limparLista() {
  document.getElementById("itemLista").innerHTML = "";
}