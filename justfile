dev: 
  npm run dev

build:
  npm run build

preview:
  npm run build && npm run preview

publish:
  npm run publish

docker-build: 
  docker-compose build

docker-start: 
  docker-compose up
