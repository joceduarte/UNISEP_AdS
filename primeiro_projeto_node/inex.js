var nome = "jocemar"; 
var  salario = 150.0;
var status = true; 

const pessoas = [];

pessoas.push("Guilherme");
pessoas.push("Bruna");
pessoas.push("Gabriel");

var aluno = { 
    nome : "Guilherme",
    RA: "123567",
    email: "guilherme.pires@gmail.com "
}

aluno.telefone = "55999708388";

console.log("nome:", nome ); 
console.log("salario", salario);
console.log("status: ", status);
console.log("pessoas: ", pessoas);
console.log("Total pessoas: ",pessoas.length);
console.log("Aluno", aluno);

for (var i = 0; i<= pessoas.length; i++){
    console.log(pessoas[i]);

}

pessoas.forEach(i=>{
    console.log(i)
});