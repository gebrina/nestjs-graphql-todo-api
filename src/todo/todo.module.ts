import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([Todo])],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
