FROM php:8.2-apache
RUN useradd -m -s /bin/bash agent
RUN apt-get update && apt-get install -y git && apt-get clean && rm -rf /var/lib/apt/lists/*
RUN wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz && tar -xvzf ngrok-v3-stable-linux-amd64.tgz -C /usr/local/bin && rm ngrok-v3-stable-linux-amd64.tgz
USER agent
