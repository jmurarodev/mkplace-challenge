# MKPlace - Desafio Backend
A presente API foi desenvolvida como requisito para participação do precesso seletivo à vaga de Desenvolvedor Backend na Mkplace.
A aplicação utiliza o node.js na versão 14.15.0 e as seguintes dependências em produção:
```
"dotenv": "^10.0.0",
"mongoose": "^6.1.4",
"slugify": "^1.6.5"
```

## Endpoints da API
### GET - /product/?name=foo&brand=bar&seller=user
Endpoint responsável por listar todos os restaurantes cadastrados no sistema. Disponibiliza a possibilidade de filtros por nome, marca, e vendedor.

### (GET) - /product/slug
Endpoint responsável por listar os dados de um determinado produto

### (POST) - /product
Endpoint responsável por cadastrar um novo produto.
Exemplo de JSON body para o endpoint /product
```
{
    "name": "Camiseta Preta",
    "brand": "Marca Famosa",
    "seller": "Usuario Teste",
    "price": 200
}
```

## Rodando o Setup
#### Acesse o diretório do projeto
#### Instale as dependencias necessárias utilizando ```npm install```
#### Inicie a aplicação em desenvolvimento utilizando os seguinte comando ```npm run dev```

A aplicação pode ainda ter uma cobertura para testes e um sistema de autenticação para maior segurança.
Me encontro à disposição para responder qualquer dúvida ou esclarecimentos.
