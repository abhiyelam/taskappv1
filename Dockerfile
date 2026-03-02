# Use Node image
FROM node:18

# Create app directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining project files
COPY . .

# Expose Angular port
EXPOSE 4200

# Start Angular server
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
