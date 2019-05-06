FROM nginx

# # Add the Nginx configuration file
ADD ./config/nginx/conf.d/local.conf /etc/nginx/conf.d

RUN mkdir /znieczu-front
COPY ./znieczu-front /znieczu-front

#RUN cd znieczu-front && bash start_dev.sh
# Copy over static assets from the client application
COPY ./znieczu-front/dist /usr/share/nginx/html