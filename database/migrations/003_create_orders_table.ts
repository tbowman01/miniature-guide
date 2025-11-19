import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('orders', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('buyer_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.uuid('seller_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.decimal('subtotal', 10, 2).notNullable();
    table.decimal('shipping', 10, 2).notNullable();
    table.decimal('tax', 10, 2).notNullable();
    table.decimal('total', 10, 2).notNullable();
    table.string('currency', 3).defaultTo('USD');
    table.enum('status', [
      'pending',
      'confirmed',
      'processing',
      'shipped',
      'delivered',
      'cancelled',
      'refunded'
    ]).defaultTo('pending');
    table.string('payment_method', 50).notNullable();
    table.enum('payment_status', ['pending', 'processing', 'completed', 'failed', 'refunded'])
      .defaultTo('pending');
    table.string('payment_intent_id', 255);
    table.jsonb('shipping_address').notNullable();
    table.string('tracking_number', 100);
    table.text('notes');
    table.timestamps(true, true);
    table.timestamp('deleted_at');

    table.index('buyer_id');
    table.index('seller_id');
    table.index('status');
    table.index('created_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('orders');
}
