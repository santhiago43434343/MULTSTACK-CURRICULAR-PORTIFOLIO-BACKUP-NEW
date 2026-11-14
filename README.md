# MULTSTACK — Portfólio Curricular

Portfólio full-stack: **Angular + Tailwind v4** no front, **Python (FastAPI + PostgreSQL)** no back.

## Estrutura (monorepo)

```
portfolio/
├── frontend/           Angular 22 + Tailwind v4 (a interface)
├── backend/            FastAPI + SQLAlchemy + Alembic (a API em Python)
├── docker-compose.yml  PostgreSQL + pgAdmin + backend + frontend
└── start.sh            sobe tudo com um comando
```

## Subir tudo com um comando

```bash
./start.sh
```

Sobe **PostgreSQL + backend + frontend + pgAdmin** (build + migrations + seed):

- Site:    http://localhost:8090
- API:     http://localhost:8000/docs
- pgAdmin: http://localhost:5050  (admin@portfolio.dev / admin)

> É o mesmo que `docker compose up --build -d`. Para parar: `docker compose down`.

## Desenvolvimento (sem Docker, com hot-reload)

```bash
# backend
cd backend && python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt && uvicorn app.main:app --reload

# frontend (outro terminal)
cd frontend && npm install && npm start   # http://localhost:4200
```

## Endpoints principais

`GET/POST/PUT/DELETE /api/banners` · `.../api/projetos` · `POST/GET /api/contato`

Deploy: veja `DEPLOY.md`.
