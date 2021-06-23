import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type : 'postgres',
    host :'localhost',
    port : 5432 ,
    username:'postgres',
    password: '1234',
    database: 'texon',
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize : true,
}
