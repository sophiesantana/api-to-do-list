import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoListModule } from './todo-list/todo-list.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TodoListModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
