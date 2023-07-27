import { Injectable } from '@nestjs/common';
import { DaysRepository } from '../day.repository';
import { DayRequestDto } from '../dto/days.request.dto';

@Injectable()
export class DayService {
  constructor(private readonly dayRepository: DaysRepository) {}
  async dayCanculate() {
    return '계산';
  }

  async addDays(body: DayRequestDto) {
    return await this.dayRepository.addDays(body);
  }
}
