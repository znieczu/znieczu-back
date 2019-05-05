#!/bin/bash
# Build app
yarn
yarn build
# Copy html & js files to nginx html
cd /usr/share/nginx/html/
cp -r /znieczu-front/dist/. /usr/share/nginx/html/
ls -l
nginx -g 'daemon off;'
