const express = require("express");

const app = express();

app.get("/alunos", (request, response)=>{

    const fitro = request.query.filtro;
    console.log(filtro);


    const alunos = [
        {nome:"jocemar"},
        {nome : "luiz"},
        {nome: "bastiao"},
        {nome: "peregunda"}
    ];
    response.send(alunos);
});

app.listen(8080, ()=> {
    console.log("O servidor esta rodando na porta 8080")
});

