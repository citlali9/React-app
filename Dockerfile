FROM node:10.19.0-slim

# Create app src/ directory
WORKDIR /usr/src/app/app-citlali

# Copy package.json and install prod dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install PM2
RUN npm install

COPY . .

# App default port
EXPOSE 3000