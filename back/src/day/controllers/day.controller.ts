import { Body, Controller, Post } from '@nestjs/common';
import { DayService } from '../services/day.service';
import { DayRequestDto } from '../dto/days.request.dto';

@Controller('day')
export class DayController {
  constructor(private readonly day: DayService) {}

  @Post('calculation')
  async dayCalculator(@Body() body: DayRequestDto) {
    return 'day';
  }

  @Post()
  async addDays(@Body() body: DayRequestDto) {
    return await this.day.addDays(body);
  }
}
