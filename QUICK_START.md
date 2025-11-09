# 🚀 Quick Start Guide - Carpet Store ERP

## Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your database URL
# Example: DATABASE_URL="postgresql://postgres:password@localhost:5432/carpet_crm?schema=public"
```

### 3. Generate Prisma Client
```bash
npm run prisma:generate
```

### 4. Run Database Migrations
```bash
npm run prisma:migrate
# When prompted, name your migration (e.g., "init")
```

### 5. Seed the Database (Optional)
```bash
npm run prisma:seed
```

This will create:
- 1 Admin user (Phone: +998901234567, Password: admin123)
- 2 Seller users (Phones: +998901234568, +998901234569, Password: seller123)
- 2 Sale points
- 2 Customers
- 5 Sample carpets

### 6. Start the Development Server
```bash
npm run start:dev
```

The API will be running at `http://localhost:3000`

## Testing the API

### 1. Login as Admin
```bash
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "phone": "+998901234567",
  "password": "admin123"
}
```

Copy the `access_token` from the response.

### 2. Use the Token
Add this header to all subsequent requests:
```
Authorization: Bearer <your_access_token>
```

### 3. Try Some Endpoints

#### Get all carpets
```bash
GET http://localhost:3000/carpets
Authorization: Bearer <your_access_token>
```

#### Get carpet statistics
```bash
GET http://localhost:3000/carpets/stats
Authorization: Bearer <your_access_token>
```

#### Create a sale
```bash
POST http://localhost:3000/sales
Authorization: Bearer <your_access_token>
Content-Type: application/json

{
  "salePointId": "<sale_point_id>",
  "sellerId": "<seller_id>",
  "customerId": "<customer_id>",
  "items": [
    {
      "carpetId": "<carpet_id>",
      "price": 2000000
    }
  ],
  "paidAmount": 1000000
}
```

## Database Management

### View Database in Prisma Studio
```bash
npm run prisma:studio
```

This opens a visual database browser at `http://localhost:5555`

### Reset Database
```bash
npx prisma migrate reset
```

## Project Structure
```
src/
├── auth/              # Authentication (JWT, guards, decorators)
├── users/             # User management
├── carpets/           # Carpet inventory
├── sale-points/       # Sales locations
├── sales/             # Sales transactions
├── customers/         # Customer management
├── debts/             # Debt tracking
├── seller-profit/     # Commission tracking
├── prisma/            # Prisma service
├── app.module.ts      # Main application module
└── main.ts            # Application entry point
```

## Common Issues

### Port already in use
Change the PORT in your `.env` file:
```
PORT=3001
```

### Database connection error
Make sure:
1. PostgreSQL is running
2. Database URL in `.env` is correct
3. Database exists (or Prisma will create it)

### Prisma Client errors
Regenerate the client:
```bash
npm run prisma:generate
```

## Next Steps

1. Check `API_DOCUMENTATION.md` for complete API reference
2. Customize seller commission percentage in `sales/sales.service.ts`
3. Add more validations as needed
4. Implement additional business logic
5. Add frontend application

## Support

For issues or questions, refer to:
- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
