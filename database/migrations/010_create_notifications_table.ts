import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('notifications', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.enum('type', ['message', 'order', 'review', 'payment', 'shipping', 'system']).notNullable();
    table.string('title', 255).notNullable();
    table.text('message').notNullable();
    table.jsonb('data');
    table.boolean('is_read').defaultTo(false);
    table.timestamps(true, true);
    table.timestamp('deleted_at');

    table.index('user_id');
    table.index('is_read');
    table.index('created_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('notifications');
}
