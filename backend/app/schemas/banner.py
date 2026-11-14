from pydantic import BaseModel, ConfigDict


class Link(BaseModel):
    label: str
    url: str


class BannerIn(BaseModel):
    """Dados que entram (criar/editar um banner)."""
    titulo: str
    imagens: list[str] = []   # cada item: imagem (.png/.jpg/.webp/.gif) OU vídeo (.mp4/.webm)
    links: list[Link] = []
    ordem: int = 0


class Banner(BaseModel):
    """Dados que saem (o que a API devolve)."""
    model_config = ConfigDict(from_attributes=True)

    id: int
    titulo: str
    imagens: list[str]
    links: list[Link] = []
