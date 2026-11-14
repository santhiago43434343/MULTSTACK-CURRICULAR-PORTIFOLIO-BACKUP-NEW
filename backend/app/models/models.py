from datetime import datetime

from sqlalchemy import DateTime, Integer, String, Text, JSON, func
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Banner(Base):
    """Um card de banner da home (um grupo de tecnologias)."""
    __tablename__ = "banners"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    titulo: Mapped[str] = mapped_column(String(120))
    # listas guardadas como JSON (funciona em SQLite e PostgreSQL):
    imagens: Mapped[list] = mapped_column(JSON, default=list)  # caminhos (imagem ou vídeo)
    links: Mapped[list] = mapped_column(JSON, default=list)    # [{label, url}, ...]
    ordem: Mapped[int] = mapped_column(Integer, default=0)     # ordem de exibição


class Projeto(Base):
    """Um projeto exibido na página de Projetos."""
    __tablename__ = "projetos"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    titulo: Mapped[str] = mapped_column(String(120))
    descricao: Mapped[str] = mapped_column(Text)
    midia: Mapped[str] = mapped_column(String(255), default="")  # clipe/gif da prévia
    tecnologias: Mapped[list] = mapped_column(JSON, default=list)
    link_demo: Mapped[str] = mapped_column(String(255), default="")
    link_repo: Mapped[str] = mapped_column(String(255), default="")


class Mensagem(Base):
    """Mensagem enviada pelo formulário de contato."""
    __tablename__ = "mensagens"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    nome: Mapped[str] = mapped_column(String(120))
    email: Mapped[str] = mapped_column(String(160))
    mensagem: Mapped[str] = mapped_column(Text)
    criado_em: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
