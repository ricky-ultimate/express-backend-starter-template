# Express Backend Starter Template

A production-ready Express.js backend template with TypeScript, Prisma, and PostgreSQL.

## Tech Stack

- Express.js 5
- TypeScript
- Prisma ORM
- PostgreSQL
- Helmet for security
- CORS enabled
- Morgan for logging

## Project Structure

```
├── src/
│   ├── config/
│   │   └── db.config.ts
│   ├── constants/
│   │   ├── env.ts
│   │   └── routes.ts
│   ├── core/
│   │   └── auth/
│   │       └── auth.routes.ts
│   ├── utils/
│   │   └── logger.utils.ts
│   └── index.ts
├── prisma/
│   └── schema.prisma
├── .env
├── package.json
├── tsconfig.json
└── prisma.config.ts
```

## Getting Started

### Prerequisites

- Node.js installed
- PostgreSQL installed and running
- Git installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ricky-ultimate/express-backend-starter-template.git your-project-name
cd your-project-name
```

2. Remove git history and initialize fresh:
```bash
rm -rf .git
git init
```

3. Install dependencies:
```bash
npm install
```

4. Create .env file:
```bash
# Create .env with the following variables
PORT=5001
DATABASE_URL="postgresql://postgres:password@localhost:5432/your_database?schema=public"
```

5. Generate Prisma client:
```bash
npx prisma generate
```

6. Run initial migration:
```bash
npx prisma migrate dev --name init
```

7. Start development server:
```bash
npm run dev
```

## Available Scripts

| Script | Description |
|--------|-------------|
| npm run dev | Starts development server with hot reload |
| npm run build | Compiles TypeScript to JavaScript |
| npm start | Runs the compiled build |
| npm run db:push | Pushes schema changes to database |
| npm run db:studio | Opens Prisma Studio for database management |
| npm run db:pull | Pulls database schema into Prisma schema |
| npm run db:migrate | Creates a new migration |

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5001 |
| DATABASE_URL | PostgreSQL connection string | (required) |

## Database Schema

Edit `prisma/schema.prisma` to define your database models. Example:

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

After editing the schema, run:
```bash
npx prisma migrate dev --name add_user_model
```

## API Routes

Base route: `/api`

Default route: `/` - Health check

Auth routes can be added in `src/core/auth/auth.routes.ts`
