FROM node:18-alpine

WORKDIR /app

# The environment variables for the container
COPY .env .

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "dev" ]
