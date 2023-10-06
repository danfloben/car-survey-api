import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Factors extends BaseSchema {
  protected tableName = 'factors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("title", 255).notNullable();
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
