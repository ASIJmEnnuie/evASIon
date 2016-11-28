FROM ruby:latest
MAINTAINER thibault.theologien@insa-rouen.fr
VOLUME /root/project
WORKDIR /root
COPY ./startup.sh /root/startup.sh
RUN apt-get update
RUN apt-get install nodejs npm -y
RUN npm install -g n
RUN npm install npm@latest -g
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN n stable
RUN gem install sass
RUN gem install sass-json-vars
RUN npm install --global gulp-cli
CMD bash startup.sh
