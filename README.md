# 💻 Sobre o projeto

## Requisitos

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

- [x] O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>
<p>- Lista de nomes cadastrada no banco de dados.</p>
<ul>
<li>Joao</li>
<li>Pedro</li>
</ul>

- [x] Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

# ⚙️ Como executar

git clone https://github.com/jckonewalik/node-docker-challenge.git

Na raiz do projeto digite

docker-compose up -d

Abra o navegador no endereço:

- http://localhost:8080 - lista de nomes
- http://localhost:8008?name=Joao - Insere Joao na lista de pessoas e exibe a lista atualizada
