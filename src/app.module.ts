import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TuitsModule } from './modules/tuits/tuits.module';
import { UsersModule } from './modules/users/users.module';


 @Module({
   imports: [
     TuitsModule,
     TypeOrmModule.forRoot({
       type: 'postgres',
       //url: process.env.DATABASE_URL,
       host: process.env.DATABASE_HOST,
       port: parseInt(process.env.DATABASE_PORT),
       username: process.env.DATABASE_USERNAME,
       password: process.env.DATABASE_PASSWORD,
       database: process.env.DATABASE_NAME,
       entities: ['dist/**/*.entity{.ts,.js}'],
       autoLoadEntities: true,
       synchronize: true,
       ssl: process.env.SSL_ENABLED === 'true' ? {
        ca: process.env.SSL_CERT,
        rejectUnauthorized: false,
      } : false,
     }),
     UsersModule,
   ],
  
 })

export class AppModule {}




// @Module({
//   imports: [
//     TuitsModule,
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       //url: process.env.DATABASE_URL,
//       host: 'localhost',
//       port: parseInt('5432'),
//       username: 'admin',
//       password: 'postgres-password',
//       database: 'tuitter_api_server',
//       entities: ['dist/**/*.entity{.ts,.js}'],
//       autoLoadEntities: true,
//       synchronize: true,
//     }),
//     UsersModule,
//   ],
  
// })



// @Module({
//   imports: [TuitsModule, TypeOrmModule.forRoot({
//     type: 'mysql',
//     host: 'localhost',
//     port: 3307,
//     username: 'admin',
//     password: 'mysql-password',
//     database: 'tuitter_api_server',
//     entities: ['src/**/*.entity{ts,js}'],
//     autoLoadEntities: true,
//     synchronize: true
//   }), UsersModule],
// })
// export class AppModule {}
