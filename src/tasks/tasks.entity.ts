
import { BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./task-status.entity";
import { TaskType } from "./task-type.entity";

export class Task extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    status: TaskStatus;
    @Column({ type: 'timestamptz', nullable: true })
    spentTime: Date;
    @Column({ type: 'timestamptz', nullable: true })
    estimatedTime:Date;
    @Column()
    sprint: string;
    @ManyToOne(type =>TaskType , taskType =>taskType.tasks) 
    taskType:TaskType;
}