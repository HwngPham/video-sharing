# Funny Movies

A web app for sharing YouTube videos, in which:

- User can login (or automatically registered) and logout.

- User can share a video from YouTube (by copy shared link or url on address bar of any YouTube video)


[**Live preview**](https://hwng-renec-video-sharing.surge.sh/)

## Quickstart

```sh
docker compose up
```

## Manual local setup

Please follow `README.md` on each service.


## Technical details

### Frontend

- [React](https://react.dev/) is used as required.

- [Zustand](https://github.com/pmndrs/zustand) is chosen instead of Redux mainly because of how minimal configuration that it is really fast to get up & running.

- [Tailwind](https://tailwindcss.com/) is used for fast prototyping UI.

- [Surge](https://surge.sh/) for deployment.

### Backend

- [Rails](https://rubyonrails.org/) is used for fast prototyping sever, deployed on [DigitalOcean](https://www.digitalocean.com/).

- [Postgres](https://www.postgresql.org/) is hosted as a standalone service on [Render](https://render.com/).

_Note: At the beginning, I also deployed Rails on Render.com. However, there was a limitation of configure the Set-Cookie header, which broke the cookie authentication. At that moment, it was too late to change authentication method to a token-based one, so just I deploy Rails server on DigitalOcean instead and keep database as it was._

## Notes on testing

I only provide enough tests to demonstrate how testing could be done in an actual project. It should be more detail, but the structure will be the same.

### Frontend

- I use [Jest](https://jestjs.io/) for unit testing, which only takes snapshots and test pure functions. This includes store retrives, manipulations and utility functions. In practice, testing components to achieve full coverage does not bring much benefits and behavior testing should be done in end-to-end tests instead.

- I use [Playwright](https://playwright.dev/) for end-to-end testing, which requires an actual server to test agaist and a headless browser availables at local. So please start all services via `docker-compose.yml` and setup Playwright as described in `frontend/README.md` before run the test suite.

### Backend

- I do not use any mocks, since it takes time to setup. So the speed of running test suite can still be improved significantly by mocking external services such as database calls and requests to YouTube.

- sqlite3 is used as a test database so there no need further setup to run test suites, just popullate `.env.yml` and you are good to go.
