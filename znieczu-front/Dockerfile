# copy project files and folders to the current working directory (i.e. 'app' folder)
FROM nginx:1.15.8
RUN apt-get update
# Install Node 10 and NPM
RUN apt-get install -y curl gnupg gnupg2
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
RUN node -v
RUN npm -v
# Create serpe-front folder
RUN mkdir /znieczu-front
ADD . /znieczu-front/
WORKDIR /znieczu-front

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn
RUN yarn --version

RUN rm -rf node_modules/
RUN yarn
RUN yarn build


