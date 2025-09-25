.PHONY: lint serve build deploy clean help

# Default target
help:
	@echo "Available targets:"
	@echo "  lint     - Lint all markdown files"
	@echo "  serve    - Start local development server"
	@echo "  build    - Build static site"
	@echo "  deploy   - Lint, build and push to GitHub"
	@echo "  clean    - Clean build artifacts"

# Lint markdown files
lint:
	@echo "Linting markdown files..."
	markdownlint . --ignore README.md
	@echo "Linting completed"

# Start development server
serve:
	@echo "Starting MkDocs development server..."
	cd .. && source mkdocs-env/bin/activate && mkdocs serve

# Build static site
build:
	@echo "Building site..."
	cd .. && source mkdocs-env/bin/activate && mkdocs build
	@echo "Build completed"

# Lint and deploy to GitHub
deploy: lint
	@echo "Deploying to GitHub..."
	cd .. && git add -A
	cd .. && git commit -m "Auto-commit from make deploy 🤖" || true
	cd .. && git push github main
	@echo "Deployed successfully"

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	cd .. && rm -rf public/
	@echo "Cleaned"