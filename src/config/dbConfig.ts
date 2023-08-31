import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConnection: TypeOrmModuleOptions = {
  type: 'postgres',
  database: 'forum',
  host: 'localhost',
  username: 'forumuser',
  password: 'forumuser',
  port: 5432,
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  autoLoadEntities: true,
};
