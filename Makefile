.PHONY: help install serve build lint clean

help:
	@echo "Available targets:"
	@echo "  install  - Install the 11ty build"
	@echo "  serve    - Start the local development server on port 5174"
	@echo "  build    - Build the site into public/, with its search index"
	@echo "  lint     - Lint the key markdown pages"
	@echo "  clean    - Remove the built site"
	@echo "Pushing to main deploys through GitHub Actions."

install:
	npm install

serve: install
	npm run dev

build: install
	npm run build

lint:
	npx --yes markdownlint-cli docs/index.md docs/keywords.md docs/projects.md docs/tech_stack.md docs/skills.md docs/influential.md --config .markdownlint.json

clean:
	rm -rf public/
