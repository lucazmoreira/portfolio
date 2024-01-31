document.addEventListener("DOMContentLoaded", function () {
  let isScrolling = false;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      if (!isScrolling) {
        isScrolling = true;

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });

          setTimeout(() => {
            isScrolling = false;
          }, 1600);
        }
      }
    });
  });
});

var div = document.getElementById("apresentacao");
var textos = ["Dev Front-End", "UX/UI Designer"];

function escrever(str, done) {
  var char = str.split("").reverse();
  var typer = setInterval(function () {
    if (!char.length) {
      clearInterval(typer);
      return setTimeout(done, 3000);
    }
    var next = char.pop();
    div.innerHTML += next;
  }, 150);
}

function limpar(done) {
  var char = div.innerHTML;
  var nr = char.length;
  var typer = setInterval(function () {
    if (nr-- == 0) {
      clearInterval(typer);
      return done();
    }
    div.innerHTML = char.slice(0, nr);
  }, 100);
}

function rodape(conteudos, el) {
  var atual = -1;
  function prox(cb) {
    if (atual < conteudos.length - 1) atual++;
    else atual = 0;
    var str = conteudos[atual];
    escrever(str, function () {
      limpar(prox);
    });
  }
  prox(prox);
}
rodape(textos);
