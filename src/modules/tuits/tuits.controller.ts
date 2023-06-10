import { Controller,
    Get,
    Param,
    Body,
    Post,
    Patch,
    Delete,
    Query,
} from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';
import { CreateTuitDto, UpdateTuitDto } from './dto';



@Controller('tuits')
export class TuitsController {
    constructor(private readonly tuitService: TuitsService ){}

    @Get()
    getTuits(@Query() filterQuery): Promise <Tuit[]>{
        const { searchTerm, orderBy } = filterQuery;
        return this.tuitService.getTuits();
    }

    @Get(':id')
    getTuit(@Param('id') id: number): Promise<Tuit> {
        return this.tuitService.getTuit(id);
    }

    @Post()
    //@HttpCode(HttpStatus.NO_CONTENT)
    createTuit(@Body('message') message: CreateTuitDto):Promise <Tuit> {
        return this.tuitService.createTuit(message);
    }

    // especificamos la propriedade message y no el objeto entero
    @Patch(':id')
    updateTuit(@Param('id') id: number, @Body() tuit: UpdateTuitDto): Promise <Tuit> {
        return this.tuitService.updateTuit(id, tuit);
    }

    @Delete(':id')
    removeTuit(@Param('id') id: number): Promise <void>{
        return this.tuitService.removeTuit(id);
    }
}
