# README

`Frontend` project is a simple SPA which allows users to authenticate and share Youtube videos. This project is impleneted with `React 18.2.0`

## Prerequisites

You can ignore these dependencies if using docker

- node 18.16.0

## Installation

**IMPORTANT** You can choose to setup project manually or just use the provided Dockerfile.

### Manual installation

```sh
npm install
```

### Docker setup

You can build a standalone image for frontend app manually or you can use docker compose to bootstrap everything.

1.  Build docker image by yourself

```sh
docker build -t frontend .
docker run -p 8000:8000 frontend
```

2.  Use docker-compose

```sh
cd .. # docker-compose.yml is located at root dir
docker compose up -d
```

## Server Setup

Please follow instructions in **backend/README.md** or use **docker-compose.yml**

## Running the Application

Start local server

```sh
npm run dev
```

Or run preview of production

```sh
cd ..
npm run build && npm run start
```

## E2E testing

**IMPORTANT** This project use Playwright, which uses headless browser to perform e2e testing.

It is recommended to follow the [official instruction](https://playwright.dev/docs/intro#whats-installed) for installation. This has been tested well on Ubuntu 22.04 and will not work on OpenSUSE.

1. Install dependencies

```sh
npx playwright install
```

2. Start services

```sh
cd ..
docker compose up -d # You can omit '-d' flag to run containers in attached mode in order to observe server logs while tests are running
```

3. Run test agaist running services

```sh
cd frontend
npm run e2e
```

4. View test report

```sh
npx playwright show-report
```
