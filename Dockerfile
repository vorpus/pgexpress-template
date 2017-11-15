FROM node:7
RUN mkdir /backend_service
ADD . /backend_service
WORKDIR /backend_service
RUN npm i
EXPOSE 80
CMD ["npm", "start"]
