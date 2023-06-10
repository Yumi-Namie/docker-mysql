import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TuitsModule } from './modules/tuits/tuits.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [TuitsModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'database',
    port: 3306,
    username: 'admin',
    password: 'mysql-password',
    database: 'tuitter_api_server',
    entities: ['src/**/*.entity{ts,js}'],
    autoLoadEntities: true,
    synchronize: true
  }), UsersModule],
})
export class AppModule {}
