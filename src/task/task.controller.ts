import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService : TaskService){}

    @Get()
    findAll():Promise<Task[]>{
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id:string): Promise<Task>{
        return this.taskService.findOne(+id);
    }

    @Post()
    create(@Body() task:Task):Promise<Task>{
        return this.taskService.create(task);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() task: Partial<Task>):Promise<Task>{
        return this.taskService.update(+id, task);
    }

    @Delete(':id')
    delete(@Param('id') id:string):Promise<void>{
        return this.taskService.delete(+id)
    }
}
