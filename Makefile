install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-games:
	node bin/brain-even.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .