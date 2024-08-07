import { Test, TestingModule } from '@nestjs/testing';
import { TodoListService } from './todo-list.service';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TodoList } from './entities/todo-list.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';

describe('TodoListService', () => {
  let service: TodoListService;
  let repository: Repository<TodoList>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoListService,
        {
          provide: getRepositoryToken(TodoList),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<TodoListService>(TodoListService);
    repository = module.get<Repository<TodoList>>(getRepositoryToken(TodoList));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a todo item', async () => {
      const createDto: CreateTodoListDto = { name: 'Test Todo' };
      const result: TodoList = { id: '1', name: 'Test Todo', done: false, createdAt: new Date(), updatedAt: new Date() };

      jest.spyOn(repository, 'save').mockResolvedValue(result);

      expect(await service.create(createDto)).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of todo items', async () => {
      const result: TodoList[] = [{ id: '1', name: 'Test Todo', done: false, createdAt: new Date(), updatedAt: new Date() }];

      jest.spyOn(repository, 'find').mockResolvedValue(result);

      expect(await service.findAll()).toBe(result);
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

      jest.spyOn(repository, 'update').mockResolvedValue(result);

      expect(await service.update('1', updateDto)).toBe(result);
    });
  });

  describe('remove', () => {
    it('should remove a todo item', async () => {
      const result: DeleteResult = {
      raw: [],
      affected: 1,
    };

      jest.spyOn(repository, 'delete').mockResolvedValue(result);

      expect(await service.remove('1')).toBe(result);
    });
  });
});
