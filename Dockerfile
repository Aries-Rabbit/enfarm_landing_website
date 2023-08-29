# Sử dụng node:latest image làm base image
FROM node:latest

# Đặt thư mục làm thư mục làm việc trong container
WORKDIR /app

# Copy package.json và yarn.lock vào thư mục làm việc
COPY package.json yarn.lock ./

# Cài đặt các gói phụ thuộc
RUN yarn install

# Copy tất cả các file trong thư mục hiện tại vào thư mục làm việc
COPY . .

# Build ứng dụng React
RUN yarn build

# Chạy ứng dụng React trong môi trường production
CMD ["yarn", "start"]
