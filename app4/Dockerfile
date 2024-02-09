# Use the official httpd image from Docker Hub
FROM httpd:latest

WORKDIR /usr/local/apache2/htdocs
# Copy the index.html file from your local directory to the container's Apache document root
COPY . . 

# Expose port 80 to allow external access
EXPOSE 80
