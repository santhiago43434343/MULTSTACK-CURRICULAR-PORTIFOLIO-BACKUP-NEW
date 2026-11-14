#!/usr/bin/env bash
set -e
C="docker compose -f docker-compose.dev.yml"
if command -v python3 >/dev/null 2>&1; then
  echo "🔎 Checando a sintaxe do seed_data.py..."
  if ! python3 -c "import ast; ast.parse(open('backend/app/data/seed_data.py').read())" 2>/tmp/seed_err; then
    echo "❌ Erro de sintaxe no seed_data.py:"; tail -3 /tmp/seed_err
    echo "   👉 Corrija e rode de novo (nada foi alterado)."; exit 1
  fi
  echo "✅ Seed OK"
fi
echo "🧹 Esvaziando a tabela de banners..."
$C exec -T db psql -U portfolio -d portfolio -c "TRUNCATE banners RESTART IDENTITY;"
echo "🌱 Re-semeando (restart backend)..."
$C restart backend
echo "⏳ Esperando o backend subir..."
sleep 4
echo "✅ Banners no banco agora:"
$C exec -T db psql -U portfolio -d portfolio -c "SELECT count(*) FROM banners;"
echo ""
echo "👉 Pronto! Ctrl+Shift+R em http://localhost:4200 (o frontend NEM reinicia)"
