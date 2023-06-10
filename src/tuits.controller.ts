import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';


@Controller('tuits')
export class TuitsController {

  @Get()
  getTuits(): string {
    return 'Hello from Tuitter';
  }

  @Get(':id')
  getTuit(@Param('id') id: string):string {
    return `Your tuit id is ${id}`
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createTuit(@Body('message') message: string) {
    return `Your tuit was: ${message}`;
  }
}
