let contadorMesas =1;
let selectMesa = null;

function mesas(section) {
    let p = section.querySelector("p");

    if (!p) {
        p = document.createElement("p");
        section.appendChild(p);
    }
    p.textContent = "Mesa Livre";

    // if (p.textContent === "Mesa Ocupada") {
    // p.textContent = "Mesa Livre";
    // } else {
    // p.textContent = "Mesa Ocupada";
    // }
            //ou assim a baixo
    // p.textContent =
    //     p.textContent === "Mesa Ocupada"
    //         ? "Mesa Livre"
    //         : "Mesa Ocupada";

            
}

function adicionarMesa() {
    
    contadorMesas++;

    const container = document.getElementById("mesas");

    const novaMesa = document.createElement("section");
    novaMesa.className = "tablemanager";
    novaMesa.onclick = function () {
        mesas(this);
        abrirMesa(this);
    };

    novaMesa.innerHTML = `<h2>Mesa ${contadorMesas}</h2>`;

    container.appendChild(novaMesa);
}


function abrirMesa(section) {
    mesaSelecionada = section;
    const painel = document.getElementById("painel");

    painel.innerHTML = `
        <button class="fechar" onclick="fecharPainel()">×</button>

        <h2>${section.querySelector("h2").textContent}</h2>
        <p>Status: Livre</p>

        <button>Adicionar Pedido</button>
        <button onclick=  "fecharConta()" >Fechar Conta</button>
    `;

    painel.style.display = "block";
}

function fecharPainel() {
    document.getElementById("painel").style.display = "none";
}

function fecharConta() {
    if (mesaSelecionada) {
        mesaSelecionada.remove(); // remove a mesa do HTML
        fecharPainel();
    }
}
function fecharPainel() {
    document.getElementById("painel").style.display = "none";
    mesaSelecionada = null;
}