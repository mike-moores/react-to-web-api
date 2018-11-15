exports.up = (knex, Promise) => {
      return knex.schema.createTable('widgets', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.integer('price')
        table.string('mfg')
        table.integer('inStock')
      })
    }

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('widgets')
}
