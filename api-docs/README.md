# API Documentation

## Overview
This directory contains comprehensive API documentation for the Quantum Marketplace Exchange platform.

## Contents

- **openapi.yaml**: OpenAPI 3.0 specification
- **README.md**: This file

## Quick Start

### Authentication

All authenticated endpoints require a JWT Bearer token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### Base URLs

- **Development**: `http://localhost:3001/api`
- **Production**: `https://api.quantum-marketplace.com`

### Rate Limiting

- General endpoints: 100 requests per 15 minutes
- Auth endpoints: 5 requests per 15 minutes
- Sensitive endpoints: 10 requests per hour

## API Endpoints

### Authentication

#### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "username": "johndoe",
  "password": "securepassword123",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "user": { ... },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Users

#### Get Current User
```http
GET /api/users/me
Authorization: Bearer <token>
```

#### Update Profile
```http
PUT /api/users/me
Authorization: Bearer <token>
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "bio": "I love buying and selling!"
}
```

### Products

#### List Products
```http
GET /api/products?page=1&limit=20&category=electronics&sortBy=recent
```

Query Parameters:
- `page` (integer): Page number (default: 1)
- `limit` (integer): Items per page (default: 20, max: 100)
- `category` (string): Filter by category
- `minPrice` (number): Minimum price
- `maxPrice` (number): Maximum price
- `condition` (string): Product condition (new, like-new, good, fair, poor)
- `sortBy` (string): Sort order (recent, price-asc, price-desc, popular, rating)

#### Get Product
```http
GET /api/products/{id}
```

#### Create Product
```http
POST /api/products
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "iPhone 14 Pro",
  "description": "Brand new, unopened iPhone 14 Pro",
  "category": "electronics",
  "subcategory": "smartphones",
  "price": 999.99,
  "condition": "new",
  "quantity": 1,
  "images": ["https://example.com/image1.jpg"],
  "shipping": {
    "methods": [
      {
        "name": "Standard Shipping",
        "price": 5.99,
        "estimatedDays": "3-5 business days"
      }
    ]
  },
  "tags": ["apple", "iphone", "smartphone"]
}
```

#### Update Product
```http
PUT /api/products/{id}
Authorization: Bearer <token>
Content-Type: application/json

{
  "price": 949.99,
  "quantity": 2
}
```

#### Delete Product
```http
DELETE /api/products/{id}
Authorization: Bearer <token>
```

#### Favorite Product
```http
POST /api/products/{id}/favorite
Authorization: Bearer <token>
```

### Orders

#### List Orders
```http
GET /api/orders?page=1&limit=20&status=delivered
Authorization: Bearer <token>
```

#### Get Order
```http
GET /api/orders/{id}
Authorization: Bearer <token>
```

#### Create Order
```http
POST /api/orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    {
      "productId": "123e4567-e89b-12d3-a456-426614174000",
      "quantity": 1
    }
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "zipCode": "94102",
    "country": "USA"
  },
  "paymentMethod": "stripe"
}
```

#### Update Order Status
```http
PUT /api/orders/{id}/status
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "shipped",
  "trackingNumber": "1Z999AA10123456784"
}
```

#### Cancel Order
```http
POST /api/orders/{id}/cancel
Authorization: Bearer <token>
```

### Reviews

#### Get Product Reviews
```http
GET /api/reviews/product/{productId}?page=1&limit=10
```

#### Create Review
```http
POST /api/reviews
Authorization: Bearer <token>
Content-Type: application/json

{
  "productId": "123e4567-e89b-12d3-a456-426614174000",
  "orderId": "987fcdeb-51a2-43f1-9876-543210fedcba",
  "rating": 5,
  "title": "Excellent product!",
  "comment": "This product exceeded my expectations. Highly recommend!",
  "images": ["https://example.com/review-photo.jpg"]
}
```

#### Update Review
```http
PUT /api/reviews/{id}
Authorization: Bearer <token>
Content-Type: application/json

{
  "rating": 4,
  "comment": "Updated my review after using it more."
}
```

#### Mark Review as Helpful
```http
POST /api/reviews/{id}/helpful
Authorization: Bearer <token>
```

#### Seller Response
```http
POST /api/reviews/{id}/response
Authorization: Bearer <token>
Content-Type: application/json

{
  "message": "Thank you for your feedback! We're glad you enjoyed our product."
}
```

### Messages

#### Get Conversations
```http
GET /api/messages/conversations
Authorization: Bearer <token>
```

#### Get Conversation Messages
```http
GET /api/messages/conversations/{id}?page=1&limit=50
Authorization: Bearer <token>
```

#### Send Message
```http
POST /api/messages
Authorization: Bearer <token>
Content-Type: application/json

{
  "receiverId": "123e4567-e89b-12d3-a456-426614174000",
  "conversationId": "987fcdeb-51a2-43f1-9876-543210fedcba",
  "content": "Is this item still available?",
  "images": []
}
```

#### Mark Message as Read
```http
PUT /api/messages/{id}/read
Authorization: Bearer <token>
```

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Optional success message"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": { ... }
  }
}
```

## HTTP Status Codes

- `200 OK` - Successful GET, PUT, DELETE
- `201 Created` - Successful POST
- `400 Bad Request` - Invalid input
- `401 Unauthorized` - Authentication required or failed
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error

## Error Codes

- `INVALID_INPUT` - Request validation failed
- `UNAUTHORIZED` - Authentication required
- `FORBIDDEN` - Insufficient permissions
- `NOT_FOUND` - Resource not found
- `DUPLICATE_ENTRY` - Resource already exists
- `RATE_LIMIT_EXCEEDED` - Too many requests
- `INTERNAL_ERROR` - Server error

## Pagination

List endpoints support pagination with these query parameters:

- `page` (integer): Page number (default: 1)
- `limit` (integer): Items per page (default: 20)

Paginated responses include:
```json
{
  "success": true,
  "data": {
    "items": [ ... ],
    "total": 150,
    "page": 1,
    "pageSize": 20,
    "totalPages": 8
  }
}
```

## Filtering and Sorting

Many list endpoints support filtering and sorting:

### Products
- Filter by: `category`, `condition`, `minPrice`, `maxPrice`
- Sort by: `recent`, `price-asc`, `price-desc`, `popular`, `rating`

### Orders
- Filter by: `status`, `dateFrom`, `dateTo`
- Sort by: `recent`, `total`

## Real-time Updates

The platform uses Socket.io for real-time updates:

### Connect to Socket
```javascript
import io from 'socket.io-client';

const socket = io('http://localhost:3001', {
  auth: {
    token: 'your_jwt_token'
  }
});
```

### Events

#### Join Room
```javascript
socket.emit('join-room', conversationId);
```

#### Send Message
```javascript
socket.emit('send-message', {
  conversationId: '...',
  content: 'Hello!',
  senderId: '...'
});
```

#### Receive Message
```javascript
socket.on('new-message', (message) => {
  console.log('New message:', message);
});
```

## File Uploads

Image uploads use multipart/form-data:

```http
POST /api/upload
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <binary_data>
```

Response:
```json
{
  "success": true,
  "data": {
    "url": "https://cdn.quantum-marketplace.com/uploads/image.jpg"
  }
}
```

## Webhook Events

The platform sends webhooks for important events:

- `order.created` - New order placed
- `order.updated` - Order status changed
- `payment.completed` - Payment successful
- `payment.failed` - Payment failed

Webhook payload:
```json
{
  "event": "order.created",
  "timestamp": "2025-11-19T12:00:00Z",
  "data": { ... }
}
```

## Testing the API

### Using cURL

```bash
# Login
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'

# Get products
curl http://localhost:3001/api/products?page=1&limit=10

# Create product
curl -X POST http://localhost:3001/api/products \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"title":"Product","description":"Description","price":99.99,...}'
```

### Using Postman

1. Import the OpenAPI spec from `openapi.yaml`
2. Set up environment variables for base URL and token
3. Create requests using the imported collection

### Using Swagger UI

View interactive API documentation:

```bash
# Install swagger-ui-express in backend
npm install swagger-ui-express

# Access at http://localhost:3001/api-docs
```

## SDKs and Client Libraries

Coming soon:
- JavaScript/TypeScript SDK
- Python SDK
- Mobile SDKs (iOS/Android)

## Support

For API support:
- Email: api@quantum-marketplace.com
- Documentation: https://docs.quantum-marketplace.com
- GitHub Issues: https://github.com/quantum-marketplace/api/issues

## Changelog

### Version 1.0.0 (2025-11-19)
- Initial API release
- Authentication endpoints
- User management
- Product CRUD operations
- Order processing
- Reviews and ratings
- Real-time messaging
