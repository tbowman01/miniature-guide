import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('reviews', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE');
    table.uuid('reviewer_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.uuid('order_id').references('id').inTable('orders').onDelete('SET NULL');
    table.integer('rating').notNullable().checkBetween([1, 5]);
    table.string('title', 255).notNullable();
    table.text('comment').notNullable();
    table.jsonb('images').defaultTo('[]');
    table.boolean('is_verified_purchase').defaultTo(false);
    table.integer('helpful_count').defaultTo(0);
    table.text('seller_response');
    table.timestamp('seller_response_at');
    table.timestamps(true, true);
    table.timestamp('deleted_at');

    table.index('product_id');
    table.index('reviewer_id');
    table.index('rating');
    table.unique(['product_id', 'reviewer_id', 'order_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('reviews');
}
