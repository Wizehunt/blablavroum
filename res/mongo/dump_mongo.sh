#!/bin/sh

service mongod restart

while ! nc -z localhost 27017; do sleep 1; # wait for mongod to start

mongodump --db Covoit
