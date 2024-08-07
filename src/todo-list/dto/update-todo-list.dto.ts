import { PartialType, OmitType } from '@nestjs/mapped-types';
import { TodoList } from '../entities/todo-list.entity';

export class UpdateTodoListDto extends PartialType(OmitType(TodoList, ['id'])) {}
 