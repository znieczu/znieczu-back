all: deploy

deploy:
    docker-compose -f docker-compose.ci.yml up --build -d

up:
    docker-compose -f docker-compose.ci.yml up -d

stop:
    docker-compose -f docker-compose.ci.yml down

clean:
    docker-compose -f docker-compose.ci.yml down --v
