#!/bin/bash

echo "🧪 Running Weekly Work Tracker E2E Tests..."
echo "=============================================="

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if Playwright browsers are installed
if [ ! -d "$HOME/Library/Caches/ms-playwright" ]; then
    echo "🌐 Installing Playwright browsers..."
    npx playwright install --with-deps chromium
fi

echo "🚀 Starting test suite..."
echo ""

# Run tests with clear output
npx playwright test --reporter=list

echo ""
echo "✅ Tests completed!"
echo ""
echo "💡 Test Commands:"
echo "  npm run test:e2e          # Run all tests"
echo "  npm run test:e2e:headed   # Run tests with browser visible"
echo "  npm run test:e2e:update   # Update test snapshots"
echo "  npm run test:ci           # Run tests for CI"
