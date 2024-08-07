import { Test, TestingModule } from '@nestjs/testing';
import { TodoListController } from './todo-list.controller';
import { TodoListService } from './todo-list.service';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { TodoList } from './entities/todo-list.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

describe('TodoListController', () => {
  let controller: TodoListController;
  let service: TodoListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoListController],
      providers: [
        {
          provide: TodoListService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TodoListController>(TodoListController);
    service = module.get<TodoListService>(TodoListService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a todo item', async () => {
      const createDto: CreateTodoListDto = { name: 'Test Todo' };
      const result: TodoList = { id: '1', name: 'Test Todo', done: false, createdAt: new Date(), updatedAt: new Date() };
      
      jest.spyOn(service, 'create').mockResolvedValue(result);
      
      expect(await controller.create(createDto)).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of todo items', async () => {
      const result: TodoList[] = [{ id: '1', name: 'Test Todo', done: false, createdAt: new Date(), updatedAt: new Date() }];
      
      jest.spyOn(service, 'findAll').mockResolvedValue(result);
      
      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('update', () => {
    it('should update a todo item', async () => {
      const updateDto: UpdateTodoListDto = { name: 'Updated Todo', done: true };
      const result: UpdateResult = {
      generatedMaps: [],
      raw: [],
      affected: 1,
    };

      jest.spyOn(service, 'update').mockResolvedValue(result);
      
      expect(await controller.update('1', updateDto)).toBe(result);
    });
  });

  describe('remove', () => {
    it('should remove a todo item', async () => {
      const result: DeleteResult = {
      raw: [],
      affected: 1,
    };

      jest.spyOn(service, 'remove').mockResolvedValue(result);
      
      expect(await controller.remove('1')).toBe(result);
    });
  });
});
