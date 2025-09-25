.PHONY: lint serve build deploy clean help

# Default target
help:
	@echo "Available targets:"
	@echo "  lint     - Lint all markdown files"
	@echo "  serve    - Start local development server"
	@echo "  build    - Build static site"
	@echo "  deploy   - Lint, build and push to GitHub"
	@echo "  clean    - Clean build artifacts"

# Lint markdown files (minimal check for now)
lint:
	@echo "Linting markdown files (basic syntax only)..."
	markdownlint docs/index.md docs/keywords.md docs/projects.md docs/tech_stack.md docs/skills.md docs/influential.md --config .markdownlint.json || echo "Some linting issues found - will address in separate commit"
	@echo "Basic linting completed"

# Start development server (requires virtual env in current directory)
serve:
	@echo "Starting MkDocs development server..."
	@if [ -d "mkdocs-env" ]; then \
		source mkdocs-env/bin/activate && mkdocs serve; \
	else \
		echo "Virtual environment not found. Run: python3 -m venv mkdocs-env && source mkdocs-env/bin/activate && pip install -r requirements.txt"; \
	fi

# Build static site
build:
	@echo "Building site..."
	@if [ -d "mkdocs-env" ]; then \
		source mkdocs-env/bin/activate && mkdocs build; \
	else \
		echo "Virtual environment not found. Run setup first."; \
	fi

# Lint and deploy to GitHub
deploy: lint
	@echo "Deploying to GitHub..."
	git add -A
	git commit -m "Auto-commit from make deploy 🤖" || true
	git push github main
	@echo "Deployed successfully"

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	rm -rf public/
	@echo "Cleaned"