const pessoa = {
nome: "vine",
idade: 20,
curso: "barbeiro",
disciplinas: ["corta cabelo", "fazer penteado", "manuziar maquinas", "mecher com navalhas e pentes"]
};

for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
  }