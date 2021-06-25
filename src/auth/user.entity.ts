import { Task } from "src/tasks/Entities/tasks.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Role } from "./role.enum";

@Entity()
@Unique(['username'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    username:string;
    @Column()
    password: string;
    @Column()
    role:Role;
    @OneToMany(type  => Task ,task => task.user)    
    tasks:Task[] 

}