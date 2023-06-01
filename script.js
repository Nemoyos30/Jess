function sim() {
    window.location.href = "https://www.youtube.com/watch?v=CYX7QL2xc38";
}

function desvia(t) {
    var btn = t;
    console.log("opa.desviei...");
    btn.style.position ='absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
}


function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}