FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma
COPY .env ./

RUN npx prisma generate
RUN npx prisma db push

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "dev"]
