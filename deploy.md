# Deploy

O projeto já está pronto pra rodar em container. Abaixo, os caminhos mais simples
pra colocar no ar com uma **URL pública**.

## Opção A — VPS com Docker (mais direto)

Numa VM (Ubuntu) com Docker instalado:

```bash
git clone <seu-repo> && cd portfolio
docker compose up -d --build
```

Isso sobe PostgreSQL + backend + frontend (nginx). O site fica na porta `8080`
(ajuste pra `80` no `docker-compose.yml` se quiser sem porta na URL) e o nginx já
faz o proxy de `/api` pro backend. Aponte seu domínio pro IP da VM.

> Dica: pra HTTPS, coloque um proxy como Caddy ou Nginx Proxy Manager na frente,
> ou use Traefik. Dá pra fazer numa fase seguinte.

## Opção B — Render / Railway (PaaS, sem servidor pra gerenciar)

1. **Banco:** crie um PostgreSQL gerenciado (o serviço te dá uma `DATABASE_URL`).
2. **Backend:** novo Web Service apontando pra pasta `backend/` (usa o `Dockerfile`).
   - Variável de ambiente `DATABASE_URL` = a do banco (troque `postgresql://` por
     `postgresql+psycopg://`).
3. **Frontend:** novo serviço apontando pra `frontend/` (usa o `Dockerfile` com nginx).
   - Se o front e o back ficarem em domínios diferentes, ajuste o `location /api/`
     do `frontend/nginx.conf` (`proxy_pass`) pra URL pública do backend.

## Variáveis de ambiente (backend)

| Variável       | Exemplo                                                        |
|----------------|---------------------------------------------------------------|
| `DATABASE_URL` | `postgresql+psycopg://usuario:senha@host:5432/portfolio`      |
| `APP_NAME`     | `Portfólio API`                                               |

## Checklist antes de publicar

- Trocar a senha do PostgreSQL (não usar `portfolio/portfolio` em produção).
- Trocar a senha do pgAdmin (ou não expor o pgAdmin em produção).
- Colocar um vídeo real em `frontend/public/imagens/demo-tripbus.mp4` (ou ajustar o seed).
