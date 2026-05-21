let ideias = ["Aplicativo de estudos", "Rede social gamer", "Delivery fitness"];

const loginContainer = document.getElementById("login-container");
const appContainer = document.getElementById("app-container");

const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");

const erroLogin = document.getElementById("erro-login");

const novaIdeia = document.getElementById("nova-ideia");

const erroItem = document.getElementById("erro-item");

const lista = document.getElementById("lista");

const btnLogin = document.getElementById("btn-login");

const btnFinal = document.getElementById("btn-final");

const btnInicio = document.getElementById("btn-inicio");

const modal = document.getElementById("modal");

const inputEditar = document.getElementById("input-editar");

const salvarEdicao = document.getElementById("salvar-edicao");

const cancelarEdicao = document.getElementById("cancelar-edicao");

let indiceEditar;

btnLogin.addEventListener("click", fazerLogin);

btnFinal.addEventListener("click", adicionarFinal);

btnInicio.addEventListener("click", adicionarInicio);

salvarEdicao.addEventListener("click", salvarItem);

cancelarEdicao.addEventListener("click", fecharModal);

function fazerLogin() {

  if (usuario.value === "" || senha.value === "") {

    erroLogin.textContent = "Preencha todos os campos.";

    return;
  }

  if (usuario.value === "aluno" && senha.value === "fiap2025") {

    loginContainer.classList.add("hidden");

    appContainer.classList.remove("hidden");

    erroLogin.textContent = "";

  } else {

    erroLogin.textContent = "Usuário ou senha inválidos.";
  }
}

function renderizarLista() {

  lista.innerHTML = "";

  for (let i = 0; i < ideias.length; i++) {

    lista.innerHTML += `
      <li>

        ${ideias[i]}

        <div class="acoes">

          <button onclick="editarItem(${i})">
            Editar
          </button>

          <button onclick="removerItem(${i})">
            Remover
          </button>

        </div>

      </li>
    `;
  }
}

function adicionarFinal() {

  if (novaIdeia.value === "") {

    erroItem.textContent = "Digite uma ideia.";

    return;
  }

  ideias.push(novaIdeia.value);

  novaIdeia.value = "";

  erroItem.textContent = "";

  renderizarLista();
}

function adicionarInicio() {

  if (novaIdeia.value === "") {

    erroItem.textContent = "Digite uma ideia.";

    return;
  }

  let novoArray = [];

  novoArray.push(novaIdeia.value);

  for (let i = 0; i < ideias.length; i++) {

    novoArray.push(ideias[i]);
  }

  ideias = novoArray;

  novaIdeia.value = "";

  erroItem.textContent = "";

  renderizarLista();
}

function removerItem(indice) {

  let novoArray = [];

  for (let i = 0; i < ideias.length; i++) {

    if (i !== indice) {

      novoArray.push(ideias[i]);
    }
  }

  ideias = novoArray;

  renderizarLista();
}

function editarItem(indice) {

  indiceEditar = indice;

  inputEditar.value = ideias[indice];

  modal.classList.remove("hidden");
}

function salvarItem() {

  if (inputEditar.value === "") {
    return;
  }

  ideias[indiceEditar] = inputEditar.value;

  modal.classList.add("hidden");

  renderizarLista();
}

function fecharModal() {

  modal.classList.add("hidden");
}

renderizarLista();