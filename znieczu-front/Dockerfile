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
RUN rm -rf node_modules/
ENTRYPOINT ["znieczu-front/entrypoint.sh"]

RUN ["chmod", "+x", "znieczu-front/entrypoint.sh"]
