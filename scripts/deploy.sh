#!/bin/bash

# Quantum Marketplace Exchange - Deployment Script
# Deploy to production environment

set -e

echo "🚀 Deploying Quantum Marketplace Exchange..."

# Check if on main branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" != "main" ]; then
    echo "❌ Not on main branch. Please switch to main before deploying."
    exit 1
fi

# Run tests
echo "🧪 Running tests..."
./scripts/test.sh

# Build Docker images
echo "🐳 Building Docker images..."
docker-compose -f docker-compose.prod.yml build

# Tag images
echo "🏷️  Tagging images..."
VERSION=$(date +%Y%m%d%H%M%S)
docker tag quantum-marketplace-backend:latest quantum-marketplace-backend:$VERSION
docker tag quantum-marketplace-frontend:latest quantum-marketplace-frontend:$VERSION

# Push to registry
echo "📤 Pushing to container registry..."
# docker push quantum-marketplace-backend:$VERSION
# docker push quantum-marketplace-frontend:$VERSION

# Deploy to production
echo "🌐 Deploying to production..."
# kubectl apply -f k8s/
# Or: terraform apply

echo "✅ Deployment complete!"
echo "Version: $VERSION"
