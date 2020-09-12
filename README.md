# TinyALE

This is an API server meant to provide the foundation of a V2 of TinySIS.

TinyALE (once TinySIS) is a feature-rich application that was developed around 2008 to serve the needs of the [Nova Project](http://novaknows.com/), a public high school in Seattle. TinySIS is still in active use today, despite its dated implementation.

TinyALE provides status tracking features for staff members in this unique educational community, based on Washington State [ALE (Alternative Learning Experience)](http://www.k12.wa.us/ALD/AlternativeLearning) regulations.

TinyALE is a Rails 2 api server running with MySQL. An EmberJS client provides the website.

This is a monorepo encompassing the server and client stacks. The stack can be brought up locally using a Docker-Compose config. There is a helper script, ./tiny, that provides useful management commands for the stack.

## Prerequisites

To run using the docker setup (recommended), you need to install docker and docker-compose.

## General workflow

The ./tiny shell script offers various choices:

    ./tiny

*Note:* You will need to obtain credentials to access the S3 buckets where various app secrets files are stored.
To do this, obtain an AWS credentials file from the project owner.

Then run:

    ./tiny getSecrets
    ./tiny build
    ./tiny initDb

Confirm the successful setup by visiting:

    http://localhost:3000/up

If that tests out alright, visit the app by going to:

    http://localhost:3001

## Tests etc:

tiny <command>

Commands:
---------
getSecrets | generally one-time S3 download of any dev secrets files - requires AWS profile and access key
build      | applies docker-compose to start the API stack
initDb     | sets up the development database; will delete the existing data if it exists
server     | starts the development server
shell:api  | opens a bash shell on the Rails API container
shell:ui   | opens a bash shell on the EmberJS client container
log        | tail the production log
reset      | deletes the docker images for the API and DB
test:api   | runs test suite for API
test:ui    | runs test suite for UI

## Config organization and editing

Set env `RAILS_MASTER_KEY` to the contents of the `api/config/master.key` file downloaded from S3. This is actually
done for the Docker Compose stack via the `.env` file in the root of the project (also downloaded via `./tiny getSecrets`.

To edit/view the credentials file, open a shell on the container using `./tiny shell:api` and then run:

    EDITOR="vim" rails credentials:edit

There is a `credentials-template.yml` file located in `api/config` that outlines the necessary information for this
credentials file.

To summarize, the following files are required by the API/Compose stack. All should be available via the 
`getSecrets` command outlined in the previous section.

        .env
        api/config/master.key
        api/config/credentials.yml.enc

## Running the server natively

To run the system on your local machine, you must first install the necessary gems and MYSQL support, init the database,
and then run the server.

    bundle install
    rake db:create
    rake db:migrate
    rake db:seed
    rails s

## Running the client natively

    npm install
    npm start

## Running tests

For the server

    rake db:test:prepare
    bundle exec rspec

Running only some tests (filter by name)

    bundle exec rspec --example "Statuses"
    
For the client

    npm test
    npm run lint
