FROM node:18-alpine

WORKDIR /app

# The environment variables for the container
COPY .env .

COPY package*.json ./

# To fix the issue (You installed esbuild for another platform than the one you're currently using)
# Reference: https://github.com/vitejs/vite/issues/2671#issuecomment-829535806
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
