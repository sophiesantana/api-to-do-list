import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import { TodoList } from 'src/todo-list/entities/todo-list.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: String(process.env.DB_PASSWORD),
  database: process.env.DB_NAME,
  logging: true,
  migrations: [`${__dirname}/../migrations/*.ts`],
  entities: [TodoList]
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;