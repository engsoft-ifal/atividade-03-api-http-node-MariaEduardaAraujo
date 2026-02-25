[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/u-wWtmFV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=22850125&assignment_repo_type=AssignmentRepo)
# atividade-03-api-http-node

---

ATIVIDADE 03 — API HTTP COM NODE.JS (INDIVIDUAL)

Disciplina: Programação Web 2
Modalidade: Individual
Entrega: Via GitHub Classroom
Peso: Conforme plano da disciplina

---

1. CONTEXTO

Você deverá implementar uma API HTTP utilizando apenas o módulo nativo http do Node.js.

Não é permitido utilizar Express.

O sistema deverá permitir:

* Verificar se o serviço está ativo
* Listar registros
* Buscar registro por ID
* Criar novo registro

Os dados deverão ser armazenados em memória (array).

---

2. REGRAS

* Não utilizar Express
* Não utilizar banco de dados
* Utilizar ECMAScript Modules (import e export)
* O servidor deve rodar na porta 3000
* O arquivo principal deve ser: src/server.js
* Deve utilizar biblioteca para parsing de JSON no body
* O código deve ser escrito integralmente por você

---

3. IDENTIFICAÇÃO DO ALUNO (OBRIGATÓRIO)

Edite esta seção antes de iniciar.

Nome completo: Maria Eduarda de Araújo Silva

Matrícula: 2023007122

Variação calculada: 2


Cálculo da variação: Último dígito da matrícula % 4

Exemplo:
Se matrícula termina com 7: 7 % 4 = 3

---

4. VARIAÇÕES

A variação depende do último dígito da sua matrícula.

**Variação 0**
Recurso: /atendimentos
Campos obrigatórios:

* aluno
* assunto

**Variação 1**
Recurso: /chamados
Campos obrigatórios:

* solicitante
* descricao
* prioridade

**Variação 2**
Recurso: /protocolos
Campos obrigatórios:

* nome
* tipo
* data

**Variação 3**
Recurso: /requerimentos
Campos obrigatórios:

* estudante
* categoria
* observacao

---

5. ENDPOINTS OBRIGATÓRIOS

GET /health:
Retornar JSON indicando que o serviço está ativo.

GET /seu-recurso:
Retornar lista completa.

GET /seu-recurso/:id:
Retornar item específico por ID.
Se não existir:

* Status 404
* JSON com mensagem de erro

POST /seu-recurso

Deve:

* Ler JSON do body
* Validar campos obrigatórios
* Criar ID incremental
* Armazenar no array
* Retornar status 201
* Retornar objeto criado

Erros obrigatórios:

* JSON inválido → 400
* Campo obrigatório ausente → 422

---

6. HISTÓRICO DE COMMITS

Mínimo de 5 commits.

Mensagens devem ser descritivas.

Exemplo:

feat: implementa rota health

feat: adiciona POST

fix: corrige validação de campos

refactor: organiza lógica

---

7. AVALIAÇÃO

A avaliação considerará:

* Funcionamento correto da API
* Uso adequado de códigos HTTP
* Tratamento de erros
* Histórico de commits
* Organização do código

---
