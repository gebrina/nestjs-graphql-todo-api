import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Todo } from 'src/todo/todo.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@ObjectType()
@Entity('users')
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  username: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @CreateDateColumn({ default: new Date() })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ default: new Date() })
  updatedAt: Date;

  @Field(() => [Todo], { nullable: true })
  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
