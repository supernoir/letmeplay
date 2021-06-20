# Pull base image.
FROM mongo

# Install MongoDB.
RUN \
  apt-get update && \
  apt-get install -y mongodb-org && \
  rm -rf /var/lib/apt/lists/*

RUN \
  echo 'Installing Node' && \
  apt-get update && \
  apt-get install curl && \
  curl -sL https://deb.nodesource.com/setup_12.x | bash && \
  apt-get install -y nodejs && \
  node -v && \
  npm -v 

# Define mountable directories.
VOLUME ["/data/db"]

# Define working directory.
WORKDIR /data

# Define default command.
CMD ["mongod"]

# Expose ports.
#   - 27017: process
#   - 28017: http
EXPOSE 27017
EXPOSE 28017