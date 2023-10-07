# THE BUILD PHASE
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm i

COPY . .
# The build folder will be /app/build
RUN npm run build

# THE RUN PHASE
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html

# f0079e5b1e4678d9082e5fd