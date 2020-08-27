FROM danlynn/ember-cli

RUN mkdir /ui

WORKDIR /ui

COPY package.json .
COPY package-lock.json .

RUN npm install

# App and live-reload ports
EXPOSE 3001 35730
