import express from "express";

const app = express();

const usuarios = [];

app.use(express.json());

const usuarioTeste = [{ nome: "JOce", usuario: "joceteste", senha: "123" }];

app.get("/", (r, response) => {
  response.send(usuarioTeste);
});
app.post("/cadastro", (request, response) => {
  const { nome, usuario, senha } = request.body;

  usuarios.push({ nome, usuario, senha });

  return response.send({
    msg: "Parabens Picachu você é o cara mesmo, tudo certo!",
  });
});

app.post("/login", (request, response) => {
  const { usuario, senha } = request.body;

  const data = usuario.find((i) => i.usuario == usuario);

  if (data) {
    if (data.senha == senha) {
      return response.send({ msg: "Entrou com sucesso BB" });
    } else {
      return response.send({ msg: "Algo de Errado nao esta Certo" });
    }
  } else {
    return response.send({ msg: "Tenta de Novo que Voce esta TOdO eRRado" });
  }
});

app.listen(8080, (request, response) => {
  console.log("O servidor esta rodando na porta 8080!");
});
