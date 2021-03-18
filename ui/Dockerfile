FROM danlynn/ember-cli

RUN mkdir /ui

WORKDIR /ui

COPY package.json .
COPY package-lock.json .

RUN npm config set "@fortawesome:registry" https://npm.fontawesome.com/
RUN npm config set "//npm.fontawesome.com/:_authToken" 7C9D21B3-C165-4EDF-84DE-3DC28CCC73F4
RUN npm install

# App and live-reload ports
EXPOSE 3001 35730
