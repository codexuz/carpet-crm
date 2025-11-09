# 🧵 Carpet Store ERP System

A comprehensive Enterprise Resource Planning (ERP) system for carpet stores, built with NestJS and Prisma. Manage inventory, sales, customers, and seller commissions efficiently.

## ✨ Features

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (ADMIN, SELLER)
- Secure password hashing

### 📦 Inventory Management
- Complete carpet inventory tracking
- Specifications: dimensions, pattern, color, material
- Cost and sell price management
- Automatic area calculation
- Advanced search and filtering
- Real-time availability status

### 💰 Sales Management
- Multi-item sales transactions
- Automatic profit calculation
- Partial payment support
- Debt tracking
- Transaction-safe operations
- Payment history

### 👥 Customer Management
- Customer database
- Purchase history
- Debt tracking and payment recording
- Top debtors reports

### 🏪 Sales Points
- Multiple location management
- Location-specific statistics
- Sales tracking per point

### 💵 Seller Commission
- Automatic commission calculation (10% of profit)
- Performance tracking
- Commission tied to payment completion

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- PostgreSQL
- npm or yarn

### Installation

1. **Clone and install dependencies**
```bash
npm install
```

2. **Setup environment**
```bash
cp .env.example .env
# Edit .env with your database URL and JWT secret
```

3. **Setup database**
```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed  # Optional: adds sample data
```

4. **Start the server**
```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`

### Default Login Credentials (after seeding)
- **Admin**: Phone: `+998901234567`, Password: `admin123`
- **Seller**: Phone: `+998901234568`, Password: `seller123`

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Detailed setup guide
- **[API_DOCUMENTATION.md](API_DOCUMENTATION.md)** - Complete API reference
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Technical overview

## 🛠️ Tech Stack

- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (Passport)
- **Validation**: class-validator, class-transformer
- **Security**: bcrypt

## 📋 API Endpoints Overview

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login

### Core Resources (Protected)
- `/users` - User management (ADMIN)
- `/carpets` - Inventory management
- `/sale-points` - Sales locations
- `/sales` - Sales transactions
- `/customers` - Customer management
- `/debts` - Debt tracking
- `/seller-profit` - Commission reports

See [API_DOCUMENTATION.md](API_DOCUMENTATION.md) for complete endpoint list.

## 🗄️ Database Schema

- **User** - System users (admins and sellers)
- **SalePoint** - Physical sales locations
- **Carpet** - Carpet inventory
- **Sale** - Sales transactions
- **SaleItem** - Individual items in a sale
- **Customer** - Customer information
- **CustomerDebt** - Debt tracking
- **SellerProfit** - Commission records

## 📊 Key Business Logic

### Sale Creation
1. Validates carpet availability
2. Calculates totals (price, cost, profit)
3. Marks carpets as sold
4. Creates debt records
5. Calculates seller commission
6. All in a single transaction

### Payment Processing
1. Updates sale amounts
2. Records payment in debt history
3. Updates commission percentages
4. Transaction-safe

## 🧪 Development

### Available Scripts

```bash
# Development
npm run start:dev

# Build
npm run build

# Production
npm run start:prod

# Database
npm run prisma:generate    # Generate Prisma client
npm run prisma:migrate     # Run migrations
npm run prisma:seed        # Seed database
npm run prisma:studio      # Open Prisma Studio

# Testing
npm run test
npm run test:watch
npm run test:cov
```

## 📁 Project Structure

```
src/
├── auth/              # Authentication module
├── users/             # User management
├── carpets/           # Inventory
├── sale-points/       # Sales locations
├── sales/             # Sales transactions
├── customers/         # Customer management
├── debts/             # Debt tracking
├── seller-profit/     # Commission tracking
├── prisma/            # Prisma service
└── main.ts            # Entry point
```

## 🔒 Security Features

- JWT token authentication
- Role-based route protection
- Password hashing with bcrypt
- Request validation
- CORS enabled
- Environment variable configuration

## 🤝 Contributing

This is a complete ERP system ready for production use. Feel free to customize for your specific needs.

## 📄 License

MIT

---

Built with ❤️ using NestJS and Prisma
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
