import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: String(process.env.DB_PASSWORD),
  database: process.env.DB_NAME,
  migrations: [`${__dirname}/../migrations/*.ts`],
  entities: [`${__dirname}/../**/**/*.entity.ts`]
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;