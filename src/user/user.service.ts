import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async findOne(userId: string): Promise<User> {
    return await this.userRepo.findOneBy({ userId });
  }

  async create(user: User): Promise<User> {
    const newUser = this.userRepo.create(user);
    return await this.userRepo.save(newUser);
  }

  async delete(id: string): Promise<void> {
    await this.userRepo.delete(id);
  }

  async update(user: User): Promise<User> {
    const userTobeUpdated = await this.findOne(user.userId);
    if (!userTobeUpdated) throw new BadRequestException('Invalid id');
    return await this.userRepo.save(user);
  }
}
