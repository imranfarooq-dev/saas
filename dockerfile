# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build TypeScript
RUN yarn build

# Expose port (default for NestJS)
EXPOSE 3000

# Environment variables are expected to be passed in via docker-compose
CMD ["node", "dist/main.js"]
