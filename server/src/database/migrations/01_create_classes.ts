import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')  //Se o id do professor é alterado, ele também é atualizado aqui nessa tabela
            .onDelete('CASCADE'); //Se o professor é deletado, o CASCADE faz com que as aulas dele também sejam deletadas
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}