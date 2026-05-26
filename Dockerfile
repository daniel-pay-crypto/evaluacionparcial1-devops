
# Construcción (Build Stage)
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .


# Y la Producción para optimizar el tamaño
FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=build /app .


EXPOSE 3000
CMD ["npm", "start"]
