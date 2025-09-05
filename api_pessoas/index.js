import express from "express";

const app = express();

app.use(express.json());

const pessoas = [];
var countID = 0;

app.get("/", (request, response) => {
    return response.send(pessoas);
});

app.post("/cadastro", (request, response) => {
    const nome = request.body.nome;
    const telefone = request.body.telefone;

    pessoas.push({
        id: countID++,
        nome,
        telefone
    });

    return response.send({ nome, telefone });
});

app.put("/atualizar/:id", (request, response)=>{
    const { id } = request.params;
    const { nome, telefone } = request.body;

    const pessoaIndex = pessoas.findIndex((i) => i.id == id);

    if(pessoaIndex <= -1){
        return response.send({ msg: "O codigo a pessoa não existe!"});
    }

    pessoas[pessoaIndex].nome = nome;
    pessoas[pessoaIndex].telefone = telefone;

    return response.send({ nome, telefone});
});

app.delete("/deletar/:id", (request, response)=>{
    const { id } = request.params;

    const pessoaIndex = pessoas.findIndex((i) => i.id == id);
    if(pessoaIndex <= -1){
        return response.send({msg: "O código a pessoa esta invalido"});
    }else{
        pessoas.splice(pessoaIndex,1);
    }
    return response.send({msg: "Apagado com sucesso"});
});

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});

// http://localhost:8080