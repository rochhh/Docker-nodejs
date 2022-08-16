cmd
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v

docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

docker build -t node-app-image .

docker run -v ${pwd}:/app:ro --env-file ./.env -v /app/node_modules -p 3000:4000 -d --name node-app node-app-image

docker ps -a

docker ps 

docker volume ls 

docker volume rm <vol>

docker image ls 

docker image rm <image>
