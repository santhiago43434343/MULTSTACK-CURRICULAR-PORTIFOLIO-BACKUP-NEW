#!/usr/bin/env bash
# Sobe o projeto inteiro (PostgreSQL + backend + frontend + pgAdmin) com um comando.
set -e

echo "🚀 Subindo o portfólio com Docker (build + migrations + seed)..."
docker compose up --build -d

echo ""
echo "✅ No ar:"
echo "   Site:    http://localhost:8090"
echo "   API:     http://localhost:8000/docs"
echo "   pgAdmin: http://localhost:5050  (admin@portfolio.dev / admin)"
echo ""
echo "Ver logs:  docker compose logs -f"
echo "Parar:     docker compose down"
