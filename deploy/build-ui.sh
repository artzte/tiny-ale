#!/usr/bin/env bash

./tiny shell:ui ember build --environment production
aws s3 cp ui/dist s3://shiny.tinyale.com --recursive