FROM ruby:2.6.6

ENV LANG C.UTF-8
ENV RAILS_ENV production

RUN apt-get update -qq
RUN apt-get install -y build-essential \
  && apt-get clean autoclean \
  && apt-get autoremove -y \
  && rm -rf \
    /var/lib/apt \
    /var/lib/dpkg \
    /var/lib/cache \
    /var/lib/log

ENV API_HOME /api
RUN mkdir -p $API_HOME
WORKDIR $API_HOME

COPY Gemfile Gemfile.lock ./
RUN bundle install --without development test

COPY . $API_HOME

EXPOSE ${PORT}

CMD bundle exec rails s -b '0.0.0.0' -p ${PORT}