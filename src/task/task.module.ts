import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { Task } from './task.entity'; // Certifique-se de importar a entidade Task

@Module({
  imports: [TypeOrmModule.forFeature([Task])], // Adicione esta linha para incluir a entidade
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
