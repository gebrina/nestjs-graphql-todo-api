import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { TodoStatus } from './todo-status.enum';
import { UserInput } from 'src/user/user.input';

@InputType()
export class TodoInput {
  @Field(() => ID, { nullable: true })
  todoId: string;

  @Field(() => String)
  title: string;

  @Field({ defaultValue: TodoStatus.PENDING })
  status: TodoStatus;

  @Field(() => String)
  description: string;

  @Field()
  user: UserInput;
}
