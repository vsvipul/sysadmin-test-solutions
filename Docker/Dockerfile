FROM httpd:2.4
COPY ./public-html/ /usr/local/apache2/htdocs/
COPY test.sh home/
RUN apt-get update && apt-get install -y curl
CMD ["sh", "home/test.sh"]