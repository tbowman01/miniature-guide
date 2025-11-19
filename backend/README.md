# Quantum Marketplace Exchange - Backend

RESTful API backend for the Quantum Marketplace Exchange platform built with Node.js, Express, and TypeScript.

## Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Knex.js
- **Cache**: Redis
- **Authentication**: JWT
- **Payment**: Stripe
- **Real-time**: Socket.io
- **Validation**: express-validator
- **Logging**: Winston

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- PostgreSQL >= 14
- Redis >= 6

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration

4. Run database migrations:
```bash
npm run migrate
```

5. (Optional) Seed database:
```bash
npm run seed
```

### Development

Run the development server:

```bash
npm run dev
```

API will be available at [http://localhost:3001](http://localhost:3001)

### Building

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Project Structure

```
backend/
├── src/
│   ├── controllers/    # Request handlers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── middleware/     # Custom middleware
│   ├── utils/          # Utility functions
│   ├── config/         # Configuration files
│   └── index.ts        # Application entry point
└── tests/              # Test files
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run migrate` - Run database migrations
- `npm run migrate:rollback` - Rollback last migration
- `npm run seed` - Seed database with sample data

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### Users
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update current user profile
- `GET /api/users/:id` - Get user by ID
- `GET /api/users/:id/products` - Get user's products
- `GET /api/users/:id/reviews` - Get user's reviews

### Products
- `GET /api/products` - List products with filters
- `GET /api/products/search` - Search products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `POST /api/products/:id/favorite` - Favorite product
- `DELETE /api/products/:id/favorite` - Unfavorite product

### Orders
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id/status` - Update order status
- `POST /api/orders/:id/cancel` - Cancel order
- `POST /api/orders/:id/refund` - Refund order

### Reviews
- `GET /api/reviews/product/:productId` - Get product reviews
- `POST /api/reviews` - Create review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review
- `POST /api/reviews/:id/helpful` - Mark review as helpful
- `POST /api/reviews/:id/response` - Seller response to review

### Messages
- `GET /api/messages/conversations` - Get user's conversations
- `GET /api/messages/conversations/:id` - Get conversation messages
- `POST /api/messages` - Send message
- `PUT /api/messages/:id/read` - Mark message as read

## Environment Variables

See `.env.example` for all available environment variables.

## Security Features

- Helmet.js for security headers
- Rate limiting
- CORS protection
- JWT authentication
- Input validation
- SQL injection prevention
- XSS protection

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

Proprietary
