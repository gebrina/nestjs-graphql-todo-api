import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Inject } from '@nestjs/common';
import { UserInput } from './user.input';

@Resolver((of) => User)
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Query(() => [User])
  findAllUsers() {
    return this.userService.findAll();
  }

  @Query(() => User)
  findOneUser(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  createUser(@Args('input') user: UserInput) {
    return this.userService.create(user as User);
  }

  @Mutation(() => User)
  updateUser(@Args('input') user: UserInput) {
    return this.userService.update(user as User);
  }

  @Mutation(() => User)
  deleteUser(@Args('id') id: string) {
    return this.userService.delete(id);
  }
}
