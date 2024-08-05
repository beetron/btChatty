# Required Node
FROM node:22-bullseye

# Set the working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json .
COPY frontend/package*.json ./frontend/

# Install frontend/backend dependencies
RUN npm install
RUN npm install --prefix frontend

# Copy remaining files and build frontend
COPY . .
RUN npm run build

# Open port
EXPOSE 5000

# Run server
CMD ["npm", "run", "start"]
