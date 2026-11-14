from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # lê valores de variáveis de ambiente e/ou de um arquivo .env
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    app_name: str = "Portfólio API"

    # Banco de dados.
    # Padrão do código = SQLite (roda sem nada instalado).
    # Em produção/Docker usamos PostgreSQL, definido no .env / docker-compose:
    #   postgresql+psycopg://portfolio:portfolio@db:5432/portfolio
    database_url: str = "sqlite:///./portfolio.db"

    # origens liberadas a chamar a API (CORS) — o Angular em dev
    cors_origins: list[str] = ["http://localhost:4200"]


# instância única usada pelo resto do app
settings = Settings()
