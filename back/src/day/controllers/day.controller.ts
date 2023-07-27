import { Body, Controller, Post } from '@nestjs/common';
import { DayService } from '../services/day.service';

@Controller('day')
export class DayController {
  constructor(private readonly day: DayService) {}

  @Post('calculation')
  async dayCalculator(@Body() body: any) {
    return 'day';
  }

  @Post()
  async addDay(@Body() body: any) {
    return await this.day.addDay(body);
  }
}
