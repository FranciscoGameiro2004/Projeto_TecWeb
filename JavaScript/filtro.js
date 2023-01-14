filterSelection("all")

btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn3 = document.getElementById("btn3");
btn4 = document.getElementById("btn4");
btn5 = document.getElementById("btn5");


function filterSelection(element) {
  var x, i;
  x = document.getElementsByClassName("produto");
  if (element == "all") 
  {
    element = ""
  }
  for (i = 0; i < x.length; i++) 
  {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(element) > -1) 
    {
        addClass(x[i], "show")
    }
  }
}

function addClass(element, name) {
    var i, lista_1, lista_2;
    lista_1 = element.className.split(" ");
    lista_2 = name.split(" ");
    for (i = 0; i < lista_2.length; i++) 
    {
        if (lista_1.indexOf(lista_2[i]) == -1)
        {
            element.className += " " + lista_2[i]
        }
    }
}

function removeClass(element, name) {
    var i, lista_1, lista_2;
    lista_1 = element.className.split(" ");
    lista_2 = name.split(" ");
    for (i = 0; i < lista_2.length; i++) 
    {
        while (lista_1.indexOf(lista_2[i]) > -1) 
        {
            lista_1.splice(lista_1.indexOf(lista_2[i]), 1)   
        }
    }
    element.className = lista_1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("botoesFiltragem");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) 
{
  btns[i].addEventListener
    (   
        "click", function()
                    {
                        var current = document.getElementsByClassName("btn active");
                        current[0].className = current[0].className.replace(" active", "");
                        this.className += " active";
                    }
    )
}

btn1.addEventListener("click", function() {filterSelection("all")})
btn2.addEventListener("click", function() {filterSelection('colher')})
btn3.addEventListener("click", function() {filterSelection('faca')})
btn4.addEventListener("click", function() {filterSelection('fruits')})
btn5.addEventListener("click", function() {filterSelection('colors')})