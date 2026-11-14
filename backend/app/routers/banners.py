from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.base import get_db
from app.models.models import Banner as BannerModel
from app.schemas.banner import Banner, BannerIn

# todas as rotas deste arquivo começam com /api/banners
router = APIRouter(prefix="/api/banners", tags=["banners"])


def _buscar(db: Session, banner_id: int) -> BannerModel:
    obj = db.get(BannerModel, banner_id)
    if obj is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Banner não encontrado")
    return obj


@router.get("", response_model=list[Banner])
def listar(db: Session = Depends(get_db)):
    """Lista os banners da home, na ordem definida."""
    return db.scalars(
        select(BannerModel).order_by(BannerModel.ordem, BannerModel.id)
    ).all()


@router.get("/{banner_id}", response_model=Banner)
def obter(banner_id: int, db: Session = Depends(get_db)):
    return _buscar(db, banner_id)


@router.post("", response_model=Banner, status_code=status.HTTP_201_CREATED)
def criar(dados: BannerIn, db: Session = Depends(get_db)):
    obj = BannerModel(
        titulo=dados.titulo,
        imagens=dados.imagens,
        links=[l.model_dump() for l in dados.links],
        ordem=dados.ordem,
    )
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj


@router.put("/{banner_id}", response_model=Banner)
def atualizar(banner_id: int, dados: BannerIn, db: Session = Depends(get_db)):
    obj = _buscar(db, banner_id)
    obj.titulo = dados.titulo
    obj.imagens = dados.imagens
    obj.links = [l.model_dump() for l in dados.links]
    obj.ordem = dados.ordem
    db.commit()
    db.refresh(obj)
    return obj


@router.delete("/{banner_id}", status_code=status.HTTP_204_NO_CONTENT)
def remover(banner_id: int, db: Session = Depends(get_db)):
    obj = _buscar(db, banner_id)
    db.delete(obj)
    db.commit()
