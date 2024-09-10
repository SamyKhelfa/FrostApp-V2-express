FROM node:20.9.0-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npx prisma generate

RUN npm run build

FROM node:20.9.0-alpine AS development

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

EXPOSE 5050

CMD ["npm", "run", "dev"]
