# Use a Node.js base image with Bun
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb first for caching
COPY package*.json ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the backend
EXPOSE 3000

# Start the server using Bun
CMD ["bun", "src/index.ts"]
