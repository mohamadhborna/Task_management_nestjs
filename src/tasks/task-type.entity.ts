import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./tasks.entity";

@Entity()
export class TaskType extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    typeName:string;
    @OneToMany(type =>Task , task => task.taskType) 
    tasks : Task[];
}