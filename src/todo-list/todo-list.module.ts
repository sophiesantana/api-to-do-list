import { Module } from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { TodoListController } from './todo-list.controller';
import { TodoList } from './entities/todo-list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TodoList])],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoListModule {}
