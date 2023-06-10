import { Controller, Get, Param,Body, Post } from '@nestjs/common';

@Controller('tuits')
export class TuitsController{
    @Get()
    getTuits(){
        return "hello from Tuitter";
    }

@Get(':id') // tuits/1
getTuit(@Param('id') id: string): string {
    return `Fetching tuits with ID: ${id}`;
    }

@Post()
createTuit(@Body('message') message: string): string{
    return `Your tuit was: ${message}`;
}
}


