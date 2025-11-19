#!/bin/bash

# Quantum Marketplace Exchange - Test Script
# Run all tests across the project

set -e

echo "🧪 Running Quantum Marketplace Exchange tests..."

# Backend tests
echo "📦 Testing backend..."
cd backend
npm run lint
npm run type-check
npm test
cd ..

# Frontend tests
echo "🎨 Testing frontend..."
cd frontend
npm run lint
npm run type-check
npm test
cd ..

echo "✅ All tests passed!"
