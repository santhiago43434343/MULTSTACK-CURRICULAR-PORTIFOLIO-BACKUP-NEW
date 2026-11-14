#!/usr/bin/env bash
# ==========================================================
#  Sobe o ambiente de DESENVOLVIMENTO (hot reload no frontend).
#  Para produção, use  ./start.sh
#
#  Rode a partir da raiz do projeto:  ./dev.sh
# ==========================================================
set -e

echo "🔥 Subindo o ambiente de DEV (hot reload)..."
echo ""
echo "   Site (hot reload): http://localhost:4200"
echo "   API (docs):        http://localhost:8000/docs"
echo "   pgAdmin:           http://localhost:5050  (admin@portfolio.dev / admin)"
echo ""
echo "   Obs: na 1ª vez demora um pouco (roda 'npm install' dentro do container)."
echo "   O terminal vai mostrar os logs ao vivo — isso é normal."
echo "   Parar:  Ctrl+C    |    limpar depois:  docker compose -f docker-compose.dev.yml down"
echo ""

docker compose -f docker-compose.dev.yml up
