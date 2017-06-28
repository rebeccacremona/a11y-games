up:
	docker-compose up -d --build

down:
	docker-compose down

rebuild:
	docker-compose exec jekyll grunt build
