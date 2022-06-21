# Membership Management APP

This project is built with `yarn`.

_If you don't have `yarn` installed, [go here](https://yarnpkg.com/getting-started/install)._

### Tech Stack

`Prisma`
`Apollo Client`
`GraphQL`
`GraphQL Codegen`
`Chakra UI`

### Setup

Run `yarn` from root directory to install packages.

### Running the project

1. Copy `.env.example` to `.env` filling variables in all modules as needed
2. Inside `root folder` run `docker-compose up` or `docker-compose up -d` to start the containers in detached mode (`docker ps` to check if containers are running)
3. Run migrations with `yarn prisma migrate dev`
4. Now run `yarn dev` to start the Next.js server at http://localhost:3000
5. In the same folder run `yarn prisma studio` this will create database GUI at http://localhost:5555
6. In the same folder run `yarn db:seed` to add seed data to the database

### Installing a new package from root

1. go to **root folder**
2. run `yarn add <package name>`

### Running package scripts

Just use `yarn run <script name>` (or - shorter - `yarn <script name>`) instead of `npm run <script name>`
ages/create-next-app).
