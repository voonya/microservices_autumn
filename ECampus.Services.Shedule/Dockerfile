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
COPY prisma ./prisma
RUN npm install --only=production
RUN npm run db:generate
COPY --from=0 /usr/build .
RUN npm install pm2 -g

CMD ["pm2-runtime","main.js"] 