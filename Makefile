install:
	npm ci
brain-games:
	node bin/brain-games
brain-calc:
	node bin/brain-calc
brain-even:
	node bin/brain-even
brain-gcd:
	node bin/brain-gcd
brain-prime:
	node bin/brain-prime
brain-progression:
	node bin/brain-progression
publish:
	npm publish --dry-run
lint:
	npx eslint .
