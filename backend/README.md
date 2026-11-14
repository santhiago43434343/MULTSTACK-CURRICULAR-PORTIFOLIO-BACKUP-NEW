# Backend — Portfólio API (FastAPI + PostgreSQL)

API em Python (FastAPI + SQLAlchemy + Alembic) que serve e gerencia os dados do portfólio.

## Rodar com Docker (PostgreSQL) — recomendado

Na raiz do projeto:

```bash
docker compose up --build
```

Sobe **PostgreSQL + pgAdmin + a API**. O container aplica as migrations (`alembic upgrade head`)
e sobe o servidor sozinho.

- API:      http://localhost:8000
- Swagger:  http://localhost:8000/docs
- pgAdmin:  http://localhost:5050  (admin@portfolio.dev / admin)

## Rodar sem Docker

**Com PostgreSQL** (tenha um Postgres rodando e ajuste o `.env`):

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env          # DATABASE_URL apontando pro seu Postgres
alembic upgrade head          # cria as tabelas (migrations)
uvicorn app.main:app --reload
```

**Sem instalar nada (SQLite)** — para testar rápido:

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
DATABASE_URL="sqlite:///./portfolio.db" uvicorn app.main:app --reload
```

Na primeira execução o app cria as tabelas e popula os dados iniciais.

## Endpoints

| Método | Rota                 | O que faz                    |
|--------|----------------------|------------------------------|
| GET    | `/api/banners`       | lista os banners             |
| POST   | `/api/banners`       | cria um banner               |
| GET    | `/api/banners/{id}`  | um banner                    |
| PUT    | `/api/banners/{id}`  | edita um banner              |
| DELETE | `/api/banners/{id}`  | remove um banner             |
| GET    | `/api/projetos`      | lista os projetos            |
| POST   | `/api/projetos`      | cria um projeto              |
| PUT    | `/api/projetos/{id}` | edita um projeto             |
| DELETE | `/api/projetos/{id}` | remove um projeto            |
| POST   | `/api/contato`       | envia uma mensagem (salva)   |
| GET    | `/api/contato`       | lista as mensagens (admin)   |

## Migrations (Alembic)

```bash
alembic revision --autogenerate -m "descrição"   # gera uma migration a partir dos models
alembic upgrade head                              # aplica
alembic downgrade -1                              # desfaz a última
```

## Estrutura

- `app/main.py` — cria o app, CORS, popula o banco e registra as rotas
- `app/core/config.py` — configurações (`.env` / variáveis de ambiente)
- `app/db/base.py` — engine, sessão e `get_db()`
- `app/db/seed.py` + `app/data/seed_data.py` — dados iniciais
- `app/models/models.py` — tabelas (Banner, Projeto, Mensagem)
- `app/schemas/` — modelos Pydantic (entrada e saída da API)
- `app/routers/` — rotas (`banners.py`, `projetos.py`, `contato.py`)
- `migrations/` — Alembic
