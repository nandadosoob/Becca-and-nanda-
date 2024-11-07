const sim = window.document.getElementById("opcyes")
const nao = window.document.getElementById("opcNo")
const fundo = window.document.getElementById("area")
const resp = window.document.getElementById("textinho")
const img = document.getElementById("imgPergunta");

nao.addEventListener("mouseenter", entrar)
let estado = -1

function entrar(){
    estado++
    if (estado == 0){
        sim.style.transform="translate(+95px)"
        nao.style.transform="translate(130px, -150px)"
    }
    if (estado == 1){
        nao.style.transform="translate(130px, +150px)"
    }
    if (estado == 2){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 3){
        nao.style.transform="translate(-325px, -150px)"
    }
    if (estado == 4){
        nao.style.transform="translate(+135px, +150px)"
    }
    if (estado == 5){
        nao.style.transform="translate(+135px, -150px)"
    }
    if (estado == 6){
        nao.style.transform="translate(-325px, +150px)"
    }
    if (estado == 7){
        nao.style.transform="translate(-325px, -150px)"
        estado = -1
    }
}

sim.addEventListener("click", clicar)

function clicar(){
    resp.innerHTML ="CHOI BEOMGYU É DA BECCA!!!"
    sim.style.transform="translate(0px)"
    nao.style.transform="translate(0px, 0px)"
    img.src = "bomuFotos/bomuheart.jpg"

    resp.style.opacity= 1;
    resp.style.fontSize = "35px";

    setTimeout(function(){
        resp.style.opacity = 0;
      }, 5000 )
    
}

function trocaFotoNao(){
    img.src = "bomuFotos/bomugun.jpg"
}

function trocaFotoSim(){
    img.src = "bomuFotos/bomuyesss.jpg"
}

function fotoPadrao(){
    img.src = "bomuFotos/omgbomu.jpg"
}

sim.addEventListener("mouseover", trocaFotoSim)
sim.addEventListener("mouseout", fotoPadrao)
nao.addEventListener("mouseover", trocaFotoNao)


