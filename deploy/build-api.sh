#!/usr/bin/env bash

docker build -t api api
aws --region us-west-2 ecr get-login-password --profile ecs-deployer --region=us-west-2 | docker login --username AWS --password-stdin 921175088277.dkr.ecr.us-west-2.amazonaws.com
docker tag api:latest 921175088277.dkr.ecr.us-west-2.amazonaws.com/tiny-ale/api
docker push 921175088277.dkr.ecr.us-west-2.amazonaws.com/tiny-ale/api
