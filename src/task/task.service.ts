import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';




@Injectable()
export class TaskService {
    constructor (
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ){}

     findAll(): Promise<Task[]>{
        return this.taskRepository.find();
     }

     findOne(id:number): Promise<Task>{
        return this.taskRepository.findOneBy({id});
     }

      create(task: Task):Promise<Task>{
        return this.taskRepository.save(task)
      }

      async update(id:number, task: Partial<Task>):Promise<Task>{
        await this.taskRepository.update(id,task);
        return this.findOne(id);
      }

      delete(id:number):Promise<void>{
        return this.taskRepository.delete(id).then(()=>{});
      }

}
