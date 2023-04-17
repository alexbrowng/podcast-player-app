# Bump these on release
VERSION_MAJOR ?= 0
VERSION_MINOR ?= 1
VERSION_PATCH ?= 0

VERSION ?= $(VERSION_MAJOR).$(VERSION_MINOR).$(VERSION_PATCH)

.PHONY: version
version:
	@echo $(VERSION)

.PHONY: bumpversion
bumpversion:
	@npm version --allow-same-version --no-commit-hooks --no-git-tag-version $(VERSION)
	@echo $(VERSION) > VERSION
	@git tag -a v$(VERSION) -m "Version $(VERSION)"

# Setup
.PHONY: install
install:
	@npm install

# Development mode
.PHONY: dev
dev:
	@npm run dev

# Build
.PHONY: build
build:
	@npm run build

# Preview
.PHONY: preview
preview: build
	@npm run preview

# Do quality checks
.PHONY: lint
lint:
	@npm run lint

.PHONY: check-format
check-format:
	@npm run check-format

.PHONY: pre-commit
pre-commit: lint check-format

# Format code
.PHONY: format
format:
	@npm run lint:fix
	@npm run format
