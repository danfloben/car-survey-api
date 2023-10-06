import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Surveys extends BaseSchema {
  protected tableName = 'surveys'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("user_id", 15).notNullable();
      table.integer("car_model", 4).notNullable();
      table.integer("factor_id").notNullable();
      table.integer("drive_rate", 1).notNullable();
      table.integer("satisfaction_rate", 1).notNullable();
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
