// eslint-disable-next-line no-unused-vars
import * as Knex from 'knex';
import path from 'path';
import 'dotenv/config';

const BASE_PATH:string = path.join('src','database');

interface IKnexConfig {
  development: Knex.Config;
  production: Knex.Config;
}

const config:IKnexConfig = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    }
  }

};

export = config;
