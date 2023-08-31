import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { UserService } from 'src/user/user.service';
import { TodoInput } from './todo.input';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepo: Repository<Todo>,
    private userService: UserService,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepo.find({ relations: { user: true } });
  }

  async create(todo: Todo) {
    const user = await this.userService.findOne(todo.user.userId);
    todo.user = user;
    return await this.todoRepo.save(todo);
  }

  async findOne(todoId: string) {
    return await this.todoRepo.findOneBy({ todoId });
  }

  async delete(todoId: string) {
    await this.todoRepo.delete(todoId);
    return 'Record Deleted successfully';
  }
}
