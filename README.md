# Challenge Rest API

[![Fork in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/17490790-6ae89f23-17a5-43a3-83f0-18c215cc86b8?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D17490790-6ae89f23-17a5-43a3-83f0-18c215cc86b8%26entityType%3Dcollection%26workspaceId%3D8c40179f-ee37-403b-98e9-b929de1f4b76)

## Installation

```bash
$ yarn install
```
## Config

```dotenv
PORT=5000
DB_NAME=chatdb
DB_PASSWORD=password
DB_USERNAME=root
DB_HOST=localhost
DB_PORT=3306
NODE_ENV=development
JWT_SECRET=secret_key
````

```bash
# Setup the development database with docker
$ docker compose up -d
```

## Running the app

```bash
# watch mode
$ yarn run dev
```



# Challenge Client

## Installation

```bash
$ yarn install
```
## Config

```dotenv
# .env.local
VITE_API_BASE_URL=http://localhost:5000/api
````


## Running the app

```bash
# watch mode
$ yarn run dev
```
