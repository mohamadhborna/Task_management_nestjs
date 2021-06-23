
import { BaseEntity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./tasks.entity";

export class TaskType extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    typeName:string;
    @OneToMany(type =>Task , task => task.taskType) 
    tasks : Task[];
}