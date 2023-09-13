#!/bin/bash

DEPLOY_SERVER=$DEPLOY_SERVER
DEPLOY_USERNAME=$DEPLOY_USERNAME
SERVER_FOLDER=$SERVER_FOLDER

# Building React output
npm install -g yarn
yarn install
yarn build

echo "Deploying to ${DEPLOY_SERVER}"
scp -r build/ le@${DEPLOY_SERVER}:/var/www/html/${SERVER_FOLDER}/

echo "Finished copying the build files"