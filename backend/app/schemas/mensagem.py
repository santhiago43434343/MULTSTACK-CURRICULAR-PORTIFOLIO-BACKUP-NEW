from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr


class MensagemIn(BaseModel):
    """Dados que entram pelo formulário de contato."""
    nome: str
    email: EmailStr
    mensagem: str


class Mensagem(BaseModel):
    """Dados que saem (mensagem já salva)."""
    model_config = ConfigDict(from_attributes=True)

    id: int
    nome: str
    email: EmailStr
    mensagem: str
    criado_em: datetime
