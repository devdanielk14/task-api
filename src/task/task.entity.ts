import { title } from "process";
import { from } from "rxjs";
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'


@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    descripton:string;

    @Column({default:false})
    isCompleted: boolean;
}

    
