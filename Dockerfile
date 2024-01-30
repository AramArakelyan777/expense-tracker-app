FROM node:lts-alpine3.19 as builder

WORKDIR /opt

COPY . .

ENV PATH /opt/node_modules/.bin:$PATH

RUN yarn

RUN yarn build-storybook --static-dir public

RUN yarn build

FROM nginx:latest

COPY --from=builder /opt/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
