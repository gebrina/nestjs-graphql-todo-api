import {
  Resolver,
  ResolveField,
  Parent,
  Args,
  Query,
  Mutation,
  PartialType,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { TodoInput } from './todo.input';

@Resolver((of) => Todo)
export class TodoResolver {
  constructor(@Inject(TodoService) private todoService: TodoService) {}

  @Query(() => [Todo])
  findAllTodos() {
    return this.todoService.findAll();
  }

  @Query(() => Todo)
  findOneTodo(@Args('todoId') todoId: string) {
    return this.todoService.findOne(todoId);
  }

  @Mutation(() => Todo, { nullable: true })
  deleteTodo(@Args('todoId') todoId: string) {
    return this.todoService.delete(todoId);
  }

  @Mutation(() => Todo)
  createTodo(@Args('input') input: TodoInput) {
    return this.todoService.create(input as Todo);
  }
}
