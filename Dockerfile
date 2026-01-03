# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (using npm ci for faster/cleaner builds)
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:stable-alpine

# Copy the build output from the builder stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config as a template
COPY nginx.conf /etc/nginx/conf.d/config.template

# Default port to 80 if not provided
ENV PORT=80

# Use a shell to substitute the port in the config template and start nginx
CMD ["/bin/sh", "-c", "envsubst '${PORT}' < /etc/nginx/conf.d/config.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
