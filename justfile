dev: 
  npm run dev

build:
  npm run build

preview:
  npm run build && npm run preview

docker-build: 
  docker-compose build

docker-start: 
  docker-compose up
