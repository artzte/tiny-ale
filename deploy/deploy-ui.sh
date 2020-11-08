#!/usr/bin/env bash

aws s3 cp ui/dist s3://shiny.tinyale.com --recursive
