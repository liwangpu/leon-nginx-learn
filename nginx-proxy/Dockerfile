FROM nginx:1.21.4-alpine
WORKDIR /app
COPY nginx-proxy/nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx-proxy/sites-enabled /etc/nginx/sites-enabled