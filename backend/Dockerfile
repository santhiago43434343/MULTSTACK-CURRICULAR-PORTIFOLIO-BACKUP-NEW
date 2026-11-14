FROM python:3.12-slim

WORKDIR /app

# instala dependências primeiro (aproveita cache do Docker)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copia o código
COPY . .

EXPOSE 8000

# aplica as migrations e sobe a API
CMD ["sh", "-c", "alembic upgrade head && uvicorn app.main:app --host 0.0.0.0 --port 8000"]
