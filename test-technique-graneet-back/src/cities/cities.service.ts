import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Cities } from './cities.entity';

@Injectable()
export class CitiesService {
  private readonly cities: Cities[] = [];
  
  constructor(
    @InjectRepository(Cities)
    private usersRepository: Repository<Cities>,
  ) {}

  findAll(query: string): Promise<Cities[]> {
    return this.usersRepository.find({
      take: 100,
      where: [
        { name: ILike(`%${query}%`) },
        { postalCode: ILike(`%${query}%`) }
      ],
      order: {
        name: "ASC"
      }
    });
  }
}
