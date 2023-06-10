import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Tuit } from './tuit.entity';
import { CreateTuitDto, UpdateTuitDto } from './dto';
import { User } from '../users/entities';

@Injectable()
export class TuitsService {
  constructor(
    @InjectRepository(Tuit) private readonly tuitRepository: Repository<Tuit>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

    async getTuits(): Promise <Tuit[]> {
        return await this.tuitRepository.find();
    }

    async getTuit(id: number):  Promise <Tuit> {
        const tuit =  await this.tuitRepository.findOne({ where: { id } });
        //si no existe el id en url lanzamos un error 404
        if(!tuit){
            throw new NotFoundException("Resource not found")
        }

        return tuit;

    }

    async createTuit(message : CreateTuitDto) {
        const tuit = this.tuitRepository.create(message);
        return this.tuitRepository.save(tuit);
    }

    async updateTuit(id: number, { message }: UpdateTuitDto) {
        const tuit = await this.tuitRepository.preload({
            message,
            id
          });
        
        if(!tuit){
            throw new NotFoundException("Resource not found")
        }
        return tuit;
    }

    async removeTuit(id: number): Promise<void> {
        const tuit: Tuit = await this.tuitRepository.findOne({ where: { id } });

        if (!tuit) {
            throw new NotFoundException('Resource nor found')
        }
        this.tuitRepository.remove(tuit);
    }
}
