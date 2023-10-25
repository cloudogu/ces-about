FROM nginx:alpine-slim
COPY ./src /usr/share/nginx/html
# expose port
EXPOSE 4200

