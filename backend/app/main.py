from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.db.base import Base, SessionLocal, engine
from app.db.seed import popular_banco
from app.routers import banners, contato, projetos


@asynccontextmanager
async def lifespan(app: FastAPI):
    # ao subir: garante as tabelas e popula o banco (se estiver vazio).
    # (para schema versionado em produção, use o Alembic — veja o README.)
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        popular_banco(db)
    finally:
        db.close()
    yield


app = FastAPI(title=settings.app_name, lifespan=lifespan)

# libera o Angular a chamar a API (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# registra as rotas
app.include_router(banners.router)   # /api/banners   (CRUD)
app.include_router(projetos.router)  # /api/projetos  (CRUD)
app.include_router(contato.router)   # /api/contato   (enviar/listar)


@app.get("/api/health", tags=["health"])
def health():
    """Checagem rápida de que a API está no ar."""
    return {"status": "ok"}
