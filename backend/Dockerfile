FROM ruby:3.0.0

RUN apt-get update && apt-get install -y nodejs
WORKDIR /app
COPY Gemfile* .
RUN bundle install

COPY . .
COPY .env.example.yml .env.yml
EXPOSE 3000

CMD ["rails", "s", "-b", "0.0.0.0"]
