FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build TypeScript to JavaScript
RUN npm run build

EXPOSE 5000

# Run the compiled JavaScript
CMD ["node", "dist/index.js"]