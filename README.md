A modular **NestJS** backend for a SaaS platform using **Prisma**, **PostgreSQL**, **Redis**, and JWT-based authentication. Supports **user management**, **admin roles**, and **role-based access control**.

---

## Features

- **User Management**
  - Create, read, update, delete users
  - Pagination for listing users
  - Redis caching for user queries
- **Authentication & Authorization**
  - JWT-based authentication
  - Refresh tokens
  - Password hashing
  - Role-based guards (`user` and `admin`)
- **Admin Management**
  - Admin role access for sensitive operations
  - Middleware and guards for authorization
- **Database**
  - PostgreSQL with **Prisma ORM**
  - User-Course relationship
- **Caching**
  - Redis integration for improved performance
- **Dockerized**
  - Docker Compose for Postgres and Redis

---

## Folder Structure

src/
├─ auth/
│ ├─ auth.controller.ts
│ ├─ auth.service.ts
│ ├─ auth.module.ts
│ ├─ guards/
│ │ └─ roles.guard.ts
│ ├─ middleware/
│ │ └─ jwt.middleware.ts
│ └─ dto/
│ ├─ login.dto.ts
│ └─ refresh-token.dto.ts
├─ users/
│ ├─ users.controller.ts
│ ├─ users.service.ts
│ ├─ users.module.ts
│ └─ dto/
│ ├─ create-user.dto.ts
│ └─ update-user.dto.ts
├─ prisma/
│ ├─ prisma.service.ts
│ └─ prisma.module.ts
├─ redis/
│ └─ redis.module.ts
├─ main.ts
└─ app.module.ts

prisma/
├─ schema.prisma
└─ prisma.config.ts

docker-compose.yml
Dockerfile
.env

yaml
Copy code

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/imranfarooq-dev/saas.git
cd saas
2. Install dependencies
bash
Copy code
yarn install
3. Environment Variables
Create a .env file:

env
Copy code
DATABASE_URL=postgresql://myuser:mypassword@localhost:5432/mydb
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=3600s
REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRES_IN=7d
4. Run Docker Services
bash
Copy code
docker-compose up -d
PostgreSQL: localhost:5432

Redis: localhost:6379

5. Prisma Setup
bash
Copy code
npx prisma generate
npx prisma migrate dev --name init
6. Running the App
bash
Copy code
yarn start:dev
Server runs at http://localhost:3000

API Endpoints
Auth
POST /auth/login – Login user, returns JWT

POST /auth/refresh – Refresh token

Middleware and guards protect admin routes

Users
POST /users – Create a new user

GET /users/:id – Get user by ID (cached)

PATCH /users/:id – Update user info

DELETE /users/:id – Delete user

Only admin can access certain routes based on role

Courses
POST /courses – Create a course for a user

GET /courses – List courses

PATCH /courses/:id – Update course

DELETE /courses/:id – Delete course

Testing
bash
Copy code
yarn test
Tech Stack
NestJS – Modular server framework

Prisma – ORM for PostgreSQL

PostgreSQL – Relational database

Redis – Caching layer

JWT – Authentication & Authorization

Docker – Containerization

Notes
Redis caching improves performance for repeated queries.

Role-based guards ensure secure admin-only operations.

DTO validation ensures input data integrity.
