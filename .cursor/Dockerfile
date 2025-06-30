FROM php:8.2-apache
RUN useradd -m -s /bin/bash agent
RUN apt-get update && apt-get install -y git && apt-get clean && rm -rf /var/lib/apt/lists/*

USER agent
