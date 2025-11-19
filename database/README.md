# Database Documentation

## Overview
This directory contains all database-related files for the Quantum Marketplace Exchange platform, including migrations, seeds, and schema documentation.

## Directory Structure

```
database/
├── migrations/     # Database migration files
├── seeds/          # Database seed files
├── schemas/        # Schema documentation and SQL files
└── README.md       # This file
```

## Database Setup

### Prerequisites
- PostgreSQL 14 or higher
- pgcrypto extension (for UUID generation)

### Initial Setup

1. Create the database:
```sql
CREATE DATABASE quantum_marketplace;
```

2. Enable required extensions:
```sql
\c quantum_marketplace
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
```

3. Run migrations from the backend directory:
```bash
cd ../backend
npm run migrate
```

4. (Optional) Seed the database:
```bash
npm run seed
```

## Migrations

Migrations are written using Knex.js and are located in the `migrations/` directory. They are numbered sequentially and should be run in order.

### Creating a New Migration

From the backend directory:
```bash
npx knex migrate:make migration_name
```

### Running Migrations

```bash
npm run migrate
```

### Rolling Back Migrations

```bash
npm run migrate:rollback
```

## Seeds

Seed files populate the database with initial or test data. They are located in the `seeds/` directory.

### Creating a New Seed

From the backend directory:
```bash
npx knex seed:make seed_name
```

### Running Seeds

```bash
npm run seed
```

## Schema

### Tables

1. **users** - User accounts and profiles
2. **products** - Product listings
3. **orders** - Purchase orders
4. **order_items** - Individual items in an order
5. **reviews** - Product reviews and ratings
6. **conversations** - Message conversation containers
7. **conversation_participants** - Users in a conversation
8. **messages** - Individual messages
9. **favorites** - User's favorite products
10. **notifications** - User notifications

### Entity Relationship Diagram

See `schemas/ERD.md` for the complete entity relationship diagram and relationships between tables.

### Raw SQL Schema

The complete SQL schema is available in `schemas/database_schema.sql` for reference or manual database setup.

## Data Types

### Common Field Types

- **UUID**: Primary keys and foreign keys
- **VARCHAR**: Text fields with length limits
- **TEXT**: Unlimited text fields
- **INTEGER**: Whole numbers
- **DECIMAL(10,2)**: Currency and ratings
- **BOOLEAN**: True/false flags
- **TIMESTAMP**: Date and time values
- **JSONB**: Structured JSON data with indexing
- **TEXT[]**: Arrays of text values

### JSONB Fields

Several tables use JSONB fields for flexible data storage:

- **products.images**: Array of image URLs
- **products.shipping_info**: Shipping methods and details
- **products.variants**: Product variant options
- **orders.shipping_address**: Delivery address
- **reviews.images**: Review photo URLs
- **messages.images**: Message attachment URLs
- **notifications.data**: Additional notification data

## Indexes

Indexes are created on:
- All foreign keys
- Frequently queried fields (email, username, status, created_at)
- Fields used in WHERE clauses and JOIN conditions

## Constraints

### Unique Constraints
- users.email
- users.username
- favorites (user_id, product_id)
- conversation_participants (conversation_id, user_id)
- reviews (product_id, reviewer_id, order_id)

### Check Constraints
- reviews.rating (1-5)
- Enum-like constraints on status fields

### Foreign Key Constraints
All foreign keys have appropriate CASCADE or SET NULL actions.

## Performance Considerations

1. **Indexes**: Strategic indexes on frequently queried columns
2. **JSONB**: PostgreSQL's JSONB type provides efficient storage and querying
3. **Partitioning**: Consider partitioning large tables (messages, notifications) by date
4. **Connection Pooling**: Use connection pooling (configured in backend)
5. **Query Optimization**: Use EXPLAIN ANALYZE to optimize slow queries

## Backup and Recovery

### Creating Backups

```bash
pg_dump quantum_marketplace > backup.sql
```

### Restoring from Backup

```bash
psql quantum_marketplace < backup.sql
```

### Automated Backups

Set up automated daily backups using cron or cloud provider tools.

## Security

1. **Password Hashing**: User passwords are hashed using bcrypt
2. **Prepared Statements**: Knex.js uses parameterized queries to prevent SQL injection
3. **Soft Deletes**: Sensitive data is soft-deleted, not permanently removed
4. **Role-Based Access**: User roles control data access
5. **SSL Connections**: Enable SSL for database connections in production

## Maintenance

### Vacuuming

Regular vacuuming keeps the database healthy:
```sql
VACUUM ANALYZE;
```

### Index Maintenance

Rebuild indexes periodically:
```sql
REINDEX DATABASE quantum_marketplace;
```

### Statistics Update

Update table statistics for query optimization:
```sql
ANALYZE;
```

## Troubleshooting

### Common Issues

1. **Migration Failures**: Check migration order and dependencies
2. **Connection Issues**: Verify database credentials and connection pooling
3. **Slow Queries**: Use EXPLAIN ANALYZE and add indexes as needed
4. **Disk Space**: Monitor database size and implement archiving strategy

### Useful Commands

```sql
-- Check database size
SELECT pg_size_pretty(pg_database_size('quantum_marketplace'));

-- Check table sizes
SELECT
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- Check active connections
SELECT * FROM pg_stat_activity WHERE datname = 'quantum_marketplace';

-- Check slow queries
SELECT pid, now() - query_start as duration, query
FROM pg_stat_activity
WHERE state = 'active' AND now() - query_start > interval '5 seconds';
```

## References

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Knex.js Documentation](http://knexjs.org/)
- [Database Best Practices](https://wiki.postgresql.org/wiki/Don%27t_Do_This)
