var arrPizza = [];

function addPizza() {
  var Name = document.getElementById("pName").value;
  var Price = document.getElementById("pPrice").value;
  var Category = document.getElementById("sProduct").value;
  var Image = document.getElementById("pDocument").files[0].name;

  var objPizza = new Object();
  objPizza.Name = Name;
  objPizza.Price = Price;
  objPizza.Category = Category;
  objPizza.Image = "../img/" + Image;

  arrPizza.push(objPizza);
  setPizza();
}

function setPizza() {
  var divPizza = document.getElementById("divPizza");
  divPizza.innerHTML = "";

  for (var i = 0; i < arrPizza.length; i++) {
    var div = document.createElement("div");
    var Figura = document.createElement("figure");
    var Imagen = document.createElement("img");
    var Articulo = document.createElement("article");
    var pArea = document.createElement("p");
    var pName = document.createElement("p");
    var pPrice = document.createElement("p");

    Figura.setAttribute("class", "foto4");
    Imagen.setAttribute("src", arrPizza[i].Image);
    Articulo.setAttribute("class", "plato-info");
    pArea.setAttribute("class", "plato-Description");
    pName.setAttribute("class", "plato-Name");
    pPrice.setAttribute("class", "plato-Price");
    div.setAttribute("class", "plato-content")

    pArea.innerHTML = arrPizza[i].Category;
    pPrice.innerHTML = "S/" + arrPizza[i].Price + ".00";
    pName.innerHTML = arrPizza[i].Name;
    

    Figura.appendChild(Imagen);
    Articulo.appendChild(pName);
    Articulo.appendChild(pPrice);
    Articulo.appendChild(pArea);
    div.appendChild(Figura);
    div.appendChild(Articulo);

    divPizza.appendChild(div);
  }
}
