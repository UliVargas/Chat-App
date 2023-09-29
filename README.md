# Challenge Rest API

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
