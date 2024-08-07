import { Injectable } from '@nestjs/common';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { TodoList } from './entities/todo-list.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';

@Injectable()
export class TodoListService {
  constructor(
    @InjectRepository(TodoList)
    private todoListRepository: Repository<TodoList>,
  ) {}

  create(createTodoListDto: CreateTodoListDto): Promise<TodoList> {
    return this.todoListRepository.save({ ...createTodoListDto, done: false });
  }

  findAll(): Promise<TodoList[]> {
    return this.todoListRepository.find({
      order: {
        createdAt: 'ASC'
      }
    });
  }

  async update(id: string, updateTodoListDto: UpdateTodoListDto) {
    return this.todoListRepository.update(id, {...updateTodoListDto});
  }

  remove(id: string) {
    return this.todoListRepository.delete(id);
  }
}
