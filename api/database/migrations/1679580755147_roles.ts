import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'roles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 50).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
    this.defer(async (database) => { await database.table(this.tableName).multiInsert([
      {id: Roles.USER, name: 'User'},
      {id: Roles.ADMIN, name: 'Admin'},
    ])})
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
