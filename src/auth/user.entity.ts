import { Task } from "src/tasks/Entities/tasks.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Role } from "./role.enum";
import * as bcrypt from 'bcrypt'

@Entity()
@Unique(['username'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    username:string;
    @Column()
    password: string;
    @Column("text" ,{array: true , nullable:true})
    role:Role[];
    @Column()
    salt: string
    @OneToMany(type  => Task ,task => task.user)    
    tasks:Task[] 

    async validatePassword(password:string):Promise<boolean>{
        const hash = await bcrypt.hash(password , this.salt);
        return hash === this.password
    }

}