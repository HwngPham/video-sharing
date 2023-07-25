# README

`Backend` project is a simple RESTful API which provides a cookie-based authentication and a video resource. This project is implemented with `Rails 7.0.6`

## Prerequisites

You can ignore these dependencies if using docker

- ruby 3.0.0
- sqlite3
- posgresql

## Installation

**IMPORTANT** You can choose to setup project manually or just use the provided Dockerfile.

### Manual installation

```sh
bundle install
cp .env.example.yml .env.yml
```

### Docker setup

You can build a standalone image for server app and setup a database manually or you can use docker compose to bootstrap both.

1. Build docker image by yourself

```sh
docker build -t backend .
docker run -p 3000:3000 backend
```

2.  Use docker-compose

```sh
cd .. # docker-compose.yml is located at root dir
docker compose up -d
```

## Database Setup

### Manual setup

Start your postgresql server, edit environment variables with your local credentials and run migrations.

1.  Specify database credentials in `.env.yml`

2.  Run migrations

```sh
rails db:migrate
```

### Docker setup

1.  Move to `docker-compose.yml` dir

```sh
cd ..
```

2.  Start containers

```sh
docker compose up -d
```

3.  Run migrations against Rails container

```sh
cd ..
docker compose exec web bundle exec rails db:migrate
```

_Note: you may need re-start the containers_

## Running the Application

Start local server

```sh
rails s
```

Or start with docker

```sh
cd ..
docker compose up -d
```

## Usage

After list available endpoints, you could use Postman to make a request to the server.

```sh
rails routes
```

To test the application

```sh
rspec
```

To terminate a running server

```sh
CTRL + C # if you are binding a running process to a opened terminal
docker compose down # if you run server in background
```
