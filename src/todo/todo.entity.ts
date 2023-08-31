import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { TodoStatus } from './todo-status.enum';
import { User } from 'src/user/user.entity';

@ObjectType()
@Entity('todos')
export class Todo {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  todoId: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({ default: TodoStatus.PENDING })
  status: TodoStatus;

  @Field()
  @Column('text')
  description: string;

  @Field()
  @CreateDateColumn()
  cretedAt: Date;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
