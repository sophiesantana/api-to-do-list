import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { TodoList } from './entities/todo-list.entity';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';

@Controller('todo-list')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @Post()
  create(@Body() createTodoListDto: CreateTodoListDto): Promise<TodoList> {
    return this.todoListService.create(createTodoListDto);
  }

  @Get()
  findAll() {
    return this.todoListService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoListDto: UpdateTodoListDto) {
    return this.todoListService.update(id, updateTodoListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoListService.remove(id);
  }
}
