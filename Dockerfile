FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY ./ ./

# Install the dependencies and build the project
RUN npm install && npm run build

# Start the server
CMD ["npm", "start"]