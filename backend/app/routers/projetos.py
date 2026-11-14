from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.base import get_db
from app.models.models import Projeto as ProjetoModel
from app.schemas.projeto import Projeto, ProjetoIn

# todas as rotas deste arquivo começam com /api/projetos
router = APIRouter(prefix="/api/projetos", tags=["projetos"])


def _buscar(db: Session, projeto_id: int) -> ProjetoModel:
    obj = db.get(ProjetoModel, projeto_id)
    if obj is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Projeto não encontrado")
    return obj


def _campos(dados: ProjetoIn) -> dict:
    # converte o camelCase da API pro snake_case do banco
    return dict(
        titulo=dados.titulo,
        descricao=dados.descricao,
        midia=dados.midia,
        tecnologias=dados.tecnologias,
        link_demo=dados.linkDemo,
        link_repo=dados.linkRepo,
    )


@router.get("", response_model=list[Projeto])
def listar(db: Session = Depends(get_db)):
    return db.scalars(select(ProjetoModel).order_by(ProjetoModel.id)).all()


@router.get("/{projeto_id}", response_model=Projeto)
def obter(projeto_id: int, db: Session = Depends(get_db)):
    return _buscar(db, projeto_id)


@router.post("", response_model=Projeto, status_code=status.HTTP_201_CREATED)
def criar(dados: ProjetoIn, db: Session = Depends(get_db)):
    obj = ProjetoModel(**_campos(dados))
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj


@router.put("/{projeto_id}", response_model=Projeto)
def atualizar(projeto_id: int, dados: ProjetoIn, db: Session = Depends(get_db)):
    obj = _buscar(db, projeto_id)
    for campo, valor in _campos(dados).items():
        setattr(obj, campo, valor)
    db.commit()
    db.refresh(obj)
    return obj


@router.delete("/{projeto_id}", status_code=status.HTTP_204_NO_CONTENT)
def remover(projeto_id: int, db: Session = Depends(get_db)):
    obj = _buscar(db, projeto_id)
    db.delete(obj)
    db.commit()
