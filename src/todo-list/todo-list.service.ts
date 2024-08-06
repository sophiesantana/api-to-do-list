import { Injectable } from '@nestjs/common';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { TodoList } from './entities/todo-list.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoListService {
  constructor(
    @InjectRepository(TodoList)
    private todoListRepository: Repository<TodoList>,
  ) {}

  create(createTodoListDto: CreateTodoListDto): Promise<TodoList> {
    return this.todoListRepository.save(createTodoListDto);
  }

  findAll(): Promise<TodoList[]> {
    return this.todoListRepository.find();
  }

  remove(id: string) {
    return this.todoListRepository.delete(id);
  }
}
