# Makefile for Loving the Least Next.js project

# Default target
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make dev     - Start development server"
	@echo "  make lint    - Run ESLint to check code quality"
	@echo "  make build   - Build the project for production"
	@echo "  make start   - Start production server"
	@echo "  make clean   - Clean build artifacts"
	@echo "  make check   - Run full quality checks (lint + build)"

# Development server
.PHONY: dev
dev:
	npm run dev

# Linting
.PHONY: lint
lint:
	npm run lint

# Build for production
.PHONY: build
build:
	npm run build

# Start production server
.PHONY: start
start:
	npm run start

# Clean build artifacts
.PHONY: clean
clean:
	rm -rf .next
	rm -rf dist
	rm -rf node_modules/.cache

# Run full quality checks
.PHONY: check
check: lint build
	@echo "✅ All quality checks passed!"

# Install dependencies
.PHONY: install
install:
	npm install

# Type check only
.PHONY: typecheck
typecheck:
	npx tsc --noEmit
