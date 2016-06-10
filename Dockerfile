FROM node:6

COPY package.json /ls-ui/ui/uefa/package.json
WORKDIR /ls-ui/ui/uefa/
RUN npm install

COPY src/ /ls-ui/ui/uefa/src
COPY public/ /ls-ui/ui/uefa/public

RUN npm run prod

RUN mv /ls-ui/ui/uefa/public /tmp/uefa
RUN rm -rf /ls-ui/ui/uefa/
RUN mv /tmp/uefa /ls-ui/ui/

VOLUME /ls-ui/ui/uefa

CMD ["echo", "'ls-ui file volume mounted over /ls-ui/'"]
