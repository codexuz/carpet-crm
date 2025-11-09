# Carpet Store ERP System

A complete ERP (Enterprise Resource Planning) system for managing carpet store operations including inventory, sales, customers, and seller commissions.

## Features

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (ADMIN, SELLER)
- Secure password hashing with bcrypt

### 👥 User Management
- Create and manage users (sellers and admins)
- Track seller performance and statistics
- View sales history per seller

### 🧵 Carpet Inventory
- Add, update, and delete carpet records
- Track carpet specifications (dimensions, pattern, color, material)
- Cost price and sell price management
- Automatic area calculation
- Search and filter capabilities
- Track sold vs. available inventory
- Inventory statistics and valuation

### 🏪 Sales Points
- Manage multiple sales locations
- Track sales per location
- Location-specific statistics

### 💰 Sales Management
- Complete sales workflow with transactions
- Multi-item sales support
- Automatic profit calculation
- Partial payment and debt tracking
- Payment history
- Automatic seller commission calculation
- Sale statistics and reporting

### 👤 Customer Management
- Customer database with contact info
- Purchase history
- Debt tracking per customer
- Top debtors report
- Customer debt summary

### 💳 Debt Management
- Track customer debts and payments
- Debt history with notes
- Payment recording
- Debt statistics

### 📊 Seller Profit/Commission
- Automatic commission calculation (10% of profit)
- Track commission based on payment completion
- Seller performance statistics
- Top sellers report

## Technology Stack

- **Backend Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (Passport)
- **Validation**: class-validator, class-transformer
- **Password Hashing**: bcrypt

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials and JWT secret
```

4. Generate Prisma client:
```bash
npx prisma generate
```

5. Run database migrations:
```bash
npx prisma migrate dev --name init
```

## Running the Application

### Development mode
```bash
npm run start:dev
```

### Production mode
```bash
npm run build
npm run start:prod
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login

### Users (Protected, ADMIN only for CUD)
- `GET /users` - Get all users (with optional role filter)
- `GET /users/:id` - Get user by ID
- `GET /users/:id/stats` - Get seller statistics
- `POST /users` - Create user (ADMIN)
- `PATCH /users/:id` - Update user (ADMIN)
- `DELETE /users/:id` - Delete user (ADMIN)

### Carpets (Protected)
- `GET /carpets` - Get all carpets (with filters)
- `GET /carpets/stats` - Get inventory statistics
- `GET /carpets/:id` - Get carpet by ID
- `GET /carpets/code/:code` - Get carpet by code
- `POST /carpets` - Add new carpet (ADMIN)
- `PATCH /carpets/:id` - Update carpet (ADMIN)
- `DELETE /carpets/:id` - Delete carpet (ADMIN)

### Sale Points (Protected)
- `GET /sale-points` - Get all sale points
- `GET /sale-points/:id` - Get sale point details
- `GET /sale-points/:id/stats` - Get sale point statistics
- `POST /sale-points` - Create sale point (ADMIN)
- `PATCH /sale-points/:id` - Update sale point (ADMIN)
- `DELETE /sale-points/:id` - Delete sale point (ADMIN)

### Sales (Protected)
- `GET /sales` - Get all sales (with filters)
- `GET /sales/stats` - Get sales statistics
- `GET /sales/:id` - Get sale details
- `POST /sales` - Create new sale
- `POST /sales/:id/payment` - Add payment to sale

### Customers (Protected)
- `GET /customers` - Get all customers (with search)
- `GET /customers/top-debtors` - Get top debtors
- `GET /customers/:id` - Get customer details
- `GET /customers/:id/debt-summary` - Get customer debt summary
- `POST /customers` - Create customer
- `PATCH /customers/:id` - Update customer
- `DELETE /customers/:id` - Delete customer

### Debts (Protected)
- `GET /debts` - Get all debt records (with customer filter)
- `GET /debts/stats` - Get debt statistics
- `GET /debts/:id` - Get debt record
- `POST /debts` - Create debt record
- `DELETE /debts/:id` - Delete debt record

### Seller Profit (Protected)
- `GET /seller-profit` - Get all profit records (with seller filter)
- `GET /seller-profit/stats` - Get overall statistics
- `GET /seller-profit/seller/:sellerId/stats` - Get seller statistics
- `GET /seller-profit/:id` - Get profit record

## Database Schema

The system uses the following main entities:
- **User** - System users (admins and sellers)
- **SalePoint** - Physical sales locations
- **Carpet** - Carpet inventory
- **Sale** - Sales transactions
- **SaleItem** - Individual items in a sale
- **Customer** - Customer information
- **CustomerDebt** - Customer debt tracking
- **SellerProfit** - Seller commission records

## Business Logic

### Sale Process
1. Create sale with items (carpets)
2. System automatically:
   - Calculates total price, cost, and profit
   - Marks carpets as sold
   - Creates customer debt records
   - Calculates seller commission (10% of profit)
   - Tracks payment status

### Payment Process
1. Add payment to sale
2. System automatically:
   - Updates sale paid/debt amounts
   - Records payment in customer debt history
   - Updates seller commission percentage based on payment completion

### Seller Commission
- Calculated as 10% of sale profit
- `openedPercent` tracks what percentage of the sale has been paid
- Commission is tied to payment completion

## Development

### Generate Prisma Client after schema changes
```bash
npx prisma generate
```

### Create and run migrations
```bash
npx prisma migrate dev --name migration_name
```

### Open Prisma Studio (Database GUI)
```bash
npx prisma studio
```

## License

MIT
