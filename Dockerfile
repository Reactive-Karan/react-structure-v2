FROM node:20.3.1 as build
ARG appUrl
ARG wsUrl
WORKDIR /app
COPY . /app
RUN yarn
ENV REACT_APP_URL=$appUrl
ENV WS_URL=$wsUrl
RUN yarn run build

FROM nginx:1.25.1
COPY --from=build /app/dist /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]