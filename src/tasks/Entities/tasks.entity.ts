import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./task-status.entity";
import { TaskType } from "./task-type.entity";

@Entity()
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    status: TaskStatus;
    @Column({type:'timestamp'})
    spentTime: Date;
    @Column({type:'timestamp'})
    estimatedTime: Date;
    @Column()
    sprint: string;
    @ManyToOne(type =>TaskType , taskType =>taskType.tasks) 
    taskType:number;
}
// "2020/01/01 08:00:01"