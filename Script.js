$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});
    console.log("opa, desviei");



function geraPosicao(min, max) {

    return Math.random() * (max - min) + "%";

}

function criaDecoracao(simbolo) {

    let decoracao = document.createElement("div");

    decoracao.innerHTML = simbolo;

    decoracao.classList.add("decoracao");

    decoracao.style.top = geraPosicao(0, 90);

    decoracao.style.left = geraPosicao(0, 90);

    document.body.appendChild(decoracao);

    setTimeout(() => {

        decoracao.remove();

    }, 3000);

}

