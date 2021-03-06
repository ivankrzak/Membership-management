# Membership Management APP

### Goal

Goal of this APP is to create system for membership and subscription management. Each member of club have to play early membership fee in order to allegeable to activate one of the Subscriptions. We will be keeping track of all the subscriptions member bought for statistics. Each member during registration will get `card with BARCODE` that is unique in Members db model.
Once user is created, has active membership and owns some kind of subscription, worked at the reception will be able to scan members card and based on barcode app will check if he has need to enter gym.
The same process will be applied if member will want to buy new subscription will be prolonging membership.

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
