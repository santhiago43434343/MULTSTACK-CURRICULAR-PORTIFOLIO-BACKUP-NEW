from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker

from app.core.config import settings


class Base(DeclarativeBase):
    """Classe-base de todos os modelos (tabelas)."""
    pass


# O check_same_thread só é necessário no SQLite.
connect_args = (
    {"check_same_thread": False}
    if settings.database_url.startswith("sqlite")
    else {}
)

engine = create_engine(settings.database_url, connect_args=connect_args)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)


def get_db():
    """Abre uma sessão do banco por requisição e fecha no fim."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
