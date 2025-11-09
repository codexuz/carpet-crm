# 📚 Swagger API Documentation Guide

## Access Swagger UI

Once the application is running, access the interactive API documentation at:

```
http://localhost:3000/api
```

## Features

### 🔍 Interactive API Explorer
- Browse all available endpoints
- View request/response schemas
- Try out endpoints directly from the browser
- See example requests and responses

### 🔐 Authentication
1. First, login via the `/auth/login` endpoint
2. Copy the `access_token` from the response
3. Click the **Authorize** button (🔒) at the top right
4. Enter: `Bearer <your_access_token>`
5. Click **Authorize**
6. All subsequent requests will include the token

### 📝 API Tags

The API is organized into the following groups:

- **auth** - Authentication endpoints (login, register)
- **users** - User management (Admin only for CRUD)
- **carpets** - Carpet inventory management
- **sale-points** - Sales location management
- **sales** - Sales transactions and payments
- **customers** - Customer management
- **debts** - Debt tracking and payment records
- **seller-profit** - Seller commission tracking

## Example Workflow

### 1. Authentication
```http
POST /auth/login
{
  "phone": "+998901234567",
  "password": "admin123"
}
```

Response:
```json
{
  "user": {
    "id": "clxxx...",
    "name": "Admin",
    "phone": "+998901234567",
    "role": "ADMIN"
  },
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 2. Create a Carpet
```http
POST /carpets
Authorization: Bearer <token>
{
  "code": "#101",
  "width": 2.5,
  "height": 3.0,
  "pattern": "Classic Rose",
  "color": "Qizil",
  "material": "Jun",
  "costPrice": 1500000,
  "sellPrice": 2000000
}
```

### 3. Create a Sale
```http
POST /sales
Authorization: Bearer <token>
{
  "salePointId": "clxxx...",
  "sellerId": "clxxx...",
  "customerId": "clxxx...",
  "items": [
    {
      "carpetId": "clxxx...",
      "price": 2000000
    }
  ],
  "paidAmount": 1500000
}
```

### 4. Add Payment
```http
POST /sales/{saleId}/payment
Authorization: Bearer <token>
{
  "amount": 500000,
  "note": "Qolgan qism to'landi"
}
```

## Request Examples by Module

### Carpets
**Search Carpets:**
```
GET /carpets?search=Rose&isSold=false
```

**Filter by Pattern:**
```
GET /carpets?pattern=Classic&color=Qizil
```

**Get Statistics:**
```
GET /carpets/stats
```

### Sales
**Filter Sales:**
```
GET /sales?sellerId=clxxx&salePointId=clxxx
```

**Get Sale Details:**
```
GET /sales/{id}
```

### Customers
**Search Customers:**
```
GET /customers?search=Abdullayev
```

**Top Debtors:**
```
GET /customers/top-debtors?limit=5
```

**Debt Summary:**
```
GET /customers/{id}/debt-summary
```

### Users
**Filter by Role:**
```
GET /users?role=SELLER
```

**Seller Statistics:**
```
GET /users/{id}/stats
```

### Seller Profit
**Filter by Seller:**
```
GET /seller-profit?sellerId=clxxx
```

**Overall Statistics:**
```
GET /seller-profit/stats
```

**Seller Stats:**
```
GET /seller-profit/seller/{sellerId}/stats
```

## Response Schemas

### Success Response
Most endpoints return the created/updated resource:
```json
{
  "id": "clxxx...",
  "field1": "value1",
  "field2": "value2",
  "createdAt": "2025-11-09T12:00:00.000Z"
}
```

### Error Responses

**400 Bad Request:**
```json
{
  "statusCode": 400,
  "message": ["field must be a string", "field should not be empty"],
  "error": "Bad Request"
}
```

**401 Unauthorized:**
```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

**403 Forbidden:**
```json
{
  "statusCode": 403,
  "message": "Sizda bu amalni bajarish uchun ruxsat yo'q",
  "error": "Forbidden"
}
```

**404 Not Found:**
```json
{
  "statusCode": 404,
  "message": "Resource topilmadi",
  "error": "Not Found"
}
```

## Data Types

### Currency
All prices are stored as **integers in som** (Uzbekistan currency):
- 1,000,000 = 1 million som
- Example: `costPrice: 1500000` = 1.5 million som

### IDs
All IDs use **CUID** format:
- Example: `clxxx123456789abcdef`
- Unique, sortable, URL-safe

### Phone Numbers
- Format: `+998XXXXXXXXX`
- Example: `+998901234567`

### Dates
- ISO 8601 format
- Example: `2025-11-09T12:00:00.000Z`

### Enums

**UserRole:**
- `ADMIN` - Full access
- `SELLER` - Limited access

**Boolean Filters:**
- Use string `"true"` or `"false"` in query parameters
- Example: `?isSold=false`

## Tips

### 1. Use the "Try it out" Feature
Click on any endpoint → "Try it out" → Fill in parameters → "Execute"

### 2. View Schema Models
Scroll down to see all schema definitions with example values

### 3. Copy Curl Commands
After executing a request, copy the generated curl command for use in scripts

### 4. Export OpenAPI Spec
The full OpenAPI/Swagger specification is available at:
```
http://localhost:3000/api-json
```

### 5. Testing Flow
1. Login as admin
2. Create sale points
3. Create sellers (users)
4. Create customers
5. Add carpets
6. Make sales
7. Track commissions and debts

## Advanced Features

### Filtering
Most list endpoints support query parameters for filtering:
- `search` - Free text search
- `role` - Filter by user role
- `isSold` - Filter sold/unsold carpets
- `pattern`, `color`, `material` - Filter carpets
- `sellerId`, `customerId`, `salePointId` - Filter sales

### Pagination
Currently, all results are returned. Implement pagination as needed.

### Sorting
Results are typically sorted by `createdAt` descending (newest first).

## Security Notes

- Always use HTTPS in production
- Keep JWT_SECRET secure
- Tokens expire after 30 days (configurable)
- Admin role required for sensitive operations
- All endpoints (except auth) require authentication

## Support

For more details, see:
- [API_DOCUMENTATION.md](API_DOCUMENTATION.md) - Full API reference
- [README.md](README.md) - Project overview
- [QUICK_START.md](QUICK_START.md) - Setup guide
