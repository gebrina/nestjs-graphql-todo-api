import { InputType, Field } from '@nestjs/graphql';
import { GraphQLObjectType } from 'graphql';
import { Todo } from 'src/todo/todo.entity';

@InputType()
export class UserInput {
  @Field()
  userId: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
