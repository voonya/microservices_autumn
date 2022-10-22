FROM node:16.3.0-alpine
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build

## this is stage two , where the app actually runs
FROM node:16.3.0-alpine
WORKDIR /usr
COPY package.json ./
RUN npm install --only=production
COPY --from=0 /usr/build .
RUN npm install pm2 -g

ENV PORT=8080
ENV DATABASE=vlad
ENV DB_USERNAME=vlad
ENV DB_PASSWORD=postgres
ENV DB_HOST=10.106.210.36
ENV DB_PORT=5432
ENV DB_DIALECT=postgres

CMD ["pm2-runtime","main.js"] 