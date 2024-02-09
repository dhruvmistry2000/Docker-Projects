FROM ubuntu

RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y nginx zip curl \
#     && echo "daemon off;" >> /etc/nginx/nginx.conf \
    && curl -o /var/www/html/master.zip -L https://codeload.github.com/gabrielecirulli/2048/zip/master \
    && cd /var/www/html/ && unzip master.zip \
    && mv 2048-master/* /var/www/html/ \
    && rm -rf 2048-master master.zip

EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
