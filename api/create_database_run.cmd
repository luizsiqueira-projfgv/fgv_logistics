node ace migration:rollback
docker-compose down
rm -r ./database/docker/
docker-compose up -d
node ace migration:run
