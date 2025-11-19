import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('email', 255).notNullable().unique();
    table.string('username', 50).notNullable().unique();
    table.string('password_hash', 255).notNullable();
    table.string('first_name', 100).notNullable();
    table.string('last_name', 100).notNullable();
    table.string('avatar_url', 500);
    table.text('bio');
    table.string('phone', 20);
    table.boolean('is_verified').defaultTo(false);
    table.boolean('is_active').defaultTo(true);
    table.enum('role', ['user', 'seller', 'admin']).defaultTo('user');
    table.decimal('rating', 3, 2).defaultTo(0);
    table.integer('review_count').defaultTo(0);
    table.timestamp('last_login_at');
    table.timestamps(true, true);
    table.timestamp('deleted_at');

    table.index('email');
    table.index('username');
    table.index('is_active');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
