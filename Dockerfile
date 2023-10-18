FROM nginx:stable-perl
COPY ./src /usr/share/nginx/html
# expose port
EXPOSE 4200

