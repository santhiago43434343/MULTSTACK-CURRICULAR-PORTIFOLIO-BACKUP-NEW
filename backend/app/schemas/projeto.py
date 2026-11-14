from pydantic import BaseModel, ConfigDict, Field


class ProjetoIn(BaseModel):
    """Dados que entram (criar/editar um projeto)."""
    titulo: str
    descricao: str
    midia: str = ""
    tecnologias: list[str] = []
    linkDemo: str = ""
    linkRepo: str = ""


class Projeto(BaseModel):
    """Dados que saem. O banco guarda link_demo/link_repo (snake_case);
    a API devolve linkDemo/linkRepo (camelCase) pro Angular."""
    model_config = ConfigDict(from_attributes=True)

    id: int
    titulo: str
    descricao: str
    midia: str = ""
    tecnologias: list[str] = []
    linkDemo: str = Field(default="", validation_alias="link_demo")
    linkRepo: str = Field(default="", validation_alias="link_repo")
