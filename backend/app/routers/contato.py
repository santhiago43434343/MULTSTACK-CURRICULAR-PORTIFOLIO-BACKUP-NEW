from fastapi import APIRouter, Depends, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.base import get_db
from app.models.models import Mensagem as MensagemModel
from app.schemas.mensagem import Mensagem, MensagemIn

# todas as rotas deste arquivo começam com /api/contato
router = APIRouter(prefix="/api/contato", tags=["contato"])


@router.post("", response_model=Mensagem, status_code=status.HTTP_201_CREATED)
def enviar(dados: MensagemIn, db: Session = Depends(get_db)):
    """Recebe uma mensagem do formulário de contato e salva no banco."""
    obj = MensagemModel(
        nome=dados.nome,
        email=str(dados.email),
        mensagem=dados.mensagem,
    )
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj


@router.get("", response_model=list[Mensagem])
def listar(db: Session = Depends(get_db)):
    """Lista as mensagens recebidas (uso administrativo)."""
    return db.scalars(
        select(MensagemModel).order_by(MensagemModel.criado_em.desc())
    ).all()
