// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
    // client: 'postgresql',
    // connection: {
    //   database: 'hackerpaste',
    //   user:     'postgres',
    //   password: 'test'
    // },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'hackerpaste',
      user:     'postgres',
      password: 'test'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'hackerpaste',
      user:     'postgres',
      password: 'test'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};