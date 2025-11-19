# Database Entity Relationship Diagram (ERD)

## Overview
This document describes the database schema and relationships for the Quantum Marketplace Exchange platform.

## Tables and Relationships

### Users
- **Primary Key**: id (UUID)
- **Relationships**:
  - One-to-Many with Products (as seller)
  - One-to-Many with Orders (as buyer)
  - One-to-Many with Orders (as seller)
  - One-to-Many with Reviews (as reviewer)
  - One-to-Many with Messages (as sender)
  - Many-to-Many with Conversations (through conversation_participants)
  - One-to-Many with Favorites
  - One-to-Many with Notifications

### Products
- **Primary Key**: id (UUID)
- **Foreign Keys**:
  - seller_id → users.id
- **Relationships**:
  - Many-to-One with Users (seller)
  - One-to-Many with OrderItems
  - One-to-Many with Reviews
  - One-to-Many with Favorites
  - One-to-Many with Conversations

### Orders
- **Primary Key**: id (UUID)
- **Foreign Keys**:
  - buyer_id → users.id
  - seller_id → users.id
- **Relationships**:
  - Many-to-One with Users (buyer)
  - Many-to-One with Users (seller)
  - One-to-Many with OrderItems
  - One-to-Many with Reviews

### OrderItems
- **Primary Key**: id (UUID)
- **Foreign Keys**:
  - order_id → orders.id
  - product_id → products.id
- **Relationships**:
  - Many-to-One with Orders
  - Many-to-One with Products

### Reviews
- **Primary Key**: id (UUID)
- **Foreign Keys**:
  - product_id → products.id
  - reviewer_id → users.id
  - order_id → orders.id (nullable)
- **Relationships**:
  - Many-to-One with Products
  - Many-to-One with Users (reviewer)
  - Many-to-One with Orders

### Conversations
- **Primary Key**: id (UUID)
- **Foreign Keys**:
  - product_id → products.id (nullable)
- **Relationships**:
  - Many-to-One with Products (optional)
  - One-to-Many with Messages
  - Many-to-Many with Users (through conversation_participants)

### ConversationParticipants
- **Primary Key**: id (UUID)
- **Foreign Keys**:
  - conversation_id → conversations.id
  - user_id → users.id
- **Relationships**:
  - Many-to-One with Conversations
  - Many-to-One with Users

### Messages
- **Primary Key**: id (UUID)
- **Foreign Keys**:
  - conversation_id → conversations.id
  - sender_id → users.id
- **Relationships**:
  - Many-to-One with Conversations
  - Many-to-One with Users (sender)

### Favorites
- **Primary Key**: id (UUID)
- **Foreign Keys**:
  - user_id → users.id
  - product_id → products.id
- **Relationships**:
  - Many-to-One with Users
  - Many-to-One with Products

### Notifications
- **Primary Key**: id (UUID)
- **Foreign Keys**:
  - user_id → users.id
- **Relationships**:
  - Many-to-One with Users

## Diagram (Mermaid)

```mermaid
erDiagram
    USERS ||--o{ PRODUCTS : "sells"
    USERS ||--o{ ORDERS : "buys"
    USERS ||--o{ ORDERS : "fulfills"
    USERS ||--o{ REVIEWS : "writes"
    USERS ||--o{ MESSAGES : "sends"
    USERS ||--o{ FAVORITES : "favorites"
    USERS ||--o{ NOTIFICATIONS : "receives"
    USERS ||--o{ CONVERSATION_PARTICIPANTS : "participates"

    PRODUCTS ||--o{ ORDER_ITEMS : "contains"
    PRODUCTS ||--o{ REVIEWS : "has"
    PRODUCTS ||--o{ FAVORITES : "has"
    PRODUCTS ||--o{ CONVERSATIONS : "discusses"

    ORDERS ||--o{ ORDER_ITEMS : "includes"
    ORDERS ||--o{ REVIEWS : "generates"

    CONVERSATIONS ||--o{ MESSAGES : "contains"
    CONVERSATIONS ||--o{ CONVERSATION_PARTICIPANTS : "includes"

    USERS {
        uuid id PK
        string email UK
        string username UK
        string password_hash
        string first_name
        string last_name
        string avatar_url
        text bio
        string phone
        boolean is_verified
        boolean is_active
        string role
        decimal rating
        integer review_count
        timestamp last_login_at
        timestamp created_at
        timestamp updated_at
    }

    PRODUCTS {
        uuid id PK
        uuid seller_id FK
        string title
        text description
        string category
        string subcategory
        jsonb images
        decimal price
        string currency
        string condition
        integer quantity
        string status
        jsonb shipping_info
        jsonb variants
        array tags
        integer views
        integer favorites
        timestamp created_at
        timestamp updated_at
    }

    ORDERS {
        uuid id PK
        uuid buyer_id FK
        uuid seller_id FK
        decimal subtotal
        decimal shipping
        decimal tax
        decimal total
        string currency
        string status
        string payment_method
        string payment_status
        string payment_intent_id
        jsonb shipping_address
        string tracking_number
        text notes
        timestamp created_at
        timestamp updated_at
    }

    ORDER_ITEMS {
        uuid id PK
        uuid order_id FK
        uuid product_id FK
        integer quantity
        decimal price
        string variant
        timestamp created_at
        timestamp updated_at
    }

    REVIEWS {
        uuid id PK
        uuid product_id FK
        uuid reviewer_id FK
        uuid order_id FK
        integer rating
        string title
        text comment
        jsonb images
        boolean is_verified_purchase
        integer helpful_count
        text seller_response
        timestamp seller_response_at
        timestamp created_at
        timestamp updated_at
    }

    CONVERSATIONS {
        uuid id PK
        uuid product_id FK
        timestamp created_at
        timestamp updated_at
    }

    CONVERSATION_PARTICIPANTS {
        uuid id PK
        uuid conversation_id FK
        uuid user_id FK
        integer unread_count
        timestamp last_read_at
        timestamp created_at
        timestamp updated_at
    }

    MESSAGES {
        uuid id PK
        uuid conversation_id FK
        uuid sender_id FK
        text content
        jsonb images
        boolean is_read
        timestamp created_at
        timestamp updated_at
    }

    FAVORITES {
        uuid id PK
        uuid user_id FK
        uuid product_id FK
        timestamp created_at
        timestamp updated_at
    }

    NOTIFICATIONS {
        uuid id PK
        uuid user_id FK
        string type
        string title
        text message
        jsonb data
        boolean is_read
        timestamp created_at
        timestamp updated_at
    }
```

## Key Design Decisions

1. **UUID Primary Keys**: Using UUIDs instead of auto-incrementing integers for better distributed system support and security.

2. **Soft Deletes**: All major tables include a `deleted_at` timestamp for soft deletion capability.

3. **JSONB Fields**: Using JSONB for flexible data storage (images, shipping info, variants) with indexing capabilities.

4. **Timestamps**: All tables have `created_at` and `updated_at` timestamps with automatic update triggers.

5. **Cascading Deletes**: Proper foreign key constraints with appropriate cascading behavior.

6. **Indexes**: Strategic indexes on frequently queried columns for performance optimization.

7. **Check Constraints**: Enum-like constraints on status fields for data integrity.

8. **Normalized Design**: Proper normalization with separate tables for order items, conversation participants, etc.
