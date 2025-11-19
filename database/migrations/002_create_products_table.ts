import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('seller_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.string('title', 255).notNullable();
    table.text('description').notNullable();
    table.string('category', 100).notNullable();
    table.string('subcategory', 100);
    table.jsonb('images').defaultTo('[]');
    table.decimal('price', 10, 2).notNullable();
    table.string('currency', 3).defaultTo('USD');
    table.enum('condition', ['new', 'like-new', 'good', 'fair', 'poor']).notNullable();
    table.integer('quantity').notNullable().defaultTo(1);
    table.enum('status', ['active', 'sold', 'inactive', 'pending']).defaultTo('active');
    table.jsonb('shipping_info').notNullable();
    table.jsonb('variants');
    table.specificType('tags', 'text[]').defaultTo('{}');
    table.integer('views').defaultTo(0);
    table.integer('favorites').defaultTo(0);
    table.timestamps(true, true);
    table.timestamp('deleted_at');

    table.index('seller_id');
    table.index('category');
    table.index('status');
    table.index('price');
    table.index('created_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('products');
}
