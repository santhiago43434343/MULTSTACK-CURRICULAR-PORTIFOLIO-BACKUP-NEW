from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.data.seed_data import BANNERS, PROJETOS
from app.models.models import Banner, Projeto


def popular_banco(db: Session) -> None:
    """Insere os dados iniciais só se as tabelas estiverem vazias."""
    if db.scalar(select(func.count()).select_from(Banner)) == 0:
        db.add_all(Banner(**b) for b in BANNERS)

    if db.scalar(select(func.count()).select_from(Projeto)) == 0:
        db.add_all(Projeto(**p) for p in PROJETOS)

    db.commit()
