#!/usr/bin/env bash

./tiny ui:shell ember build --environment production
aws s3 cp ui/dist s3://shiny.tinyale.com --recursive