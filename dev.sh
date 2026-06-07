#!/usr/bin/env bash
set -e

# Install backend dependencies if needed
if [ ! -d "backend/node_modules" ]; then
  echo "Installing backend dependencies..."
  (cd backend && npm install)
fi

# Install frontend dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing frontend dependencies..."
  npm install
fi

cleanup() {
  echo ""
  echo "Shutting down..."
  kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
  wait $BACKEND_PID $FRONTEND_PID 2>/dev/null
  echo "Done."
}
trap cleanup EXIT INT TERM

# Start backend (Express on port 3001)
(cd backend && npm run dev) &
BACKEND_PID=$!

# Start frontend (Vite on port 5173)
npm run dev &
FRONTEND_PID=$!

echo ""
echo "==================================="
echo "  Frontend: http://localhost:5173"
echo "  Backend:  http://localhost:3001"
echo "==================================="
echo "  Press Ctrl+C to stop both"
echo ""

wait
